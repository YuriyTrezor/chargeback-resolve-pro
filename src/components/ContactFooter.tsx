import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useState } from "react";

const ContactFooter = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
              <div className="h-px w-8 line-gold" />
              <span className="text-gold text-sm tracking-[0.2em] uppercase font-body">
                Контакты
              </span>
              <div className="h-px w-8 line-gold" />
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
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-5 py-4 rounded-md bg-card border border-gold-subtle text-foreground placeholder:text-muted-foreground font-body focus:outline-none focus:border-gold/50 transition-colors"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <input
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-5 py-4 rounded-md bg-card border border-gold-subtle text-foreground placeholder:text-muted-foreground font-body focus:outline-none focus:border-gold/50 transition-colors"
                />
                <input
                  type="tel"
                  placeholder="Телефон"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-5 py-4 rounded-md bg-card border border-gold-subtle text-foreground placeholder:text-muted-foreground font-body focus:outline-none focus:border-gold/50 transition-colors"
                />
              </div>
              <div>
                <textarea
                  placeholder="Опишите вашу ситуацию"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-5 py-4 rounded-md bg-card border border-gold-subtle text-foreground placeholder:text-muted-foreground font-body focus:outline-none focus:border-gold/50 transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full px-8 py-4 bg-primary text-primary-foreground font-body font-semibold rounded-md hover:opacity-90 transition-opacity"
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
                <Mail className="w-6 h-6 text-gold shrink-0 mt-1" />
                <div>
                  <div className="font-body font-semibold mb-1">Email</div>
                  <div className="text-muted-foreground font-body text-sm">
                    chargeback2022ru@gmail.com
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Send className="w-6 h-6 text-gold shrink-0 mt-1" />
                <div>
                  <div className="font-body font-semibold mb-1">Telegram</div>
                  <div className="text-muted-foreground font-body text-sm">
                    <a
                      href="https://t.me/Chargeback_2022"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-gold transition-colors underline"
                    >
                      @Chargeback_2022
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-gold shrink-0 mt-1" />
                <div>
                  <div className="font-body font-semibold mb-1">Режим работы</div>
                  <div className="text-muted-foreground font-body text-sm">
                    Пн — Пт: 09:00 — 19:00<br />
                    Сб: 10:00 — 16:00
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <footer className="py-12 border-t border-gold-subtle">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            <div>
              <div className="font-display text-2xl font-bold text-gradient-gold mb-3">
                Chargeback
              </div>
              <p className="text-muted-foreground font-body text-sm leading-relaxed">
                Профессиональный финансовый консалтинг.
                Защита ваших интересов — наш приоритет.
              </p>
            </div>
            <div>
              <div className="font-body font-semibold mb-3">Контакты</div>
              <div className="text-muted-foreground font-body text-sm space-y-1">
                <p>chargeback2022ru@gmail.com</p>
                <p>
                  <a
                    href="https://t.me/Chargeback_2022"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gold transition-colors"
                  >
                    Telegram: @Chargeback_2022
                  </a>
                </p>
              </div>
            </div>
            <div>
              <div className="font-body font-semibold mb-3">Правовая информация</div>
              <div className="text-muted-foreground font-body text-sm space-y-2">
                <a href="#" className="block hover:text-gold transition-colors">
                  Политика конфиденциальности
                </a>
                <a href="#" className="block hover:text-gold transition-colors">
                  Пользовательское соглашение
                </a>
              </div>
            </div>
          </div>
          <div className="h-px line-gold opacity-10 mb-6" />
          <div className="text-center text-muted-foreground font-body text-xs">
            © 2022–2026 Chargeback. Все права защищены.
          </div>
        </div>
      </footer>
    </>
  );
};

export default ContactFooter;
