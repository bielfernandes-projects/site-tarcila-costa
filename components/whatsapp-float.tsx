"use client";

import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { whatsappLink } from "@/data/mock";

export default function WhatsAppFloat() {
  return (
    <motion.a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 1.2, ease: [0.25, 1, 0.5, 1] }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-accent text-white rounded-full shadow-xl hover:bg-accent-light transition-colors duration-300"
      aria-label="Fale pelo WhatsApp"
    >
      <Phone size={24} />
    </motion.a>
  );
}
