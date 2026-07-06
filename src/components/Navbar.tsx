import { useState } from "react";
import { Menu, X, Send } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import avatarYuriy from "@/assets/avatars/yuriy.png";
import avatarAnna from "@/assets/avatars/anna.png";
import avatarMaria from "@/assets/avatars/polina.jpg";

const managers = [
  {
    name: "Анна Крылова",
    role: "Ведущий специалист по chargeback",
    avatar: avatarAnna,
    max: "https://max.ru/u/f9LHodD0cOJt7NBEKU_MZoq8swMCoRvGT2ngCRv7Mvg_cV3LjHTY_wGF0Sw",
    tg: "https://t.me/Annak005",
  },
  {
    name: "Юрий Романов",
    role: "Финансовый аналитик",
    avatar: avatarYuriy,
    max: "https://max.ru/u/f9LHodD0cOLFl01v9AIPPRfD4wMJOjlXb8HnBN2J8R93tlN58_xtK7s_wfQ",
    tg: "https://t.me/yuriy_romanov_fin",
  },
  {
    name: "Полина Тарасова",
    role: "Специалист по работе с банками",
    avatar: avatarMaria,
    max: "https://max.ru/u/f9LHodD0cOKTuyJ3w74xKB69rCiPNZgZG-hyzh4vhmhT1E2ByR507gqcIzA",
    tg: "https://t.me/pol008t",
  },
];

const ConsultationPopover = ({ onSelect }: { onSelect?: () => void }) => (
  <Popover>
    <PopoverTrigger asChild>
      <button
        type="button"
        className="px-5 py-2 bg-cta text-cta-foreground font-body text-sm font-semibold rounded-md hover:opacity-90 transition-opacity"
      >
        Консультация
      </button>
    </PopoverTrigger>
    <PopoverContent align="end" className="w-80 p-0 overflow-hidden">
      <div className="px-4 py-3 border-b border-border bg-secondary">
        <div className="font-display font-bold text-foreground text-sm">Выберите специалиста</div>
        <div className="text-xs text-muted-foreground font-body mt-0.5">Ответим в течение нескольких минут</div>
      </div>
      <div className="divide-y divide-border">
        {managers.map((m) => (
          <div key={m.name} className="p-3">
            <div className="flex items-center gap-3 mb-2">
              <img src={m.avatar} alt={m.name} className="w-10 h-10 rounded-full object-cover" loading="lazy" />
              <div className="min-w-0">
                <div className="font-body font-semibold text-sm text-foreground truncate">{m.name}</div>
                <div className="text-[11px] text-muted-foreground truncate">{m.role}</div>
              </div>
            </div>
            <div className="flex gap-2">
              <a
                href={m.max}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onSelect}
                className="flex-1 inline-flex items-center justify-center gap-1.5 px-2 py-1.5 rounded bg-navy text-white text-xs font-semibold hover:bg-navy/90 transition-colors"
              >
                <span className="flex items-center justify-center w-4 h-4 rounded bg-white text-navy text-[10px] font-black leading-none">M</span>
                MAX
              </a>
              <a
                href={m.tg}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onSelect}
                className="flex-1 inline-flex items-center justify-center gap-1.5 px-2 py-1.5 rounded border border-navy/20 text-navy text-xs font-semibold hover:bg-navy/5 transition-colors"
              >
                <Send className="w-3.5 h-3.5" />
                Telegram
              </a>
            </div>
          </div>
        ))}
      </div>
    </PopoverContent>
  </Popover>
);

const links = [
  { href: "#about", label: "О нас" },
  { href: "#services", label: "Услуги" },
  { href: "#faq", label: "FAQ" },
  { href: "#reviews", label: "Отзывы" },
  { href: "#contact", label: "Контакты" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border shadow-soft">
      <div className="container flex items-center justify-between h-16">
        <a href="#" className="font-display text-xl font-bold text-navy">
          Chargeback
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-body text-sm text-muted-foreground hover:text-navy transition-colors"
            >
              {l.label}
            </a>
          ))}
          <ConsultationPopover />
        </div>

        <button
          className="md:hidden text-navy"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background border-b border-border pb-4">
          <div className="container flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-body text-sm text-muted-foreground hover:text-navy transition-colors"
              >
                {l.label}
              </a>
            ))}
            <ConsultationPopover onSelect={() => setOpen(false)} />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
