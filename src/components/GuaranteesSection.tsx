import { motion } from "framer-motion";
import { MessageCircle, EyeOff, ShieldCheck, FileText } from "lucide-react";

const guarantees = [
  { icon: MessageCircle, title: "Бесплатная консультация", desc: "Первичная оценка дела и перспектив — без оплаты" },
  { icon: EyeOff, title: "Никаких скрытых комиссий", desc: "Все условия фиксируются в договоре заранее" },
  { icon: ShieldCheck, title: "Конфиденциальность", desc: "Данные защищены в соответствии с политикой конфиденциальности" },
  { icon: FileText, title: "Прозрачные условия", desc: "Полный пакет юридических документов доступен на сайте" },
];

const GuaranteesSection = () => {
  return (
    <section className="py-24 bg-secondary relative">
      <div className="container max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8 line-navy" />
            <span className="text-navy-light text-sm tracking-[0.2em] uppercase font-body">
              Гарантии
            </span>
            <div className="h-px w-8 line-navy" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Прозрачность и гарантии
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {guarantees.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex items-start gap-4 p-6 rounded-lg bg-background border border-border shadow-soft"
            >
              <g.icon className="w-8 h-8 text-cta shrink-0 mt-1" />
              <div>
                <div className="font-body font-semibold text-foreground mb-1">{g.title}</div>
                <div className="text-muted-foreground font-body text-sm">{g.desc}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GuaranteesSection;
