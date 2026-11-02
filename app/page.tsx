import HeaderHero from "@/components/HeaderHero";
import About from "@/components/About";
import Treatments from "@/components/Treatments";
import Gallery from "@/components/Gallery";
import WhyUsLocationsContact from "@/components/WhyUsLocationsContact";
import Footer from "@/components/Footer";

// The page body, in the same order as the original index.html.
// Each section lives in components/ with its markup unchanged (only converted to JSX).
export default function Home() {
  return (
    <>
      <div className="sA" />
      <HeaderHero />
      <About />
      <Treatments />
      <Gallery />
      <WhyUsLocationsContact />
      <Footer />
    </>
  );
}
