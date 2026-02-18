import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Что такое Chargeback?",
    a: "Chargeback — это официальная банковская процедура, позволяющая оспорить ранее совершённый платёж и вернуть деньги на карту. Она регулируется правилами международных платёжных систем Visa и Mastercard.",
  },
  {
    q: "Это бесплатно?",
    a: "Первичная консультация и оценка перспектив дела — бесплатны. Стоимость сопровождения определяется индивидуально в зависимости от сложности кейса и суммы возврата.",
  },
  {
    q: "Сколько времени займёт возврат?",
    a: "Средний срок рассмотрения заявления на Chargeback составляет от 30 до 120 дней в зависимости от банка, платёжной системы и сложности дела.",
  },
  {
    q: "Какие документы нужны?",
    a: "Выписка по карте с оспариваемой транзакцией, переписка с продавцом (при наличии), договор или скриншоты условий сделки, любые подтверждающие материалы.",
  },
  {
    q: "Какие платёжные системы поддерживаются?",
    a: "Мы работаем со всеми основными платёжными системами: Visa, Mastercard, МИР. Процедура Chargeback поддерживается большинством банков мира.",
  },
  {
    q: "Можно ли вернуть криптовалюту?",
    a: "Да, мы работаем с возвратом средств, переведённых в криптовалюте. Проводим анализ транзакций и сопровождаем весь процесс возврата.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-24 relative">
      <div className="container max-w-3xl">
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
              FAQ
            </span>
            <div className="h-px w-8 line-navy" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Часто задаваемые вопросы
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-card border border-border rounded-lg px-6 shadow-soft"
              >
                <AccordionTrigger className="font-body font-semibold text-foreground text-left hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="font-body text-muted-foreground leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
