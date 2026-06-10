"use client";

import { Phone } from "lucide-react";
import { whatsappLink } from "@/data/mock";

export default function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-full shadow-xl hover:bg-green-600 transition-all duration-300 animate-pulse hover:animate-none hover:scale-110"
      aria-label="Fale pelo WhatsApp"
    >
      <Phone size={24} />
    </a>
  );
}
