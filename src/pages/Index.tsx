
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { Steps } from "@/components/Steps";
import { Features } from "@/components/Features";
import { Benefits } from "@/components/Benefits";
import { WhyQuantifier } from "@/components/WhyQuantifier";
import { AgentFlow } from "@/components/AgentFlow";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Stats />
        <Steps />
        <AgentFlow />
        <Features />
        <Benefits />
        <WhyQuantifier />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
