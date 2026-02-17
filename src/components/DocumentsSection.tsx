import { motion } from "framer-motion";
import { FileText, Download } from "lucide-react";

const documents = [
  { name: "Договор оказания услуг", type: "PDF", size: "245 КБ" },
  { name: "Политика конфиденциальности", type: "PDF", size: "180 КБ" },
  { name: "Согласие на обработку персональных данных", type: "PDF", size: "120 КБ" },
  { name: "Публичная оферта", type: "PDF", size: "310 КБ" },
  { name: "Лицензия на осуществление деятельности", type: "PDF", size: "95 КБ" },
  { name: "Реквизиты компании", type: "PDF", size: "60 КБ" },
];

const DocumentsSection = () => {
  return (
    <section id="documents" className="py-24 bg-secondary/30 relative">
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
              Документы
            </span>
            <div className="h-px w-8 line-gold" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Юридическая документация
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-body text-lg">
            Полная прозрачность — все документы доступны для ознакомления
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {documents.map((doc, i) => (
            <motion.button
              key={doc.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex items-center gap-4 p-5 rounded-lg bg-card border border-gold-subtle hover:border-gold/40 transition-colors text-left group"
            >
              <FileText className="w-8 h-8 text-gold shrink-0" />
              <div className="flex-1 min-w-0">
                <div className="font-body text-sm font-medium truncate">
                  {doc.name}
                </div>
                <div className="text-muted-foreground text-xs font-body">
                  {doc.type} · {doc.size}
                </div>
              </div>
              <Download className="w-4 h-4 text-muted-foreground group-hover:text-gold transition-colors shrink-0" />
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DocumentsSection;
