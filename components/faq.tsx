"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { faqItems } from "@/data/mock";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 md:py-20">
      <div className="max-w-3xl mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-10"
        >
          <span className="text-accent text-sm font-semibold uppercase tracking-wider">
            FAQ
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-brand mt-3 mb-4 leading-tight">
            Perguntas Frequentes
          </h2>
          <p className="text-brand-light leading-relaxed">
            Dúvidas comuns sobre psicoterapia e avaliação neuropsicológica.
          </p>
        </motion.div>

        <div className="space-y-3">
          {faqItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="bg-white rounded-xl border border-sand-dark overflow-hidden"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-brand/5 transition-colors"
                aria-expanded={openIndex === index}
              >
                <span className="text-brand font-medium text-sm md:text-base pr-4">
                  {item.pergunta}
                </span>
                <ChevronDown
                  size={20}
                  className={`text-brand-light flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5">
                      <p className="text-brand-light leading-relaxed text-sm">
                        {item.resposta}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
