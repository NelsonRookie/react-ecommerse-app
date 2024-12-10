import { FaStar } from "react-icons/fa";
import PropTypes from "prop-types";

import { ProductsData } from "../topProducts";

export default function TopProducts({ handleOrderPopUp }) {
  return (
    <div className="dark:bg-dark-background dark:text-dark-text sm:p-10 sm:mb-20">
      <div className="flex flex-col items-center sm:mx-auto">
        {/* Header section */}
        <div className="max-w-sm:ml-20 md:ml-48 self-start mb-32">
          <p
            data-aos="fade-up"
            className="dark:text-light-primary text-light-primary text-sm sm:text-xl font-bold"
          >
            Top Rated Products for you
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Best Products
          </h1>
          <p
            data-aos="fade-up"
            data-aos-duration="200"
            className="text-xs text-gray-400"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            saepe ex quisquam repellendus voluptates aut molestias.
          </p>
        </div>

        {/* Body section */}
        <div className="grid mx-w-sm:grid-cols-1 md:grid-cols-3 gap-52 items-center justify-around">
          {ProductsData.map((data) => (
            <div
              data-aos="zoom-in"
              key={data.id}
              className="rounded-2xl bg-slate-100 hover:bg-slate-800 dark:bg-gray-200 hover:dark:bg-slate-950 hover:text-white relative shadow-xl duration-300 group max-w-[300px] sm:w-[400px]"
            >
              {/* Image section */}
              <div className="h-[200px] flex items-center justify-center mx-auto">
                <img
                  src={data.img}
                  alt={data.title}
                  className="max-w-[140px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-xl"
                />
              </div>
              {/* Details section */}
              <div className="p-4 text-center">
                {/* Star rating */}
                <div className="w-full flex items-center justify-center gap-1">
                  {Array.from({ length: Math.floor(data.rating) }, (_, i) => (
                    <FaStar key={i} className="text-yellow-500" />
                  ))}
                </div>
                <h1 className="text-md sm:text-xl text-light-primary font-bold">
                  {data.title}
                </h1>
                <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">
                  {data.description}
                </p>

                <button
                  onClick={() => handleOrderPopUp(data)} // Pass product data to the handler
                  className="mt-5 bg-light-primary hover:scale-105 duration-200 text-white text-base py-2 px-7 rounded-full"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

TopProducts.propTypes = {
  handleOrderPopUp: PropTypes.func.isRequired, // Updated PropType
};
