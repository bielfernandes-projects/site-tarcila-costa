import type { Metadata } from "next";
import { Inter, Lora } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const lora = Lora({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lora",
});

export const metadata: Metadata = {
  title: "Tarcila Costa | Psicóloga CRP 11/22251",
  description:
    "Psicoterapia e Avaliação Neuropsicológica em Fortaleza e On-line. Um espaço seguro para cuidar da sua trajetória emocional.",
  openGraph: {
    title: "Tarcila Costa | Psicóloga",
    description:
      "Psicoterapia (TCC) e Avaliação Neuropsicológica em Fortaleza e On-line.",
    siteName: "Tarcila Costa",
    locale: "pt_BR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${lora.variable}`}
    >
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
