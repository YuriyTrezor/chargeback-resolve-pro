import { motion } from "framer-motion";
import { TrendingUp, Percent } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const stats = [
  { value: "92.3%", label: "Возврат вложенных средств", icon: TrendingUp },
  { value: "72%", label: "Возврат чистой прибыли", icon: Percent },
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
          className="max-w-3xl"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px w-12 bg-primary-foreground/30" />
            <span className="text-primary-foreground/70 font-body text-sm tracking-[0.2em] uppercase">
              Chargeback
            </span>
          </div>

          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-primary-foreground">
            Chargeback —
            <br />
            <span className="text-primary-foreground">Ваш законный инструмент</span>
            <br />
            возврата средств
          </h1>

          <p className="text-primary-foreground/70 text-lg md:text-xl max-w-xl mb-10 leading-relaxed font-body">
            Chargeback — это официальная банковская процедура, позволяющая оспорить 
            ранее совершённый платёж и вернуть деньги, если услуга не была оказана, 
            товар не получен или условия сделки были нарушены.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-cta text-cta-foreground font-body font-semibold rounded-md hover:opacity-90 transition-opacity"
            >
              Бесплатная консультация
            </a>
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
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-lg"
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
