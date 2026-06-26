import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Алексей М.",
    text: "Обратился после того, как перевёл деньги на платформу, которая оказалась мошеннической. Ребята помогли собрать все доказательства и подали заявление в банк. Через 2 месяца деньги вернулись на карту. Огромное спасибо!",
    amount: "185 000 ₽",
    days: 58,
  },
  {
    name: "Елена К.",
    text: "Списали деньги за услугу, которую я не заказывала. Банк сначала отказал, но после подключения Chargeback Consulting процесс пошёл. Вернули всю сумму. Рекомендую всем!",
    amount: "42 000 ₽",
    days: 35,
  },
  {
    name: "Дмитрий С.",
    text: "Потерял деньги на криптоплатформе. Думал, что всё пропало. Команда Chargeback провела анализ транзакций и подготовила обращение. Удалось вернуть значительную часть средств.",
    amount: "$3 200",
    days: 90,
  },
  {
    name: "Ольга В.",
    text: "Двойное списание в интернет-магазине. Магазин игнорировал обращения. Через Chargeback вернули деньги без лишних нервов. Профессиональный подход, всё чётко.",
    amount: "28 500 ₽",
    days: 25,
  },
  {
    name: "Игорь П.",
    text: "Брокерская компания отказалась выводить средства. Обратился к Chargeback — они знали, как действовать. Подготовили документы, связались с банком. Деньги вернулись полностью.",
    amount: "410 000 ₽",
    days: 75,
  },
  {
    name: "Марина Т.",
    text: "Купила курс обучения, который оказался некачественным. Продавец отказал в возврате. Chargeback помогли оформить всё правильно и быстро. Деньги вернулись за 3 недели!",
    amount: "15 000 ₽",
    days: 21,
  },
];

const ReviewsSection = () => {
  return (
    <section id="reviews" className="py-24 bg-secondary relative">
      <div className="container">
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
              Отзывы
            </span>
            <div className="h-px w-8 line-navy" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Что говорят наши клиенты
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {reviews.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="p-6 rounded-lg bg-background border border-border shadow-soft flex flex-col"
            >
              <Quote className="w-6 h-6 text-navy/30 mb-3" />
              <p className="text-muted-foreground font-body text-sm leading-relaxed flex-1 mb-4">
                {r.text}
              </p>
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-cta text-cta" />
                ))}
              </div>
              <div className="flex items-center justify-between">
                <div className="font-body font-semibold text-sm text-foreground">{r.name}</div>
                <div className="text-xs font-body text-muted-foreground">
                  Возврат: <span className="text-cta font-semibold">{r.amount}</span> · {r.days} дн.
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
