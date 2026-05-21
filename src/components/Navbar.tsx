import { useState } from "react";
import { Menu, X } from "lucide-react";

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
          <a
            href="https://t.me/Chargeback_2022"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 bg-cta text-cta-foreground font-body text-sm font-semibold rounded-md hover:opacity-90 transition-opacity"
          >
            Консультация
          </a>
          <a
            href="https://max.ru/u/f9LHodD0cOJUE7hx1DQDtMKLWkJV-OtVn834RkVcrxac9K-YV6BfVKzEpj8"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 bg-cta text-cta-foreground font-body text-sm font-semibold rounded-md hover:opacity-90 transition-opacity"
          >
            MAX
          </a>
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
            <a
              href="https://t.me/Chargeback_2022"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="px-5 py-2 bg-cta text-cta-foreground font-body text-sm font-semibold rounded-md text-center hover:opacity-90 transition-opacity"
            >
              Консультация
            </a>
            <a
              href="https://max.ru/u/f9LHodD0cOJUE7hx1DQDtMKLWkJV-OtVn834RkVcrxac9K-YV6BfVKzEpj8"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="px-5 py-2 bg-cta text-cta-foreground font-body text-sm font-semibold rounded-md text-center hover:opacity-90 transition-opacity"
            >
              MAX
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
