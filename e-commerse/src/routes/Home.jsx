import { useEffect, useState } from "react";

//components............................
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Products from "../components/Products";
import TopProducts from "../components/TopProducts";
import Banner from "../components/Banner";
import Subscribe from "../components/Subscribe";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

//animation library
import AOS from "aos";
import "aos/dist/aos.css";
import PopUpForm from "../components/PopUpForm";

export default function Home() {
  const [orderPopUp, setOrderPopUp] = useState(false);

  const handleOrderPopUp = () => {
    setOrderPopUp(!orderPopUp);
  };
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-out-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="bg-white dark:bg-dark-background dark:text-dark-text duration-200 ">
      <Navbar handleOrderPopUp={handleOrderPopUp} />
      <Hero handleOrderPopUp={handleOrderPopUp} />
      <Products />
      <TopProducts handleOrderPopUp={handleOrderPopUp} />
      <Banner />
      <Subscribe />
      <Products />
      <Testimonials />
      <PopUpForm orderPopUp={orderPopUp} setOrderPopUp={setOrderPopUp} />
      <Footer />
    </div>
  );
}
