import { motion } from "framer-motion";
import { FileText, Download } from "lucide-react";

const documents = [
  { name: "Договор оказания услуг", type: "HTML", size: "Открыть", href: "/docs/dogovor.html" },
  { name: "Политика конфиденциальности", type: "HTML", size: "Открыть", href: "/docs/privacy.html" },
  { name: "Согласие на обработку персональных данных", type: "HTML", size: "Открыть", href: "/docs/consent.html" },
  { name: "Публичная оферта", type: "HTML", size: "Открыть", href: "/docs/oferta.html" },
  { name: "Лицензия на осуществление деятельности", type: "HTML", size: "Открыть", href: "/docs/license.html" },
  { name: "Реквизиты компании", type: "HTML", size: "Открыть", href: "/docs/requisites.html" },
];

const DocumentsSection = () => {
  return (
    <section id="documents" className="py-24 bg-secondary relative">
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
              Документы
            </span>
            <div className="h-px w-8 line-navy" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Юридическая документация
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-body text-lg">
            Полная прозрачность — все документы доступны для ознакомления
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {documents.map((doc, i) => (
            <motion.a
              key={doc.name}
              href={doc.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex items-center gap-4 p-5 rounded-lg bg-background border border-border hover:shadow-soft-lg transition-all text-left group"
            >
              <FileText className="w-8 h-8 text-navy shrink-0" />
              <div className="flex-1 min-w-0">
                <div className="font-body text-sm font-medium truncate text-foreground">
                  {doc.name}
                </div>
                <div className="text-muted-foreground text-xs font-body">
                  Документ · {doc.size}
                </div>
              </div>
              <Download className="w-4 h-4 text-muted-foreground group-hover:text-navy transition-colors shrink-0" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DocumentsSection;
