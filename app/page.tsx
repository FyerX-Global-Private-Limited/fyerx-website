import MainHeader from "@/components/layout/main/Header";
import MainFooter from "@/components/layout/main/Footer";
import Hero from "@/components/sections/main/Hero";
import TrustBar from "@/components/sections/main/TrustBar";
import WhoWeAre from "@/components/sections/main/WhoWeAre";
import Capabilities from "@/components/sections/main/Capabilities";
import MainCapabilityAreas from "@/components/sections/main/MainCapabilityAreas";
import HowWeWork from "@/components/sections/main/HowWeWork";
import TrackRecord from "@/components/sections/main/TrackRecord";
import Leadership from "@/components/sections/main/Leadership";
import GrowthOutlook from "@/components/sections/main/GrowthOutlook";
import TestimonialsCTA from "@/components/sections/main/TestimonialsCTA";
import AiHiring from "@/components/sections/main/aihiring";
import SecurityControl from "@/components/sections/main/securitycontrol";
import Trust from "@/components/sections/main/trust";
export default function Home() {
  return (
    <>
      <MainHeader />
      <main className="home-main home-main--home flex-1">
        <Hero />
        <TrustBar />
        <WhoWeAre />
        <HowWeWork />
        <Capabilities />
        <MainCapabilityAreas />
        <TrackRecord />
        <AiHiring />
        <Leadership />
        {/* <Trust /> */}
        <SecurityControl />
        <GrowthOutlook />
        <TestimonialsCTA />
      </main>
      <MainFooter />
    </>
  );
}
