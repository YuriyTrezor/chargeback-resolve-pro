import { motion } from "framer-motion";
import { Mail, Clock, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactFooter = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Заявка от ${formData.name}`);
    const body = encodeURIComponent(
      `Имя: ${formData.name}\nEmail: ${formData.email}\nТелефон: ${formData.phone}\n\nСообщение:\n${formData.message}`
    );
    window.location.href = `mailto:chargeback2022ru@gmail.com?subject=${subject}&body=${body}`;
    toast({ title: "Заявка отправляется", description: "Откроется ваш почтовый клиент для отправки." });
  };

  return (
    <>
      <section id="contact" className="py-24 relative">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-8 line-navy" />
              <span className="text-navy-light text-sm tracking-[0.2em] uppercase font-body">
                Контакты
              </span>
              <div className="h-px w-8 line-navy" />
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Нужна консультация по ситуации?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto font-body text-lg">
              Мы поможем оценить перспективы дела, проверить основания и подготовить грамотное обращение в банк.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <motion.form
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              onSubmit={handleSubmit}
              className="space-y-5"
            >
              <div>
                <input
                  type="text"
                  placeholder="Ваше имя"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-5 py-4 rounded-md bg-card border border-border text-foreground placeholder:text-muted-foreground font-body focus:outline-none focus:border-navy/40 focus:shadow-soft transition-all"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <input
                  type="email"
                  placeholder="Email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-5 py-4 rounded-md bg-card border border-border text-foreground placeholder:text-muted-foreground font-body focus:outline-none focus:border-navy/40 focus:shadow-soft transition-all"
                />
                <input
                  type="tel"
                  placeholder="Телефон"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-5 py-4 rounded-md bg-card border border-border text-foreground placeholder:text-muted-foreground font-body focus:outline-none focus:border-navy/40 focus:shadow-soft transition-all"
                />
              </div>
              <div>
                <textarea
                  placeholder="Опишите вашу ситуацию"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-5 py-4 rounded-md bg-card border border-border text-foreground placeholder:text-muted-foreground font-body focus:outline-none focus:border-navy/40 focus:shadow-soft transition-all resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full px-8 py-4 bg-cta text-cta-foreground font-body font-semibold rounded-md hover:opacity-90 transition-opacity cursor-pointer"
              >
                Отправить заявку
              </button>
            </motion.form>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-navy shrink-0 mt-1" />
                <div>
                  <div className="font-body font-semibold mb-1 text-foreground">Email</div>
                  <a
                    href="mailto:chargeback2022ru@gmail.com"
                    className="text-muted-foreground font-body text-sm hover:text-navy transition-colors underline"
                  >
                    chargeback2022ru@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Send className="w-6 h-6 text-navy shrink-0 mt-1" />
                <div>
                  <div className="font-body font-semibold mb-1 text-foreground">Telegram</div>
                  <a
                    href="https://t.me/Chargeback_2022"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground font-body text-sm hover:text-navy transition-colors underline"
                  >
                    @Chargeback_2022
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Send className="w-6 h-6 text-navy shrink-0 mt-1" />
                <div>
                  <div className="font-body font-semibold mb-1 text-foreground">MAX</div>
                  <a
                    href="https://max.ru/u/f9LHodD0cOJUE7hx1DQDtMKLWkJV-OtVn834RkVcrxac9K-YV6BfVKzEpj8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground font-body text-sm hover:text-navy transition-colors underline break-all"
                  >
                    Написать в MAX
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-navy shrink-0 mt-1" />
                <div>
                  <div className="font-body font-semibold mb-1 text-foreground">Режим работы</div>
                  <div className="text-muted-foreground font-body text-sm">
                    Пн — Пт: 10:00 — 20:00 (МСК)
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <footer className="py-12 border-t border-border bg-primary">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <div>
              <div className="font-display text-2xl font-bold text-primary-foreground mb-3">
                Chargeback
              </div>
              <p className="text-primary-foreground/60 font-body text-sm leading-relaxed">
                Профессиональный финансовый консалтинг.
                Защита ваших интересов — наш приоритет.
              </p>
            </div>
            <div>
              <div className="font-body font-semibold mb-3 text-primary-foreground">Правовая информация</div>
              <div className="text-primary-foreground/60 font-body text-sm space-y-2">
                <a href="/docs/privacy.html" target="_blank" className="block hover:text-primary-foreground transition-colors">
                  Политика конфиденциальности
                </a>
                <a href="/docs/oferta.html" target="_blank" className="block hover:text-primary-foreground transition-colors">
                  Публичная оферта
                </a>
              </div>
            </div>
          </div>
          <div className="h-px bg-primary-foreground/10 mb-6" />
          <div className="text-center text-primary-foreground/50 font-body text-xs">
            © 2022–2026 Chargeback. Все права защищены.
          </div>
        </div>
      </footer>
    </>
  );
};

export default ContactFooter;
