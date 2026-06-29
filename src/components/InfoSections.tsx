import { motion } from "framer-motion";
import { 
  AlertCircle, CreditCard, Package, FileX, Copy,
  ClipboardList, Building2, Search, CheckCircle,
  ShieldCheck, FileText, Scale, Globe,
  Lightbulb, Clock, FileCheck,
  Shield, Wallet, BarChart3, BookOpen
} from "lucide-react";

const useCases = [
  { icon: Package, text: "Брокер не вывел средства или заблокировал счёт без оснований" },
  { icon: AlertCircle, text: "Списание произошло без согласия владельца карты в пользу финансовой платформы" },
  { icon: FileX, text: "Инвестиционная компания предоставила ложные гарантии доходности" },
  { icon: FileText, text: "Были нарушены условия договора с брокером или финансовым посредником" },
  { icon: Copy, text: "Произошло повторное или скрытое списание комиссий финансовой организацией" },
];

const steps = [
  { num: "1", icon: ClipboardList, text: "Клиент подаёт заявление в свой банк" },
  { num: "2", icon: Building2, text: "Банк инициирует процесс через платёжную систему" },
  { num: "3", icon: Search, text: "Проводится рассмотрение и проверка доказательств" },
  { num: "4", icon: CheckCircle, text: "При подтверждении оснований — средства возвращаются" },
];

const reliability = [
  { icon: CreditCard, text: "Регулируется правилами Visa и Mastercard" },
  { icon: FileCheck, text: "Основано на документах и фактах" },
  { icon: ShieldCheck, text: "Защищает именно владельца карты" },
  { icon: Globe, text: "Признано международной банковской практикой" },
];

const clientGets = [
  { icon: Shield, text: "Законный способ защиты средств" },
  { icon: Wallet, text: "Возможность возврата денег" },
  { icon: Scale, text: "Прозрачную банковскую процедуру" },
  { icon: BookOpen, text: "Рассмотрение по установленным регламентам" },
];

const InfoSections = () => {
  return (
    <>
      {/* Когда применяется */}
      <section className="py-24 relative">
        <div className="container max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-8 line-navy" />
              <span className="text-navy-light text-sm tracking-[0.2em] uppercase font-body">
                Применение
              </span>
              <div className="h-px w-8 line-navy" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-8 text-center">
              Когда применяется Chargeback
            </h2>
            <p className="text-muted-foreground font-body text-lg mb-8 text-center">
              Процедура используется в случаях, когда:
            </p>
            <div className="space-y-4">
              {useCases.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex items-center gap-4 p-5 rounded-lg bg-card border border-border shadow-soft"
                >
                  <item.icon className="w-6 h-6 text-navy shrink-0" />
                  <span className="font-body text-foreground">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Как это работает */}
      <section className="py-24 bg-secondary relative">
        <div className="container max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-8 line-navy" />
              <span className="text-navy-light text-sm tracking-[0.2em] uppercase font-body">
                Процесс
              </span>
              <div className="h-px w-8 line-navy" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-8 text-center">
              Как это работает
            </h2>
            <div className="space-y-5">
              {steps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex items-center gap-5 p-5 rounded-lg bg-background border border-border shadow-soft"
                >
                  <div className="w-10 h-10 rounded-full bg-navy flex items-center justify-center text-primary-foreground font-display font-bold shrink-0">
                    {step.num}
                  </div>
                  <step.icon className="w-6 h-6 text-navy shrink-0" />
                  <span className="font-body text-lg text-foreground">{step.text}</span>
                </motion.div>
              ))}
            </div>
            <p className="text-muted-foreground font-body mt-8 text-center italic">
              Всё происходит строго в рамках банковских регламентов.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Почему это надёжно */}
      <section className="py-24 relative">
        <div className="container max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-8 text-center">
              Почему это надёжно
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {reliability.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex items-center gap-4 p-6 rounded-lg bg-card border border-border shadow-soft"
                >
                  <item.icon className="w-6 h-6 text-navy shrink-0" />
                  <span className="font-body text-foreground">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Ключевое преимущество + Важно для клиента */}
      <section className="py-24 bg-secondary relative">
        <div className="container max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 rounded-lg bg-background border border-border shadow-soft"
            >
              <Lightbulb className="w-8 h-8 text-navy mb-4" />
              <h3 className="font-display text-2xl font-bold mb-4">Ключевое преимущество</h3>
              <p className="font-body text-muted-foreground leading-relaxed">
                Процедура Chargeback является <strong className="text-foreground">бесплатной</strong> для клиента. 
                Банк не взимает комиссию за подачу заявления на оспаривание операции. 
                Это часть системы защиты держателей карт, а не платная услуга.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="p-8 rounded-lg bg-background border border-border shadow-soft"
            >
              <FileCheck className="w-8 h-8 text-navy mb-4" />
              <h3 className="font-display text-2xl font-bold mb-4">Важно для клиента</h3>
              <div className="space-y-4 font-body text-muted-foreground text-sm leading-relaxed">
                <p>💡 Подача заявления на Chargeback является бесплатной.</p>
                <p>⏳ Срок рассмотрения зависит от типа операции и обстоятельств дела.</p>
                <p>📄 Результат определяется качеством доказательств и соблюдением сроков.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Chargeback — это защита */}
      <section className="py-24 relative">
        <div className="container max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Chargeback — это защита, а не конфликт
            </h2>
            <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto">
              Это официальный финансовый механизм восстановления справедливости между клиентом 
              и получателем платежа. Если операция вызывает обоснованные сомнения — у Вас есть законное право.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-2xl mx-auto">
            {clientGets.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex items-center gap-4 p-6 rounded-lg bg-card border border-border shadow-soft"
              >
                <item.icon className="w-6 h-6 text-navy shrink-0" />
                <span className="font-body text-foreground">{item.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Защита Ваших прав */}
      <section className="py-24 bg-secondary relative">
        <div className="container max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Chargeback — это защита Ваших прав
            </h2>
            <p className="text-muted-foreground font-body text-lg mb-8 leading-relaxed">
              Если платёж оказался проблемным, у Вас есть официальный инструмент его оспаривания. 
              Главное — действовать своевременно и корректно оформить обращение.
            </p>
            <a
              href="https://max.ru/u/f9LHodD0cOJt7NBEKU_MZoq8swMCoRvGT2ngCRv7Mvg_cV3LjHTY_wGF0Sw"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-cta text-cta-foreground font-body font-semibold rounded-md hover:opacity-90 transition-opacity"
            >
              <span className="flex items-center justify-center w-6 h-6 rounded bg-white text-cta text-[13px] font-black leading-none" aria-hidden="true">M</span>
              Получить консультацию (MAX · Анна)
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default InfoSections;
