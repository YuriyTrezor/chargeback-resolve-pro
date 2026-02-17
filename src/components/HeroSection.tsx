import { motion } from "framer-motion";
import { Shield, TrendingUp, Award } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const stats = [
  { value: "98.7%", label: "Возврат средств", icon: TrendingUp },
  { value: "2500+", label: "Успешных дел", icon: Award },
  { value: "12 лет", label: "На рынке", icon: Shield },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-background/85" />
      <div className="absolute bottom-0 left-0 right-0 h-px line-gold opacity-30" />

      <div className="container relative z-10 py-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px w-12 line-gold" />
            <span className="text-gold font-body text-sm tracking-[0.2em] uppercase">
              Chargeback
            </span>
          </div>

          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            Профессиональный
            <br />
            <span className="text-gradient-gold">финансовый</span>
            <br />
            консалтинг
          </h1>

          <p className="text-muted-foreground text-lg md:text-xl max-w-xl mb-10 leading-relaxed font-body">
            Защищаем ваши финансовые интересы. Возврат денежных средств, 
            разрешение споров и юридическое сопровождение с гарантией результата.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-body font-semibold rounded-md hover:opacity-90 transition-opacity"
            >
              Бесплатная консультация
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center px-8 py-4 border border-gold-subtle text-foreground font-body font-medium rounded-md hover:bg-gold-subtle transition-colors"
            >
              Наши услуги
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex items-center gap-4 p-4 rounded-lg bg-card/50 border border-gold-subtle backdrop-blur-sm"
            >
              <stat.icon className="w-8 h-8 text-gold shrink-0" />
              <div>
                <div className="text-2xl font-display font-bold text-gradient-gold">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground font-body">
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
