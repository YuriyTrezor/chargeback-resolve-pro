import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { MessageCircle, X, Send, Smile, Headset } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { EMOJIS, WORK_HOURS_LABEL, isWorkingNow } from "@/lib/workHours";

type Msg = { id: string; sender_role: string; message: string; created_at: string };
const TOKEN_KEY = "guest_chat_token";
const NAME_KEY = "guest_chat_name";
const EMAIL_KEY = "guest_chat_email";

const field = "w-full bg-background border border-border rounded-lg px-3 py-2.5 text-sm font-body focus:outline-none focus:ring-2 focus:ring-navy/30";

const GuestChat = () => {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const [token, setToken] = useState(() => localStorage.getItem(TOKEN_KEY) || "");
  const [name, setName] = useState(() => localStorage.getItem(NAME_KEY) || "");
  const [email, setEmail] = useState(() => localStorage.getItem(EMAIL_KEY) || "");
  const [msgs, setMsgs] = useState<Msg[]>([]);
  const [text, setText] = useState("");
  const [err, setErr] = useState("");
  const [busy, setBusy] = useState(false);
  const [emoji, setEmoji] = useState(false);
  const [online, setOnline] = useState(isWorkingNow());
  const endRef = useRef<HTMLDivElement>(null);
  const taRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const id = setInterval(() => setOnline(isWorkingNow()), 60_000);
    return () => clearInterval(id);
  }, []);

  const load = async (t = token) => {
    if (!t) return;
    const { data } = await supabase.rpc("guest_chat_list", { _token: t });
    if (data) setMsgs(data as Msg[]);
  };

  useEffect(() => {
    if (!open || !token) return;
    load();
    const id = setInterval(() => { if (!document.hidden) load(); }, 5000);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, token]);

  useEffect(() => { endRef.current?.scrollIntoView({ behavior: "smooth" }); }, [msgs, open]);

  if (pathname.startsWith("/staff")) return null;

  const start = async () => {
    setErr("");
    if (!name.trim() || !/^\S+@\S+\.\S+$/.test(email.trim())) { setErr("Укажите имя и корректную почту"); return; }
    setBusy(true);
    const { data, error } = await supabase.rpc("guest_chat_init", { _token: token || null, _name: name, _email: email });
    setBusy(false);
    if (error || !data) { setErr("Не удалось начать чат, попробуйте ещё раз"); return; }
    localStorage.setItem(TOKEN_KEY, data as string);
    localStorage.setItem(NAME_KEY, name.trim());
    localStorage.setItem(EMAIL_KEY, email.trim());
    setToken(data as string);
    load(data as string);
  };

  const send = async () => {
    const t = text.trim();
    if (!t || busy) return;
    setBusy(true);
    setText("");
    setEmoji(false);
    if (taRef.current) taRef.current.style.height = "auto";
    const { error } = await supabase.rpc("guest_chat_send", { _token: token, _message: t });
    setBusy(false);
    if (error) { setText(t); setErr("Не удалось отправить"); return; }
    setErr("");
    load();
  };

  const addEmoji = (e: string) => {
    setText((v) => v + e);
    taRef.current?.focus();
  };

  const status = (
    <p className="text-[11px] text-primary-foreground/80 flex items-center gap-1.5">
      <span className={`w-2 h-2 rounded-full ${online ? "bg-cta" : "bg-muted-foreground"}`} />
      {online ? "Сейчас на связи" : "Нерабочее время"} · {WORK_HOURS_LABEL}
    </p>
  );

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        aria-label="Онлайн-чат"
        className="fixed bottom-5 right-5 z-50 h-14 w-14 rounded-full bg-navy text-primary-foreground shadow-xl flex items-center justify-center hover:scale-105 transition-transform"
      >
        {open ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>

      {open && (
        <div className="fixed bottom-24 right-3 md:right-5 z-50 w-[23rem] max-w-[calc(100vw-1.5rem)] h-[min(72dvh,34rem)] bg-card border border-border rounded-2xl shadow-2xl flex flex-col overflow-hidden">
          <div className="bg-navy px-4 py-3 flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-primary-foreground/15 flex items-center justify-center">
              <Headset className="w-4 h-4 text-primary-foreground" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-display text-base font-bold text-primary-foreground leading-tight">Онлайн-чат</h3>
              {status}
            </div>
            <button onClick={() => setOpen(false)} aria-label="Закрыть" className="text-primary-foreground/80 hover:text-primary-foreground">
              <X className="w-5 h-5" />
            </button>
          </div>

          {!online && (
            <div className="px-4 py-2 bg-secondary text-xs font-body text-muted-foreground">
              Сейчас нерабочее время. Оставьте сообщение — мы ответим в рабочие часы: {WORK_HOURS_LABEL}.
            </div>
          )}

          {!token ? (
            <div className="flex-1 flex flex-col justify-center px-6 gap-3">
              <p className="font-display text-lg font-bold text-navy text-center">Задайте вопрос</p>
              <p className="text-xs text-muted-foreground text-center font-body">Представьтесь — и мы ответим прямо здесь.</p>
              <input className={field} placeholder="Ваше имя" value={name} onChange={(e) => setName(e.target.value)} />
              <input className={field} type="email" placeholder="Ваша почта" value={email} onChange={(e) => setEmail(e.target.value)} />
              {err && <p className="text-xs text-destructive font-body">{err}</p>}
              <button onClick={start} disabled={busy} className="w-full py-2.5 rounded-lg bg-cta text-cta-foreground font-body text-sm font-semibold hover:opacity-90 disabled:opacity-60">
                {busy ? "Подключаем..." : "Начать чат"}
              </button>
            </div>
          ) : (
            <>
              <div className="flex-1 overflow-y-auto px-3 py-3 space-y-2 bg-secondary/40">
                {msgs.length === 0 && (
                  <div className="text-center py-10 px-6">
                    <p className="font-body font-semibold text-foreground mb-1">Здравствуйте, {name}!</p>
                    <p className="text-xs text-muted-foreground font-body">Напишите ваш вопрос — мы ответим в этом окне.</p>
                  </div>
                )}
                {msgs.map((m) => {
                  const mine = m.sender_role === "guest";
                  return (
                    <div key={m.id} className={`flex ${mine ? "justify-end" : "justify-start"}`}>
                      <div className={`max-w-[82%] px-3 py-2 rounded-2xl ${mine ? "bg-navy text-primary-foreground rounded-br-sm" : "bg-card border border-border text-foreground rounded-bl-sm"}`}>
                        {!mine && <p className="text-[10px] font-semibold text-navy mb-0.5">Поддержка</p>}
                        <p className="text-sm font-body leading-relaxed whitespace-pre-wrap break-words">{m.message}</p>
                        <p className={`text-[10px] mt-1 text-right ${mine ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                          {new Date(m.created_at).toLocaleString("ru-RU", { day: "2-digit", month: "2-digit", hour: "2-digit", minute: "2-digit" })}
                        </p>
                      </div>
                    </div>
                  );
                })}
                <div ref={endRef} />
              </div>

              {emoji && (
                <div className="grid grid-cols-10 gap-1 p-2 border-t border-border bg-card">
                  {EMOJIS.map((e) => (
                    <button key={e} type="button" onClick={() => addEmoji(e)} className="text-xl hover:scale-125 transition-transform">{e}</button>
                  ))}
                </div>
              )}
              {err && <p className="px-3 pt-1 text-xs text-destructive font-body">{err}</p>}
              <div className="p-2 border-t border-border flex items-end gap-1.5">
                <button type="button" onClick={() => setEmoji(!emoji)} aria-label="Смайлы" className="p-2 text-muted-foreground hover:text-navy">
                  <Smile className="w-5 h-5" />
                </button>
                <textarea
                  ref={taRef}
                  value={text}
                  rows={1}
                  maxLength={4000}
                  placeholder="Сообщение... (Shift+Enter — новая строка)"
                  onChange={(e) => { setText(e.target.value); e.target.style.height = "auto"; e.target.style.height = Math.min(e.target.scrollHeight, 140) + "px"; }}
                  onKeyDown={(e) => { if (e.key === "Enter" && !e.shiftKey && window.innerWidth >= 768) { e.preventDefault(); send(); } }}
                  className="flex-1 resize-none bg-background border border-border rounded-xl px-3 py-2 text-sm font-body focus:outline-none focus:ring-2 focus:ring-navy/30"
                />
                <button onClick={send} disabled={!text.trim() || busy} aria-label="Отправить" className="p-2.5 rounded-xl bg-cta text-cta-foreground disabled:opacity-40">
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default GuestChat;
