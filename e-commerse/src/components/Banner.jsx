import { GrSecure } from "react-icons/gr";
import { GiFoodTruck } from "react-icons/gi";
import { IoFastFood } from "react-icons/io5";

// Images................
import banner from "../assets/hero_assets/image8.jpg";

export default function Banner() {
  return (
    <div className="  min-h-[750px] flex justify-center items-center py-12 sm:py-0">
      <div className="container ">
        <div className="flex flex-col items-center justify-center gap-8">
          {/* Image Section */}
          <div className="relative w-full max-w-[1200px]">
            <img
              src={banner}
              alt="Banner"
              className="w-full h-[600px] object-cover rounded-md drop-shadow-custom"
            />
            {/* Text on top of the image */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center p-6 bg-black bg-opacity-40">
              <h1 className="text-3xl sm:text-4xl font-bold" data-aos="fade-up">
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
              <p className="dark:text-light-muted text-xs sm:text-sm sm:font-bold text-light-text">
                Quality Product
              </p>
            </div>
            <div
              data-aos="fade-up"
              className="flex flex-col items-center gap-4"
            >
              <IoFastFood className="text-4xl h-12 w-12 shadow-sm p-3 rounded-full bg-orange-200 dark:bg-light-primary transition-colors hover:bg-light-secondary duration-200 hover:scale-100" />
              <p className="dark:text-light-muted text-xs sm:text-sm sm:font-bold text-light-text">
                Fast Delivery
              </p>
            </div>
            <div
              data-aos="fade-up"
              className="flex flex-col items-center gap-4"
            >
              <GiFoodTruck className="text-4xl h-12 w-12 shadow-sm p-3 rounded-full bg-orange-200  dark:bg-light-primary transition-colors hover:bg-light-secondary duration-200 hover:scale-100" />
              <p className="dark:text-light-muted text-xs sm:text-sm sm:font-bold text-light-text  ">
                Easy Payment Method
              </p>
            </div>
            <div
              data-aos="fade-up"
              className="flex flex-col items-center gap-4"
            >
              <GiFoodTruck className="text-4xl h-12 w-12 shadow-sm p-3 rounded-full bg-orange-200 dark:bg-light-primary transition-colors hover:bg-light-secondary duration-200 hover:scale-100" />
              <p className="dark:text-light-muted text-xs sm:text-sm sm:font-bold text-light-text">
                Get Offers
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
