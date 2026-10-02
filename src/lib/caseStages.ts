export const CASE_STAGES = [
  { value: "documents", label: "Документы собираются" },
  { value: "submitted", label: "Запрос в банке" },
  { value: "decision", label: "Решение принято" },
  { value: "completed", label: "Средства возвращены" },
] as const;

export const stageLabel = (v: string) =>
  CASE_STAGES.find((s) => s.value === v)?.label ?? v;

export const stageIndex = (v: string) =>
  Math.max(0, CASE_STAGES.findIndex((s) => s.value === v));
