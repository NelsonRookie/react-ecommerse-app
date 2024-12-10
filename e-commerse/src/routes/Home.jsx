import { useEffect, useState } from "react";

// Components
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Products from "../components/Products";
import TopProducts from "../components/TopProducts";
import Banner from "../components/Banner";
import Subscribe from "../components/Subscribe";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

// Animation Library
import AOS from "aos";
import "aos/dist/aos.css";
import PopUpForm from "../components/PopUpForm";

export default function Home() {
  const [orderPopUp, setOrderPopUp] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null); // For the clicked product
  const [cartItems, setCartItems] = useState([]);

  const handleCounter = (product) => {
    setCartItems((prev) => [...prev, product]); // Add product to cart
  };

  const handleOrderPopUp = (product) => {
    setSelectedProduct(product); // Set the product data
    setOrderPopUp(true); // Open the modal
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
    <div className="bg-white dark:bg-dark-background dark:text-dark-text duration-200">
      <Navbar cartItems={cartItems} counter={cartItems.length} />
      <Hero />
      <Products />
      <TopProducts handleOrderPopUp={handleOrderPopUp} /> {/* Pass handler */}
      <Banner />
      <Subscribe />
      <Products />
      <Testimonials />
      {/* Modal for order */}
      <PopUpForm
        orderPopUp={orderPopUp}
        setOrderPopUp={setOrderPopUp}
        product={selectedProduct}
        handleCartItems={handleCounter}
        addToCart={handleCounter} // Pass selected product to modal
      />
      <Footer />
    </div>
  );
}
