import { useState, useEffect } from "react";
import { menu } from "../Menu";
import { dropDownList } from "../DropDownList";
import PropTypes from "prop-types";

// Images
import logo from "../assets/online-shopping.png";
import lightModeButton from "../assets/lightMode.png";
import darkModeButton from "../assets/toggle.png";

// Icons
import { MdOutlineSearch } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import { RxCaretDown } from "react-icons/rx";
import { RxCaretUp } from "react-icons/rx";
import { FiMinus } from "react-icons/fi";
import { MdOutlineAdd } from "react-icons/md";
import { IoCloseOutline } from "react-icons/io5";

export default function Navbar({ cartItems, counter }) {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem("isDarkMode") === "true";
  });

  const [isHovered, setIsHovered] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [quantity, setQuantity] = useState(0);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  const handleToggle = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("isDarkMode", newMode);
      return newMode;
    });
  };

  const handleAddQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleDecreaseQuantity = () => {
    setQuantity(quantity - 1);
  };

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <nav className=" bg-light-background text-light-text dark:bg-dark-background dark:text-dark-text">
      {/* Top Navigation */}
      <div className="bg-light-secondary flex px-10 py-5 items-center">
        {/* Logo */}
        <section className="left-side-nav flex items-center mr-auto gap-2">
          <img src={logo} alt="Logo" width={40} />
          <p className="hidden sm:block text-2xl tracking-tight  font-bold ">
            EzzyBuy
          </p>
        </section>

        {/* Search */}
        <section className="flex items-center gap-4">
          <div className="hidden sm:flex relative items-center group">
            <input
              type="text"
              placeholder="Search...."
              className={`w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-3 py-2 focus:outline-none focus:border-slate-500 ${
                isDarkMode
                  ? "dark:bg:white dark:text-slate-950"
                  : "bg-white text-gray-800"
              }`}
            />
            <MdOutlineSearch
              size={20}
              className={`absolute top-1/2 -translate-y-1/2 right-3 ${
                isDarkMode ? "text-dark-text" : "text-light-text"
              }`}
            />
          </div>

          {/* Ordering */}
          <div className="relative flex items-center group">
            <button
              // onClick={handleCartPopUp}
              onClick={toggleDrawer}
              className={`flex items-center px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                isDarkMode
                  ? "dark:bg-orange-300 text-slate-950"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              } group-hover:w-[120px] w-[50px] overflow-hidden`}
            >
              <span className="ml-2 opacity-0 group-hover:opacity-100 tracking-wide transition-opacity duration-300">
                Order
              </span>
              <IoCartOutline
                size={24}
                className={`absolute text-xl drop-shadow-sm cursor-pointer transition-transform duration-300 ${
                  isDarkMode ? " text-slate-950" : "text-gray-700"
                } group-hover:translate-x-14 translate-x-0`}
              />
            </button>
          </div>
          {counter > 0 && (
            <span className="absolute  top-3 right-24  w-5 h-5 flex items-center justify-center bg-red-500 rounded-full text-white font-semibold text-xs ">
              {counter}
            </span>
          )}

          {/* Theme Toggle Button */}
          <button
            onClick={handleToggle}
            className="relative w-10 h-10 flex items-center justify-center transition-all duration-1000 delay-1000"
          >
            {isDarkMode ? (
              <img
                src={darkModeButton}
                alt="Dark Mode"
                className="absolute inset-0 w-[50px]object-fit text-green-600"
              />
            ) : (
              <img
                src={lightModeButton}
                alt="Light Mode"
                className="absolute inset-0 w-full h-full object-cover"
              />
            )}
          </button>
        </section>
      </div>
      <section className="dark:bg-slate-100 dark:text-slate-950">
        {/* Lower navigation */}
        <div data-aos="zoom-in">
          <ul className="hidden max-w-sm:hidden md:flex item-center justify-center gap-20 p-5 font-semibold ">
            {menu.map((nav) => (
              <li
                key={nav.id}
                className=" hover:text-light-primary transition-colors duration-200 "
              >
                {nav.route}
              </li>
            ))}
            {/* Dropdown List  */}
            <div className="relative group">
              {/* Main link with caret */}
              <div
                onMouseEnter={() => setIsHovered(true)}
                className="relative flex gap-2 items-center cursor-pointer transition-all duration-300 "
              >
                <p className="hover:text-light-primary transition-colors duration-200">
                  Trending Products
                </p>
                {isHovered ? (
                  <RxCaretDown size={25} />
                ) : (
                  <RxCaretUp size={25} />
                )}
              </div>
              {/* Dropdown List */}
              <div className="text-sm absolute w-[200px] rounded-md dark:bg-slate-900 p-2 bg-gray-100 text-black shadow-md mt-2 opacity-0 group-hover:opacity-100 transition-all duration-400 ">
                <ul className="space-y-1">
                  {dropDownList.map((item) => (
                    <li
                      onMouseDown={() => setIsHovered(true)}
                      key={item.id}
                      className="p-2 hover:bg-gray-200 rounded-md cursor-pointer "
                    >
                      {item.route}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </ul>
        </div>
      </section>
      {/* Drawer */}
      <div
        className={`fixed z-10 top-0 right-0 h-full w-[350px] bg-gray-100 shadow-lg dark:bg-dark-background transform transition-transform duration-300 ${
          isDrawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 bg-gray-200 dark:bg-gray-800">
          <h2 className="font-bold text-lg">Your Orders</h2>
          <button
            onClick={toggleDrawer}
            className="text-gray-600 dark:text-gray-300 hover:text-slate-950"
          >
            <IoCloseOutline size={25} />
          </button>
        </div>
        <div className="">
          {cartItems.map((product) => (
            <div key={product.id} className="container border-b ">
              <div className="grid grid-cols-3 items-center p-5 ">
                <input type="checkbox" />
                <img src={product.img} alt="Product" className="w-40 h-40" />
                <div className="flex flex-col w-full">
                  <p className="font-bold">{product.title}</p>
                  <strong className="text-red-600 text-xs font-bold ">
                    {product.price}
                  </strong>
                </div>
              </div>
              <div className="quantity flex gap-2 items-center justify-end">
                <div className="border border-slate-400 rounded-md flex gap-3 p-1 ">
                  <button
                    onClick={handleDecreaseQuantity}
                    className="border-r border-slate-400 p-1"
                  >
                    <strong className="textl">
                      <FiMinus size={15} />
                    </strong>
                  </button>
                  <span className="font-bold">{quantity}</span>
                  <button
                    onClick={handleAddQuantity}
                    className="border-l border-slate-400 p-1"
                  >
                    <span>
                      <MdOutlineAdd size={15} />
                    </span>
                  </button>
                </div>
              </div>
              <div className="buttons flex items-center justify-end gap-2 mt-2 mb-2">
                <button className="p-2  bg-sky-500 font-bold text-sm hover:opacity-80 text-slate-50">
                  Buy Now
                </button>
                <button className="p-2  bg-red-500 font-bold text-sm hover:opacity-80 text-slate-50">
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  handleOrderPopUp: PropTypes.any,
  counter: PropTypes.any,
  cartItems: PropTypes.any,
};
