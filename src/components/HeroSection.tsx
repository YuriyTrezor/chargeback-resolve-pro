import { motion } from "framer-motion";
import { TrendingUp, Percent, Send, Sparkles } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import avatarYuriy from "@/assets/avatar-alexey.png.asset.json";
import avatarAnna from "@/assets/avatar-elena.png.asset.json";
import avatarMaria from "@/assets/avatar-maria.jpg.asset.json";
import heroBg from "@/assets/hero-bg.jpg";

const stats = [
  { value: "92.3%", label: "Возврат вложенных средств", icon: TrendingUp },
  { value: "72%", label: "Возврат чистой прибыли", icon: Percent },
];

const managers = [
  {
    name: "Анна Крылова",
    role: "Ведущий специалист по chargeback",
    avatar: avatarAnna.url,
    max: "https://max.ru/u/f9LHodD0cOJt7NBEKU_MZoq8swMCoRvGT2ngCRv7Mvg_cV3LjHTY_wGF0Sw",
    tg: "https://t.me/Annak005",
    tgHandle: "@Annak005",
  },
  {
    name: "Юрий Романов",
    role: "Финансовый аналитик",
    avatar: avatarYuriy.url,
    max: "https://max.ru/u/f9LHodD0cOLFl01v9AIPPRfD4wMJOjlXb8HnBN2J8R93tlN58_xtK7s_wfQ",
    tg: "https://t.me/yuriy_romanov_fin",
    tgHandle: "@yuriy_romanov_fin",
  },
  {
    name: "Полина Тарасова",
    role: "Специалист по работе с банками",
    avatar: avatarMaria.url,
    max: "https://max.ru/u/f9LHodD0cOKTuyJ3w74xKB69rCiPNZgZG-hyzh4vhmhT1E2ByR507gqcIzA",
    tg: "https://t.me/pol008t",
    tgHandle: "@pol008t",
  },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-primary">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-border" />

      <div className="container relative z-10 py-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="h-px w-12 bg-primary-foreground/30" />
            <span className="text-primary-foreground/70 font-body text-sm tracking-[0.2em] uppercase">
              Chargeback
            </span>
            <div className="h-px w-12 bg-primary-foreground/30" />
          </div>

          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-primary-foreground">
            Chargeback —
            <br />
            <span className="text-primary-foreground">Ваш законный инструмент</span>
            <br />
            возврата средств
          </h1>

          <p className="text-primary-foreground/70 text-lg md:text-xl max-w-xl mx-auto mb-10 leading-relaxed font-body">
            Chargeback — это официальная банковская процедура, позволяющая оспорить 
            ранее совершённый платёж и вернуть деньги, если услуга не была оказана, 
            товар не получен или условия сделки были нарушены.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
            <Popover>
              <PopoverTrigger asChild>
                <button
                  type="button"
                  className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-cta text-cta-foreground font-body font-semibold rounded-md hover:opacity-90 transition-all shadow-lg shadow-cta/30 hover:shadow-cta/50 hover:-translate-y-0.5"
                >
                  <Sparkles className="w-4 h-4" />
                  Бесплатная консультация
                </button>
              </PopoverTrigger>
              <PopoverContent
                align="center"
                sideOffset={12}
                className="w-[min(92vw,420px)] p-0 overflow-hidden border-0 shadow-2xl rounded-2xl"
              >
                <div className="px-5 py-4 bg-gradient-to-br from-navy to-navy/80 text-white">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="flex h-2 w-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-[11px] uppercase tracking-[0.18em] text-white/70 font-body">
                      Специалисты онлайн
                    </span>
                  </div>
                  <div className="font-display text-lg font-bold">Выберите, кому написать</div>
                  <div className="text-xs text-white/70 font-body mt-0.5">
                    Ответим в течение нескольких минут
                  </div>
                </div>
                <div className="divide-y divide-border bg-card">
                  {managers.map((m) => (
                    <div key={m.name} className="p-4 hover:bg-muted/40 transition-colors">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="relative shrink-0">
                          <img
                            src={m.avatar}
                            alt={m.name}
                            className="w-12 h-12 rounded-full object-cover ring-2 ring-background"
                            loading="lazy"
                          />
                          <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-green-500 ring-2 ring-card" />
                        </div>
                        <div className="min-w-0 text-left">
                          <div className="font-body font-semibold text-sm text-foreground truncate">
                            {m.name}
                          </div>
                          <div className="text-[11px] text-muted-foreground truncate">{m.role}</div>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <a
                          href={m.max}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-navy text-white text-xs font-semibold hover:bg-navy/90 transition-colors"
                        >
                          <span className="flex items-center justify-center w-4 h-4 rounded bg-white text-navy text-[10px] font-black leading-none">
                            M
                          </span>
                          MAX
                        </a>
                        <a
                          href={m.tg}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg border border-navy/20 text-navy text-xs font-semibold hover:bg-navy/5 transition-colors"
                        >
                          <Send className="w-3.5 h-3.5" />
                          Telegram
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </PopoverContent>
            </Popover>
            <a
              href="#services"
              className="inline-flex items-center justify-center px-8 py-4 border border-primary-foreground/20 text-primary-foreground font-body font-medium rounded-md hover:bg-primary-foreground/5 transition-colors"
            >
              Подробнее
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-lg mx-auto"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex items-center gap-4 p-4 rounded-lg bg-primary-foreground/5 border border-primary-foreground/10 backdrop-blur-sm"
            >
              <stat.icon className="w-8 h-8 text-primary-foreground/60 shrink-0" />
              <div>
                <div className="text-2xl font-display font-bold text-primary-foreground">
                  {stat.value}
                </div>
                <div className="text-sm text-primary-foreground/60 font-body">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
