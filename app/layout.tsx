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
  metadataBase: new URL("https://tarcilacostapsi.com.br"),
  title: "Tarcila Costa | Psicóloga CRP 11/22251",
  description:
    "Psicoterapia e Avaliação Neuropsicológica em Fortaleza e On-line. Um espaço seguro para cuidar da sua trajetória emocional.",
  icons: {
    icon: [
      { url: "/images/favicon.ico", sizes: "any" },
      { url: "/images/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/images/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/images/apple-touch-icon.png" }],
  },
  openGraph: {
    title: "Tarcila Costa | Psicóloga",
    description:
      "Psicoterapia (TCC) e Avaliação Neuropsicológica em Fortaleza e On-line.",
    siteName: "Tarcila Costa",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/images/og-tarcila.png",
        width: 1200,
        height: 630,
        alt: "Tarcila Costa - Psicóloga CRP 11/22251",
      },
    ],
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
