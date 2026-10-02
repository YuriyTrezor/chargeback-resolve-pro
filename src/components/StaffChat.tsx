import { useEffect, useRef, useState } from "react";
import { Send, Smile } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { EMOJIS } from "@/lib/workHours";

type Chat = { id: string; name: string; email: string; last_message_at: string };
type Msg = { id: string; chat_id: string; sender_role: string; message: string; is_read: boolean; created_at: string };

const StaffChat = ({ onUnread }: { onUnread?: (n: number) => void }) => {
  const [chats, setChats] = useState<Chat[]>([]);
  const [unread, setUnread] = useState<Record<string, number>>({});
  const [active, setActive] = useState<string | null>(null);
  const [msgs, setMsgs] = useState<Msg[]>([]);
  const [text, setText] = useState("");
  const [emoji, setEmoji] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);
  const taRef = useRef<HTMLTextAreaElement>(null);

  const loadChats = async () => {
    const { data: c } = await supabase.from("guest_chats").select("id,name,email,last_message_at").order("last_message_at", { ascending: false });
    setChats((c as Chat[]) ?? []);
    const { data: u } = await supabase.from("guest_chat_messages").select("chat_id").eq("sender_role", "guest").eq("is_read", false);
    const map: Record<string, number> = {};
    (u ?? []).forEach((r) => { map[r.chat_id] = (map[r.chat_id] ?? 0) + 1; });
    setUnread(map);
    onUnread?.(Object.values(map).reduce((a, b) => a + b, 0));
  };

  const loadMsgs = async (id: string) => {
    const { data } = await supabase.from("guest_chat_messages").select("*").eq("chat_id", id).order("created_at");
    setMsgs((data as Msg[]) ?? []);
    await supabase.from("guest_chat_messages").update({ is_read: true }).eq("chat_id", id).eq("sender_role", "guest").eq("is_read", false);
  };

  useEffect(() => {
    loadChats();
    const id = setInterval(() => { if (!document.hidden) loadChats(); }, 8000);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!active) return;
    loadMsgs(active);
    const id = setInterval(() => { if (!document.hidden) loadMsgs(active); }, 5000);
    return () => clearInterval(id);
  }, [active]);

  useEffect(() => { endRef.current?.scrollIntoView({ behavior: "smooth" }); }, [msgs]);

  const send = async () => {
    const t = text.trim();
    if (!t || !active) return;
    setText("");
    setEmoji(false);
    if (taRef.current) taRef.current.style.height = "auto";
    await supabase.from("guest_chat_messages").insert({ chat_id: active, sender_role: "admin", message: t.slice(0, 4000) });
    await supabase.from("guest_chats").update({ last_message_at: new Date().toISOString() }).eq("id", active);
    loadMsgs(active);
    loadChats();
  };

  const remove = async (id: string) => {
    if (!confirm("Удалить этот диалог?")) return;
    await supabase.from("guest_chats").delete().eq("id", id);
    if (active === id) { setActive(null); setMsgs([]); }
    loadChats();
  };

  const current = chats.find((c) => c.id === active);

  return (
    <div className="grid md:grid-cols-[16rem_1fr] gap-3 h-[70vh]">
      <div className={`bg-card border border-border rounded-xl overflow-y-auto ${active ? "hidden md:block" : ""}`}>
        {chats.length === 0 && <p className="p-4 text-sm text-muted-foreground font-body">Обращений пока нет.</p>}
        {chats.map((c) => (
          <button key={c.id} onClick={() => setActive(c.id)} className={`w-full text-left px-3 py-3 border-b border-border hover:bg-secondary ${active === c.id ? "bg-secondary" : ""}`}>
            <div className="flex justify-between gap-2">
              <span className="font-body font-semibold text-sm text-foreground truncate">{c.name}</span>
              {unread[c.id] ? <span className="text-[11px] px-1.5 rounded-full bg-cta text-cta-foreground">{unread[c.id]}</span> : null}
            </div>
            <div className="text-xs text-muted-foreground font-body truncate">{c.email}</div>
            <div className="text-[10px] text-muted-foreground font-body">{new Date(c.last_message_at).toLocaleString("ru-RU")}</div>
          </button>
        ))}
      </div>

      <div className={`bg-card border border-border rounded-xl flex flex-col overflow-hidden ${active ? "" : "hidden md:flex"}`}>
        {!current ? (
          <p className="m-auto text-sm text-muted-foreground font-body">Выберите диалог слева</p>
        ) : (
          <>
            <div className="px-4 py-3 border-b border-border flex justify-between items-center gap-2">
              <div className="min-w-0">
                <button className="md:hidden text-xs text-navy underline mb-1" onClick={() => setActive(null)}>← Все диалоги</button>
                <div className="font-body font-semibold text-foreground truncate">{current.name}</div>
                <div className="text-xs text-muted-foreground font-body truncate">{current.email}</div>
              </div>
              <button className="text-xs text-destructive font-body underline" onClick={() => remove(current.id)}>Удалить</button>
            </div>
            <div className="flex-1 overflow-y-auto p-3 space-y-2 bg-secondary/40">
              {msgs.map((m) => {
                const mine = m.sender_role === "admin";
                return (
                  <div key={m.id} className={`flex ${mine ? "justify-end" : "justify-start"}`}>
                    <div className={`max-w-[80%] px-3 py-2 rounded-2xl ${mine ? "bg-navy text-primary-foreground rounded-br-sm" : "bg-card border border-border rounded-bl-sm"}`}>
                      <p className="text-sm font-body whitespace-pre-wrap break-words">{m.message}</p>
                      <p className={`text-[10px] mt-1 text-right ${mine ? "text-primary-foreground/70" : "text-muted-foreground"}`}>{new Date(m.created_at).toLocaleString("ru-RU", { day: "2-digit", month: "2-digit", hour: "2-digit", minute: "2-digit" })}</p>
                    </div>
                  </div>
                );
              })}
              <div ref={endRef} />
            </div>
            {emoji && (
              <div className="grid grid-cols-10 gap-1 p-2 border-t border-border">
                {EMOJIS.map((e) => <button key={e} type="button" className="text-xl" onClick={() => { setText((v) => v + e); taRef.current?.focus(); }}>{e}</button>)}
              </div>
            )}
            <div className="p-2 border-t border-border flex items-end gap-1.5">
              <button type="button" onClick={() => setEmoji(!emoji)} aria-label="Смайлы" className="p-2 text-muted-foreground hover:text-navy"><Smile className="w-5 h-5" /></button>
              <textarea
                ref={taRef}
                value={text}
                rows={1}
                placeholder="Ответ клиенту..."
                onChange={(e) => { setText(e.target.value); e.target.style.height = "auto"; e.target.style.height = Math.min(e.target.scrollHeight, 160) + "px"; }}
                onKeyDown={(e) => { if (e.key === "Enter" && !e.shiftKey && window.innerWidth >= 768) { e.preventDefault(); send(); } }}
                className="flex-1 resize-none bg-background border border-border rounded-xl px-3 py-2 text-sm font-body focus:outline-none"
              />
              <button onClick={send} disabled={!text.trim()} aria-label="Отправить" className="p-2.5 rounded-xl bg-cta text-cta-foreground disabled:opacity-40"><Send className="w-4 h-4" /></button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default StaffChat;
