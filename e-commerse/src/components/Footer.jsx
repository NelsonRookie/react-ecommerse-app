import logo from "../assets/online-shopping.png";

import {
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaGithub,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";

const footerLinks = [
  { id: 1, title: "Home" },
  { id: 2, title: "About" },
  { id: 3, title: "Contact" },
  { id: 4, title: "Blog" },
];

export default function Footer() {
  return (
    <div className="dark:bg-black py-12 bg-light-text">
      <div className="container grid grid-cols-1 mx-auto">
        <div
          data-aos="zoom-in"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-12 text-center md:text-left"
        >
          {/* Company Details */}
          <div className="flex flex-col items-center md:items-start ml-10  ">
            <div className="flex justify-center items-center gap-1">
              <img src={logo} alt="Logo" className="h-12 w-12" />
              <h1 className="sm:text-2xl text-xl font-semibold text-white flex items-center justify-center sm:justify-start gap-3">
                EzzyBuy
              </h1>
            </div>
            <p className="text-sm sm:text-sm antialiased mt-5 dark:text-dark-muted  text-gray-200 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia
              doloremque dolor aut veniam incidunt sit rem possimus, labore
              cumque minima perspiciatis.
            </p>
          </div>

          {/* Footer Links */}
          <div className="flex flex-col items-center mx-auto sm:items-start">
            <h2 className="text-xl font-semibold text-gray-200 mb-4  ">
              Quick Links
            </h2>
            <ul className="flex flex-col gap-3 items-center sm:items-start">
              {footerLinks.map((link) => (
                <li
                  key={link.id}
                  className="cursor-pointer hover:text-light-primary hover:scale-125 duration-300 text-gray-200"
                >
                  <a href={"/"}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials & Contact */}
          <div className="flex flex-col items-center mx-auto sm:items-start">
            <h2 className="text-xl font-semibold text-gray-200 mb-4">
              Follow Me
            </h2>
            <div className="flex items-center gap-6 mb-6 justify-center sm:justify-start">
              <a href="https://instagram.com" className="text-3xl ">
                <FaInstagram className="text-gray-200 hover:text-light-secondary hover:scale-125 duration-200 transition-colors" />
              </a>
              <a href="https://facebook.com" className="text-3xl">
                <FaFacebook className="text-gray-200 hover:text-light-secondary hover:scale-125 duration-200 transition-colors" />
              </a>
              <a href="https://linkedin.com" className="text-3xl">
                <FaLinkedin className="text-gray-200 hover:text-light-secondary hover:scale-125 duration-200 transition-colors" />
              </a>
              <a href="https://github.com" className="text-3xl ">
                <FaGithub className="text-gray-200 hover:text-light-secondary hover:scale-125 duration-200 transition-colors" />
              </a>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 justify-center sm:justify-start">
                <FaLocationArrow className="text-lg text-gray-200" />
                <p className="text-sm text-gray-200">Malabon City, NCR</p>
              </div>
              <div className="flex items-center gap-3 justify-center sm:justify-start">
                <FaMobileAlt className="text-lg text-gray-200" />
                <p className="text-sm text-gray-200">+63 9099730420</p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center text-sm text-gray-400 mt-12">
          <p>© 2024 Shop-on-the-Fly. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
