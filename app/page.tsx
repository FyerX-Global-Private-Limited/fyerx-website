import MainHeader from "@/components/layout/main/Header";
import MainFooter from "@/components/layout/main/Footer";
import Hero from "@/components/sections/main/Hero";
import TrustBar from "@/components/sections/main/TrustBar";
import WhoWeAre from "@/components/sections/main/WhoWeAre";
import Capabilities from "@/components/sections/main/Capabilities";
import HowWeWork from "@/components/sections/main/HowWeWork";
import TrackRecord from "@/components/sections/main/TrackRecord";
import Leadership from "@/components/sections/main/Leadership";
import GrowthOutlook from "@/components/sections/main/GrowthOutlook";
import TestimonialsCTA from "@/components/sections/main/TestimonialsCTA";

export default function Home() {
  return (
    <>
      <MainHeader />
      <main className="flex-1">
        <Hero />
        <TrustBar />
        <WhoWeAre />
        <Capabilities />
        <HowWeWork />
        <TrackRecord />
        <Leadership />
        <GrowthOutlook />
        <TestimonialsCTA />
      </main>
      <MainFooter />
    </>
  );
}
