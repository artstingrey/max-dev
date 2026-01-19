import About from "../components/about/About";
import Hero from "../components/hero/Hero";
import ImageSection from "../components/imageSection/ImageSection";
import RunningLine from "../components/runningLine/RunningLine";
import WhatWeDoSection from "../components/whatWeDoSection/WhatWeDoSection";
import TextSection from "../components/textSection/TextSection";
import HowWeWork from "../components/howWeWork/HowWework";
import FixedSection from "../components/fixedSection/FixedSection";
import ProductTeam from "../components/productTeam/ProductTeam";
import TrustPilotSection from "../components/trustPilotSection/TrustPilotSection";



export default function Home() {
  return (
    <main role="main">
      <Hero />
      <RunningLine />
      <About />
      <ImageSection />
      <WhatWeDoSection />
      <TextSection />
      <HowWeWork />
      <FixedSection />
      <ProductTeam />
      <TrustPilotSection />
    </main>
  );
}
