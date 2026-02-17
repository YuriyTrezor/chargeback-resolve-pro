import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useState } from "react";

const ContactFooter = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // placeholder
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
              Свяжитесь с нами
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto font-body text-lg">
              Получите бесплатную консультацию от наших экспертов
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
                <MapPin className="w-6 h-6 text-gold shrink-0 mt-1" />
                <div>
                  <div className="font-body font-semibold mb-1">Адрес</div>
                  <div className="text-muted-foreground font-body text-sm">
                    г. Москва, ул. Тверская, д. 22, стр. 1<br />
                    Бизнес-центр «Континенталь», офис 405
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-gold shrink-0 mt-1" />
                <div>
                  <div className="font-body font-semibold mb-1">Телефон</div>
                  <div className="text-muted-foreground font-body text-sm">
                    +7 (495) 123-45-67<br />
                    +7 (800) 200-30-40 (бесплатно по РФ)
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-gold shrink-0 mt-1" />
                <div>
                  <div className="font-body font-semibold mb-1">Email</div>
                  <div className="text-muted-foreground font-body text-sm">
                    info@chargeback.ru
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
                Профессиональный финансовый и юридический консалтинг.
                Защита ваших интересов — наш приоритет.
              </p>
            </div>
            <div>
              <div className="font-body font-semibold mb-3">Реквизиты</div>
              <div className="text-muted-foreground font-body text-sm space-y-1">
                <p>ООО «Чарджбэк Консалтинг»</p>
                <p>ИНН: 7710123456</p>
                <p>ОГРН: 1157746012345</p>
                <p>КПП: 771001001</p>
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
                <a href="#" className="block hover:text-gold transition-colors">
                  Публичная оферта
                </a>
              </div>
            </div>
          </div>
          <div className="h-px line-gold opacity-10 mb-6" />
          <div className="text-center text-muted-foreground font-body text-xs">
            © 2024 Chargeback. Все права защищены. Информация на сайте не является публичной офертой.
          </div>
        </div>
      </footer>
    </>
  );
};

export default ContactFooter;
