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

export default function Navbar({ handleOrderPopUp }) {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem("isDarkMode") === "true";
  });

  const [isHovered, setIsHovered] = useState(false);

  const handleToggle = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("isDarkMode", newMode);
      return newMode;
    });
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
              onClick={handleOrderPopUp}
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
                  <RxCaretUp size={25} />
                ) : (
                  <RxCaretDown size={25} />
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
    </nav>
  );
}

Navbar.propTypes = {
  handleOrderPopUp: PropTypes.any,
};
