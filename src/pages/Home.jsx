import HowItWorks from "../components/HowItWorks";
import ImageSlider from "../components/ImageSlider";
import SpecialSection from "../components/SpecialSection";
import SubscriptionSection from "../components/SubscriptionSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="p-4">
      <ImageSlider />
      <SubscriptionSection />
      <HowItWorks />
      <SpecialSection />
      <Footer />
    </div> 
  );
}
