import { motion } from "framer-motion";
import { Send } from "lucide-react";
import avatarYuriy from "@/assets/avatar-alexey.png.asset.json";
import avatarAnna from "@/assets/avatar-elena.png.asset.json";
import avatarMaria from "@/assets/avatar-maria.jpg.asset.json";

const managers = [
  {
    name: "Анна Крылова",
    role: "Ведущий специалист по chargeback",
    bio: "Сопровождает клиентов с момента обращения до возврата средств. Готовит claim в банк, формирует доказательную базу и контролирует сроки рассмотрения по правилам Visa и Mastercard.",
    avatar: avatarAnna.url,
    max: "https://max.ru/u/f9LHodD0cOJt7NBEKU_MZoq8swMCoRvGT2ngCRv7Mvg_cV3LjHTY_wGF0Sw",
    tg: "https://t.me/Annak005",
    tgHandle: "@Annak005",
  },
  {
    name: "Юрий Романов",
    role: "Финансовый аналитик · возврат средств",
    bio: "Анализирует транзакции, выявляет основания для возврата и просчитывает шансы по каждому делу. Работает с международными платёжными системами и арбитражными процедурами.",
    avatar: avatarYuriy.url,
    max: "https://max.ru/u/f9LHodD0cOLFl01v9AIPPRfD4wMJOjlXb8HnBN2J8R93tlN58_xtK7s_wfQ",
    tg: "https://t.me/yuriy_romanov_fin",
    tgHandle: "@yuriy_romanov_fin",
  },
  {
    name: "Полина Тарасова",
    role: "Специалист по работе с банками",
    bio: "Ведёт переговоры с банками-эмитентами, готовит претензии и сопровождает клиента на всех этапах диспута. Помогает быстро собрать пакет документов для подачи заявления.",
    avatar: avatarMaria.url,
    max: "https://max.ru/u/f9LHodD0cOKTuyJ3w74xKB69rCiPNZgZG-hyzh4vhmhT1E2ByR507gqcIzA",
    tg: "https://t.me/pol008t",
    tgHandle: "@pol008t",
  },
];

const ManagersSection = () => {
  return (
    <section id="managers" className="py-24 relative bg-muted/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8 line-navy" />
            <span className="text-navy-light text-sm tracking-[0.2em] uppercase font-body">
              Команда
            </span>
            <div className="h-px w-8 line-navy" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Ваши персональные специалисты
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-body text-lg">
            Напишите напрямую любому из специалистов — ответят в течение нескольких минут в рабочее время.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {managers.map((m) => (
            <div
              key={m.name}
              className="group relative p-8 rounded-2xl bg-card border border-border shadow-soft hover:shadow-elegant hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center overflow-hidden"
            >
              <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-navy/5 to-transparent pointer-events-none" />
              <div className="relative mb-6">
                <div className="absolute inset-0 rounded-full bg-navy/10 blur-xl scale-110 opacity-0 group-hover:opacity-100 transition-opacity" />
                <img
                  src={m.avatar}
                  alt={m.name}
                  className="relative w-36 h-36 rounded-full object-cover ring-4 ring-background shadow-md"
                  loading="lazy"
                />
                <div className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-green-500 ring-4 ring-card" title="Онлайн" />
              </div>
              <div className="font-display font-bold text-foreground text-2xl mb-1">{m.name}</div>
              <div className="text-xs uppercase tracking-wider text-navy font-body font-semibold mb-4">
                {m.role}
              </div>
              <p className="text-sm text-muted-foreground font-body leading-relaxed mb-6 flex-1">
                {m.bio}
              </p>
              <div className="w-full space-y-2.5 mt-auto">
                <a
                  href={m.max}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-lg bg-navy text-white font-body text-sm font-semibold hover:bg-navy/90 transition-colors"
                >
                  <img src={maxLogo.url} alt="" className="w-5 h-5 rounded bg-white p-0.5" />
                  Написать в MAX
                </a>
                <a
                  href={m.tg}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-lg border-2 border-navy/20 text-navy font-body text-sm font-semibold hover:bg-navy/5 hover:border-navy/40 transition-colors"
                >
                  <Send className="w-4 h-4" />
                  Telegram · {m.tgHandle}
                </a>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ManagersSection;