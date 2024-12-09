import Slider from "react-slick";
import PropTypes from "prop-types";

// Images...........................................
import Image1 from "../assets/hero_assets/image6.png";
import Image2 from "../assets/hero_assets/image2.png";
import Image3 from "../assets/hero_assets/image4.png";

const ImageList = [
  {
    id: 1,
    image: Image1,
    title: "50% off on All Products",
    description:
      "Lorem ipsum, Electronics products are 50%. Nulla quas aliquam perferendis qui impedit voluptatem voluptas.",
  },
  {
    id: 2,
    image: Image2,
    title: "70% off on All Men Products",
    description:
      "Lorem ipsum, Get your chances to buy your favorite items with discounted prices. Nulla quas aliquam perferendis qui impedit voluptatem voluptas.",
  },
  {
    id: 3,
    image: Image3,
    title: "30% off on All Women Products",
    description:
      "Lorem ipsum, It's holiday season, what are you waiting for? Grab your favorite items now. Nulla quas aliquam perferendis qui impedit voluptatem voluptas.",
  },
];

export default function Hero({ handleOrderPopUp }) {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="overflow-hidden bg-slate-200 min-h-[550px] sm:min-h-[650px] dark:bg-dark-background dark:text-white flex justify-center items-center duration-200">
      {/* Background pattern */}

      {/* Hero section */}
      <div className="container sm:py-3 mx-w-sm:p-3 md:pb-12 rounded-lg mx-auto">
        <Slider {...settings}>
          {ImageList.map((data) => (
            <div key={data.id}>
              <div className="grid grid-cols-1 mx-w-sm:grid-cols-2 sm:items-center sm:justify-center items-center gap-5 md:grid-cols-2">
                {/* Text section */}
                <div className="flex flex-col justify-center gap-4 text-center sm:text-left px-4 sm:px-8 order-2 sm:order-1">
                  <h1
                    data-aos="zoom-out"
                    data-aos-duration="500"
                    data-aos-once="true"
                    data-aos-delay="100"
                    className="text-4xl sm:text-5xl lg:text-6xl font-bold"
                  >
                    {data.title}
                  </h1>
                  <p
                    className="text-sm sm:text-base"
                    data-aos="fade-up"
                    data-aos-duration="600"
                    data-aos-delay="200"
                  >
                    {data.description}
                  </p>
                  <button
                    onClick={handleOrderPopUp}
                    data-aos="fade-up"
                    data-aos-duration="700"
                    data-aos-delay="300"
                    className="mt-6 sm:w-[20%] md:w-[30%] bg-gradient-to-r from-light-primary to-light-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full "
                  >
                    Order Now
                  </button>
                </div>

                {/* Image section */}
                <div
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-delay="400"
                  className="order-1 sm:order-2 flex justify-center"
                >
                  <img
                    data-aos="zoom-in"
                    data-aos-duration="500"
                    data-aos-delay="500"
                    src={data.image}
                    alt={data.title}
                    className="h-[300px] w-[300px] sm:h-[500px] sm:w-[500px] object-contain"
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

Hero.propTypes = {
  handleOrderPopUp: PropTypes.any,
};
