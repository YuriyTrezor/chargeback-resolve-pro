import { motion } from "framer-motion";
import { Target, Users, TrendingUp, Globe } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 line-navy" />
            <span className="text-navy-light text-sm tracking-[0.2em] uppercase font-body">
              О нас
            </span>
            <div className="h-px w-8 line-navy" />
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            Кто мы и чем занимаемся
          </h2>
          <p className="text-muted-foreground font-body text-lg leading-relaxed mb-8">
            Chargeback — это команда специалистов в сфере финансового консалтинга, 
            специализирующаяся на возврате денежных средств через процедуру Chargeback. 
            Мы помогаем физическим и юридическим лицам вернуть деньги, списанные без согласия, 
            за неоказанные услуги или некачественные товары. Работаем с 2022 года, 
            за это время успешно закрыли более 500 кейсов.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            { icon: Target, title: "Наша миссия", text: "Защитить права клиентов и вернуть их деньги законным путём через банковские процедуры" },
            { icon: Users, title: "Команда", text: "Финансовые аналитики, специалисты по платёжным системам и эксперты по Chargeback" },
            { icon: TrendingUp, title: "Результаты", text: "92% успешных возвратов, средний срок — 45 дней, более 500 закрытых кейсов" },
            { icon: Globe, title: "География", text: "Работаем со всеми странами, поддерживаем Visa, Mastercard и криптовалютные переводы" },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="p-6 rounded-lg bg-card border border-border shadow-soft"
            >
              <item.icon className="w-8 h-8 text-navy mb-3" />
              <h3 className="font-display text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
