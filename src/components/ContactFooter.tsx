import { motion } from "framer-motion";
import { Mail, Clock, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import avatarYuriy from "@/assets/avatar-alexey.png.asset.json";
import avatarAnna from "@/assets/avatar-elena.png.asset.json";
import avatarMaria from "@/assets/avatar-maria.jpg.asset.json";

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
            <div className="p-5 rounded-lg bg-card border border-border shadow-soft">
              <div className="font-body font-semibold text-foreground mb-4">Ваши персональные менеджеры</div>
              <div className="space-y-4">
                <a
                  href="https://t.me/yuriy_romanov_fin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <img
                    src={avatarYuriy.url}
                    alt="Юрий Романов"
                    className="w-14 h-14 rounded-full object-cover border-2 border-navy/10 shrink-0"
                    loading="lazy"
                  />
                  <div className="min-w-0">
                    <div className="font-body font-semibold text-foreground group-hover:text-navy transition-colors">
                      Юрий Романов
                    </div>
                    <div className="text-xs text-muted-foreground font-body">Старший менеджер · Telegram</div>
                    <div className="text-sm text-navy font-body">@yuriy_romanov_fin</div>
                  </div>
                </a>
                <a
                  href="https://max.ru/u/f9LHodD0cOJt7NBEKU_MZoq8swMCoRvGT2ngCRv7Mvg_cV3LjHTY_wGF0Sw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <img
                    src={avatarAnna.url}
                    alt="Анна К."
                    className="w-14 h-14 rounded-full object-cover border-2 border-navy/10 shrink-0"
                    loading="lazy"
                  />
                  <div className="min-w-0">
                    <div className="font-body font-semibold text-foreground group-hover:text-navy transition-colors">
                      Анна К.
                    </div>
                    <div className="text-xs text-muted-foreground font-body">Менеджер по работе с клиентами · MAX</div>
                    <div className="text-sm text-navy font-body">Написать в MAX</div>
                  </div>
                </a>
                <a
                  href="https://t.me/pol008t"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <img
                    src={avatarMaria.url}
                    alt="Полина Тарасова"
                    className="w-14 h-14 rounded-full object-cover border-2 border-navy/10 shrink-0"
                    loading="lazy"
                  />
                  <div className="min-w-0">
                    <div className="font-body font-semibold text-foreground group-hover:text-navy transition-colors">
                      Полина Тарасова
                    </div>
                    <div className="text-xs text-muted-foreground font-body">Менеджер по работе с клиентами · Telegram</div>
                    <div className="text-sm text-navy font-body">@pol008t</div>
                  </div>
                </a>
              </div>
            </div>

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
                    href="https://t.me/yuriy_romanov_fin"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground font-body text-sm hover:text-navy transition-colors underline"
                  >
                    @yuriy_romanov_fin
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Send className="w-6 h-6 text-navy shrink-0 mt-1" />
                <div>
                  <div className="font-body font-semibold mb-1 text-foreground">MAX</div>
                  <a
                    href="https://max.ru/u/f9LHodD0cOJt7NBEKU_MZoq8swMCoRvGT2ngCRv7Mvg_cV3LjHTY_wGF0Sw"
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
