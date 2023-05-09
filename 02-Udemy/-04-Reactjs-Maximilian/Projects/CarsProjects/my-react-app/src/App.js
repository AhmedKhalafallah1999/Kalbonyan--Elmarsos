import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./UI/Header/header";
import HeroSection from "./UI/HeroSection/HeroSection";
import AboutUs from "./UI/AboutUs/AboutUs";
import Services from "./UI/Services/Services";
import Gallery from "./UI/Gallery/Gallery";
import Testimonials from "./UI/Testimoials/Testimonials";
import Logos from "./UI/Logos/Logos";
import Footer from "./UI/Footer/Footer";
import Cars from "./UI/Cars/Cars";
import ErrorRouter from "./Components/Error/ErrorRouter";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Header />,
      errorElement: <ErrorRouter />,
      children: [
        {
          path: "/",
          element: [
            <HeroSection></HeroSection>,
            <AboutUs />,
            <Services></Services>,
            <Cars />,
            <Gallery></Gallery>,
            <Testimonials></Testimonials>,
            <Logos></Logos>,
            <Footer />,
          ],
        },
        {
          path: "/about",
          element: <AboutUs />,
        },
        {
          path: "/services",
          element: <Services></Services>,
        },
        {
          path: "/cars",
          element: <Cars />,
        },
        {
          path: "/contactus",
          element: <Footer />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
