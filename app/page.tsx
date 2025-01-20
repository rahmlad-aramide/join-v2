import Community from "@/components/communty";
import Ecosystem from "@/components/ecosystem";
import Events from "@/components/events";
import FAQSSection from "@/components/faqs-section";
import Hero from "@/components/hero";
import JoinUs from "@/components/join-us";
import Possibilities from "@/components/possibilities";
import PresaleSection from "@/components/presale-section";

export default function Home() {
  return (
    <main className="font-[family-name:var(--font-tsb)] bg-mainBgMobile md:mainBg bg-cover">
        <Hero />
        <Possibilities />
        <Events />
        <Ecosystem />
        <PresaleSection />
        <Community />
        <FAQSSection />
        <JoinUs />
      </main>
  );
}
