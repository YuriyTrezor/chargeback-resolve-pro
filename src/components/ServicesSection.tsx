import { motion } from "framer-motion";
import { Banknote, Gavel, BarChart3, ShieldCheck, FileSearch, Bitcoin } from "lucide-react";

const services = [
  {
    icon: Banknote,
    title: "Возврат денежных средств",
    description: "Профессиональное сопровождение процедуры chargeback. Работаем со всеми платёжными системами.",
  },
  {
    icon: Bitcoin,
    title: "Возврат криптовалютных средств",
    description: "Работаем с возвратом средств, которые были переведены в криптовалюте. Анализ транзакций и сопровождение процесса.",
  },
  {
    icon: Gavel,
    title: "Разрешение споров",
    description: "Медиация, арбитраж и представительство. Защита интересов в финансовых спорах любой сложности.",
  },
  {
    icon: BarChart3,
    title: "Финансовый аудит",
    description: "Комплексный анализ финансовой деятельности, выявление рисков и оптимизация денежных потоков.",
  },
  {
    icon: FileSearch,
    title: "Проверка контрактов",
    description: "Если Ваше дело не имеет успеха, мы сразу об этом скажем. Честная оценка перспектив до начала работы.",
  },
  {
    icon: ShieldCheck,
    title: "Полное сопровождение",
    description: "Полное сопровождение Ваших средств от момента обращения до получения денег.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 relative">
      <div className="absolute top-0 left-0 right-0 h-px line-gold opacity-10" />
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8 line-gold" />
            <span className="text-gold text-sm tracking-[0.2em] uppercase font-body">
              Услуги
            </span>
            <div className="h-px w-8 line-gold" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Области экспертизы
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-body text-lg">
            Предоставляем полный спектр финансовых услуг для физических и юридических лиц
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group p-8 rounded-lg bg-card border border-gold-subtle hover:glow-gold transition-all duration-500"
            >
              <service.icon className="w-10 h-10 text-gold mb-5 group-hover:scale-110 transition-transform" />
              <h3 className="font-display text-xl font-semibold mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
