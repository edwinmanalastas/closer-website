import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Scenario from "@/components/Scenario";
import Safety from "@/components/Safety";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <Scenario />
        <Safety />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
