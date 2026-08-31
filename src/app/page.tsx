import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import StatsBar from "./components/StatsBar";
import FeatureGridSection from "./components/FeatureGridSection";
import InteractiveRoomPreview from "./components/InteractiveRoomPreview";
import TestimonialSection from "./components/TestimonialSection";
import CtaBanner from "./components/CtaBanner";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#fafafa] text-[#03071e] font-sans antialiased selection:bg-[#dc2f02] selection:text-white">
      <NavBar />
      <main className="flex-1">
        <HeroSection />
        <StatsBar />
        <FeatureGridSection />
        <InteractiveRoomPreview />
        <TestimonialSection />
        <CtaBanner />
      </main>
      <Footer />
    </div>
  );
}