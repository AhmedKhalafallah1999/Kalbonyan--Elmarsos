import "./App.css";
// import Header from "./UI/Header/header";
import HeroSection from "./UI/HeroSection/HeroSection";
import AboutUs from "./UI/AboutUs/AboutUs";
import Services from "./UI/Services/Services";
import Gallery from "./UI/Gallery/Gallery";
import Testimonials from "./UI/Testimoials/Testimonials";
import Logos from "./UI/Logos/Logos";
import Footer from "./UI/Footer/Footer";
import Cars from "./UI/Cars/Cars";
function App() {
  return (
    <>
      {/* <Header></Header> */}
      <HeroSection></HeroSection>
      <AboutUs />
      <Services></Services>
      <Cars/>
      <Gallery></Gallery>
      <Testimonials></Testimonials>
      <Logos></Logos>
      <Footer />
    </>
  );
}

export default App;
