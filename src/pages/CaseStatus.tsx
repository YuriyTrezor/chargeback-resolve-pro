import { useState } from "react";
import { z } from "zod";
import { Check, Search } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import Navbar from "@/components/Navbar";
import ContactFooter from "@/components/ContactFooter";
import { CASE_STAGES, stageIndex } from "@/lib/caseStages";

const schema = z.string().trim().min(1, "Введите почту или номер дела").max(255);

type Result = {
  case_number: string;
  client_name: string | null;
  stage: string;
  manager_comment: string | null;
  updated_at: string;
};

const CaseStatus = () => {
  const [query, setQuery] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<Result | null>(null);
  const [notFound, setNotFound] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setNotFound(false);
    setResult(null);
    const parsed = schema.safeParse(query);
    if (!parsed.success) {
      setError(parsed.error.issues[0].message);
      return;
    }
    setLoading(true);
    const { data, error } = await supabase.rpc("find_case_status", {
      _query: parsed.data,
    });
    setLoading(false);
    if (error) {
      setError("Не удалось выполнить проверку. Попробуйте позже.");
      return;
    }
    if (!data || data.length === 0) setNotFound(true);
    else setResult(data[0] as Result);
  };

  const current = result ? stageIndex(result.stage) : -1;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-32 pb-20">
        <div className="container max-w-2xl">
          <div className="text-center mb-10">
            <h1 className="font-display text-3xl md:text-4xl font-bold text-navy mb-3">
              Проверить статус дела
            </h1>
            <p className="font-body text-muted-foreground">
              Введите почту, указанную при обращении, и номер дела, который вам выдал менеджер.
            </p>
          </div>

          <form onSubmit={submit} className="bg-card border border-border rounded-xl p-6 shadow-soft space-y-4">
            <input
              type="email"
              placeholder="Ваша почта"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-md border border-input bg-background font-body text-sm"
            />
            <input
              type="text"
              inputMode="numeric"
              placeholder="Номер дела (только цифры), например 482915"
              value={caseNumber}
              onChange={(e) => setCaseNumber(e.target.value.replace(/\D/g, "").slice(0, 12))}
              className="w-full px-4 py-3 rounded-md border border-input bg-background font-body text-sm"
            />
            {error && <p className="text-sm text-destructive font-body">{error}</p>}
            <button
              type="submit"
              disabled={loading}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-cta text-cta-foreground font-body font-semibold rounded-md hover:opacity-90 disabled:opacity-60"
            >
              <Search className="w-4 h-4" />
              {loading ? "Проверяем..." : "Проверить"}
            </button>
          </form>

          {notFound && (
            <div className="mt-6 p-5 rounded-xl border border-border bg-secondary text-center font-body text-sm text-muted-foreground">
              Дело не найдено. Проверьте почту и номер дела или свяжитесь с вашим менеджером.
            </div>
          )}

          {result && (
            <div className="mt-8 bg-card border border-border rounded-xl p-6 shadow-soft">
              <div className="flex flex-wrap justify-between gap-2 mb-6">
                <div>
                  <div className="text-xs text-muted-foreground font-body">Дело</div>
                  <div className="font-display text-xl font-bold text-navy">{result.case_number}</div>
                  {result.client_name && (
                    <div className="text-sm font-body text-foreground">{result.client_name}</div>
                  )}
                </div>
                <div className="text-right text-xs text-muted-foreground font-body">
                  Обновлено
                  <div className="text-sm text-foreground">
                    {new Date(result.updated_at).toLocaleString("ru-RU")}
                  </div>
                </div>
              </div>

              <ol className="space-y-3">
                {CASE_STAGES.map((s, i) => {
                  const done = i < current;
                  const active = i === current;
                  return (
                    <li key={s.value} className="flex items-center gap-3">
                      <span
                        className={`flex items-center justify-center w-7 h-7 rounded-full text-xs font-bold ${
                          done || active ? "bg-navy text-primary-foreground" : "bg-secondary text-muted-foreground"
                        } ${active ? "ring-4 ring-navy/20" : ""}`}
                      >
                        {done ? <Check className="w-4 h-4" /> : i + 1}
                      </span>
                      <span
                        className={`font-body text-sm ${
                          active ? "font-semibold text-navy" : done ? "text-foreground" : "text-muted-foreground"
                        }`}
                      >
                        {s.label}
                      </span>
                    </li>
                  );
                })}
              </ol>

              {result.manager_comment && (
                <div className="mt-6 p-4 rounded-lg bg-secondary">
                  <div className="text-xs text-muted-foreground font-body mb-1">Комментарий менеджера</div>
                  <p className="font-body text-sm text-foreground whitespace-pre-line">{result.manager_comment}</p>
                </div>
              )}
            </div>
          )}
        </div>
      </section>
      <ContactFooter />
    </div>
  );
};

export default CaseStatus;
