import { motion } from "framer-motion";
import { Shield, Lock, CreditCard, Award, BadgeCheck, Star } from "lucide-react";

const badges = [
  { icon: Lock, label: "SSL / HTTPS", desc: "Защищённое соединение" },
  { icon: Shield, label: "PCI DSS", desc: "Стандарт безопасности данных" },
  { icon: CreditCard, label: "Visa / Mastercard", desc: "Партнёрство с платёжными системами" },
  { icon: Award, label: "3+ года опыта", desc: "На рынке с 2022 года" },
  { icon: BadgeCheck, label: "500+ кейсов", desc: "Успешно закрытых дел" },
  { icon: Star, label: "92% успеха", desc: "Средний показатель возврата" },
];

const TrustBadges = () => {
  return (
    <section className="py-16 bg-secondary relative">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-3">
            Нам доверяют
          </h2>
          <p className="text-muted-foreground font-body text-lg">
            Сертификации, награды и стандарты безопасности
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5 max-w-5xl mx-auto">
          {badges.map((b, i) => (
            <motion.div
              key={b.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex flex-col items-center text-center p-5 rounded-lg bg-background border border-border shadow-soft"
            >
              <b.icon className="w-8 h-8 text-navy mb-3" />
              <div className="font-body font-semibold text-sm text-foreground mb-1">{b.label}</div>
              <div className="text-muted-foreground font-body text-xs">{b.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
