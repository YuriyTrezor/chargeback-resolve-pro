import { useEffect, useState } from "react";
import type { Session } from "@supabase/supabase-js";
import { supabase } from "@/integrations/supabase/client";
import { CASE_STAGES } from "@/lib/caseStages";

type CaseRow = {
  id: string;
  case_number: string;
  client_email: string;
  client_name: string | null;
  stage: string;
  manager_comment: string | null;
  agreed_amount: number | null;
  updated_at: string;
};

const input = "w-full px-3 py-2 rounded-md border border-input bg-background font-body text-sm";
const btn = "px-4 py-2 rounded-md bg-navy text-primary-foreground font-body text-sm font-semibold hover:opacity-90 disabled:opacity-60";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMsg("");
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) setMsg("Неверная почта или пароль");
  };

  return (
    <form onSubmit={submit} className="max-w-sm mx-auto mt-24 bg-card border border-border rounded-xl p-6 space-y-3">
      <h1 className="font-display text-2xl font-bold text-navy text-center">Вход для сотрудников</h1>
      <input className={input} type="email" placeholder="Почта" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <input className={input} type="password" placeholder="Пароль" value={password} onChange={(e) => setPassword(e.target.value)} required minLength={6} />
      {msg && <p className="text-sm font-body text-muted-foreground">{msg}</p>}
      <button className={`${btn} w-full`} type="submit">Войти</button>
      <p className="text-xs text-center text-muted-foreground font-body">Доступ выдаёт только руководитель</p>
    </form>
  );
};

const CaseEditor = ({ row, onSaved }: { row: CaseRow; onSaved: () => void }) => {
  const [stage, setStage] = useState(row.stage);
  const [comment, setComment] = useState(row.manager_comment ?? "");
  const [amount, setAmount] = useState(row.agreed_amount != null ? String(row.agreed_amount) : "");
  const [saving, setSaving] = useState(false);

  const save = async () => {
    setSaving(true);
    await supabase.from("cases").update({ stage, manager_comment: comment.slice(0, 2000), agreed_amount: amount ? Number(amount) : null }).eq("id", row.id);
    setSaving(false);
    onSaved();
  };
  const remove = async () => {
    if (!confirm(`Удалить дело ${row.case_number}?`)) return;
    await supabase.from("cases").delete().eq("id", row.id);
    onSaved();
  };

  return (
    <div className="bg-card border border-border rounded-xl p-4 space-y-3">
      <div className="flex flex-wrap justify-between gap-2">
        <div>
          <div className="font-body font-semibold text-foreground">{row.client_name}</div>
          <div className="text-xs text-muted-foreground font-body">{row.client_email} · {new Date(row.updated_at).toLocaleString("ru-RU")}</div>
        </div>
        <div className="text-right">
          <div className="text-[11px] text-muted-foreground font-body">Номер дела</div>
          <div className="font-display font-bold text-navy text-lg">{row.case_number}</div>
        </div>
      </div>
      <select className={input} value={stage} onChange={(e) => setStage(e.target.value)}>
        {CASE_STAGES.map((s) => <option key={s.value} value={s.value}>{s.label}</option>)}
      </select>
      <input className={input} inputMode="decimal" placeholder="Согласованная сумма, ₽" value={amount} onChange={(e) => setAmount(e.target.value.replace(/[^\d.,]/g, "").replace(",", "."))} />
      <textarea className={input} rows={3} placeholder="Комментарий для клиента" value={comment} onChange={(e) => setComment(e.target.value)} />
      <div className="flex gap-2">
        <button className={btn} onClick={save} disabled={saving}>{saving ? "Сохраняем..." : "Сохранить"}</button>
        <button className="px-4 py-2 rounded-md border border-border font-body text-sm text-destructive" onClick={remove}>Удалить</button>
      </div>
    </div>
  );
};

const Staff = () => {
  const [session, setSession] = useState<Session | null>(null);
  const [ready, setReady] = useState(false);
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);
  const [cases, setCases] = useState<CaseRow[]>([]);
  const [search, setSearch] = useState("");
  const genNumber = () => String(100000 + Math.floor(Math.random() * 900000));
  const [nc, setNc] = useState({ client_email: "", client_name: "", amount: "" });
  const [err, setErr] = useState("");

  useEffect(() => {
    const { data: sub } = supabase.auth.onAuthStateChange((_e, s) => setSession(s));
    supabase.auth.getSession().then(({ data }) => { setSession(data.session); setReady(true); });
    return () => sub.subscription.unsubscribe();
  }, []);

  useEffect(() => {
    if (!session) { setIsAdmin(null); return; }
    supabase.rpc("has_role", { _user_id: session.user.id, _role: "admin" }).then(({ data }) => setIsAdmin(!!data));
  }, [session]);

  const load = async () => {
    const { data } = await supabase.from("cases").select("*").order("updated_at", { ascending: false });
    setCases((data as CaseRow[]) ?? []);
  };
  useEffect(() => { if (isAdmin) load(); }, [isAdmin]);

  const create = async (e: React.FormEvent) => {
    e.preventDefault();
    setErr("");
    const client_email = nc.client_email.trim().toLowerCase().slice(0, 255);
    const client_name = nc.client_name.trim().slice(0, 100) || null;
    if (!/^\S+@\S+\.\S+$/.test(client_email)) {
      setErr("Укажите корректную почту клиента");
      return;
    }
    const taken = new Set(cases.map((c) => c.case_number));
    let case_number = genNumber();
    while (taken.has(case_number)) case_number = genNumber();
    const { error } = await supabase.from("cases").insert({ case_number, client_email, client_name, agreed_amount: nc.amount ? Number(nc.amount) : null });
    if (error) { setErr("Не удалось создать дело"); return; }
    setNc({ client_email: "", client_name: "", amount: "" });
    load();
  };

  if (!ready) return null;
  if (!session) return <div className="min-h-screen bg-background px-4"><Login /></div>;

  const header = (
    <div className="flex justify-between items-center mb-6">
      <h1 className="font-display text-2xl font-bold text-navy">Дела клиентов</h1>
      <button className="text-sm font-body text-muted-foreground underline" onClick={() => supabase.auth.signOut()}>Выйти</button>
    </div>
  );

  if (isAdmin === false) {
    return (
      <div className="min-h-screen bg-background container max-w-2xl pt-16">
        {header}
        <p className="font-body text-muted-foreground">У этого аккаунта нет доступа. Попросите руководителя открыть доступ.</p>
      </div>
    );
  }

  const q = search.trim().toLowerCase();
  const filtered = q ? cases.filter((c) => c.case_number.toLowerCase().includes(q) || c.client_email.includes(q) || (c.client_name ?? "").toLowerCase().includes(q)) : cases;

  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-3xl pt-12 pb-20">
        {header}
        <form onSubmit={create} className="bg-secondary rounded-xl p-4 grid gap-3 md:grid-cols-4 mb-6">
          <input className={input} placeholder="Почта клиента" value={nc.client_email} onChange={(e) => setNc({ ...nc, client_email: e.target.value })} />
          <input className={input} placeholder="ФИО клиента" value={nc.client_name} onChange={(e) => setNc({ ...nc, client_name: e.target.value })} />
          <input className={input} inputMode="decimal" placeholder="Согласованная сумма, ₽" value={nc.amount} onChange={(e) => setNc({ ...nc, amount: e.target.value.replace(/[^\d.,]/g, "").replace(",", ".") })} />
          <button className={btn} type="submit">Добавить дело</button>
          {err && <p className="md:col-span-4 text-sm text-destructive font-body">{err}</p>}
        </form>
        <input className={`${input} mb-4`} placeholder="Поиск по номеру, почте или имени" value={search} onChange={(e) => setSearch(e.target.value)} />
        <div className="space-y-3">
          {filtered.map((c) => <CaseEditor key={c.id + c.updated_at} row={c} onSaved={load} />)}
          {filtered.length === 0 && <p className="text-sm text-muted-foreground font-body">Дел пока нет.</p>}
        </div>
      </div>
    </div>
  );
};

export default Staff;
