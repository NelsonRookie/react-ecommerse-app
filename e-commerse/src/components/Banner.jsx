import { GrSecure } from "react-icons/gr";
import { GiFoodTruck } from "react-icons/gi";
import { IoFastFood } from "react-icons/io5";
import { TbReportMoney } from "react-icons/tb";
// Images................
import banner from "../assets/hero_assets/image8.png";

export default function Banner() {
  return (
    <div className="min-h-[750px] bg-gradient-to-r from-orange-500 via-yellow-400 to-white sm:w-full flex justify-center items-center py-12 sm:py-0 relative">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container w-[100%]">
        <div className="flex flex-col items-center justify-center gap-8">
          {/* Image Section */}
          <div className="relative ">
            <img
              src={banner}
              alt="Banner"
              className=" opacity-90 w-full h-[550px] object-cover
               rounded-md "
            />
            {/* Text on top of the image */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center p-6 ">
              <h1 className="text-3xl sm:text-5xl font-bold" data-aos="fade-up">
                Winter Sale upto 50% off
              </h1>
              <p
                className="text-sm sm:text-base tracking-wide leading-6 mt-4"
                data-aos="fade-up"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
                suscipit eius aliquam dolorem magnam magni hic. Ducimus magnam,
                facere a dolore quas ratione nihil laborum adipisci hic
                similique? Eligendi, laborum.
              </p>
            </div>
          </div>

          {/* Icons below the image */}
          <div className="flex gap-8 justify-center w-full overflow-hidden cursor-pointer mt-5">
            <div
              data-aos="fade-up"
              className="flex flex-col items-center gap-4"
            >
              <GrSecure className="text-4xl h-12 w-12 shadow-sm p-3 rounded-full bg-orange-200 dark:bg-light-primary transition-colors hover:bg-light-secondary duration-200 hover:scale-100" />
              <p className="dark:text-white text-xs sm:text-sm sm:font-bold text-white">
                Quality Product
              </p>
            </div>
            <div
              data-aos="fade-up"
              className="flex flex-col items-center gap-4"
            >
              <IoFastFood className="text-4xl h-12 w-12 shadow-sm p-3 rounded-full bg-orange-200 dark:bg-light-primary transition-colors hover:bg-light-secondary duration-200 hover:scale-100" />
              <p className="dark:text-white text-xs sm:text-sm sm:font-bold text-white">
                Fast Delivery
              </p>
            </div>
            <div
              data-aos="fade-up"
              className="flex flex-col items-center gap-4"
            >
              <TbReportMoney className="text-4xl h-12 w-12 shadow-sm p-3 rounded-full bg-orange-200  dark:bg-light-primary transition-colors hover:bg-light-secondary duration-200 hover:scale-100" />
              <p className="dark:text-white text-xs sm:text-sm sm:font-bold text-white  ">
                Easy Payment Method
              </p>
            </div>
            <div
              data-aos="fade-up"
              className="flex flex-col items-center gap-4"
            >
              <GiFoodTruck className="text-4xl h-12 w-12 shadow-sm p-3 rounded-full bg-orange-200 dark:bg-light-primary transition-colors hover:bg-light-secondary duration-200 hover:scale-100" />
              <p className="dark:text-white text-xs sm:text-sm sm:font-bold text-white">
                Get Offers
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
