import Header from "@/components/header";
import Hero from "@/components/hero";
import Sobre from "@/components/sobre";
import Servicos from "@/components/servicos";
import ComoFunciona from "@/components/como-funciona";
import FAQ from "@/components/faq";
import Contato from "@/components/contato";
import WhatsAppFloat from "@/components/whatsapp-float";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Sobre />
        <Servicos />
        <ComoFunciona />
        <FAQ />
        <Contato />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
