import "./App.css";
import Header from "./UI/Header/header";
import HeroSection from "./UI/HeroSection/HeroSection";
import AboutUs from "./UI/AboutUs/AboutUs";
import Services from "./UI/Services/Services";
import Gallery from "./UI/Gallery/Gallery";
import Testimonials from "./UI/Testimoials/Testimonials";
import Logos from "./UI/Logos/Logos";
function App() {
  return (
    <>
      <Header></Header>
      <HeroSection></HeroSection>
      <AboutUs />
      <Services></Services>
      <Gallery></Gallery>
      <Testimonials></Testimonials>
      <Logos></Logos>
    </>
  );
}

export default App;