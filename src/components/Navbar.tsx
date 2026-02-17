import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#services", label: "Услуги" },
  { href: "#documents", label: "Документы" },
  { href: "#contact", label: "Контакты" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-gold-subtle">
      <div className="container flex items-center justify-between h-16">
        <a href="#" className="font-display text-xl font-bold text-gradient-gold">
          Chargeback
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="px-5 py-2 bg-primary text-primary-foreground font-body text-sm font-semibold rounded-md hover:opacity-90 transition-opacity"
          >
            Консультация
          </a>
        </div>

        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background border-b border-gold-subtle pb-4">
          <div className="container flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="px-5 py-2 bg-primary text-primary-foreground font-body text-sm font-semibold rounded-md text-center hover:opacity-90 transition-opacity"
            >
              Консультация
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
