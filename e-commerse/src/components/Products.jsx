import { FaStar } from "react-icons/fa";

// Images.....................
import Image1 from "../assets/hero_assets/image1.png";
import Image2 from "../assets/hero_assets/image2.png";
import Image3 from "../assets/hero_assets/image3.png";
import Image4 from "../assets/hero_assets/image4.png";
import Image5 from "../assets/hero_assets/image5.png";
import Image6 from "../assets/hero_assets/image6.png";

export default function Products() {
  const ProductsData = [
    {
      id: 1,
      img: Image1,
      title: "Sorted Apparel",
      rating: 4.3,
      color: "brown",
      aosDelay: "0",
    },
    {
      id: 2,
      img: Image2,
      title: "Fashion Clothes",
      rating: 4.4,
      color: "white",
      aosDelay: "200",
    },
    {
      id: 3,
      img: Image3,
      title: "Electronics",
      rating: 5.0,
      color: "red",
      aosDelay: "300",
    },
    {
      id: 4,
      img: Image4,
      title: "Shades",
      rating: 4.7,
      color: "green",
      aosDelay: "400",
    },
    {
      id: 5,
      img: Image5,
      title: "Smart Phone",
      rating: 4.6,
      color: "yellow",
      aosDelay: "500",
    },
    {
      id: 6,
      img: Image6,
      title: "Mens Wear",
      rating: 4.8,
      color: "pink",
      aosDelay: "600",
    },
  ];

  return (
    <div className="mt-14 mb-20 ">
      <div className="container flex items-center flex-col mx-auto sm:mx-auto">
        {/* Header section */}
        <div className="text-center mb-10 max-w-[600px]">
          <p className="text-xl text-light-primary font-bold">
            Top Selling Products for you
          </p>
          <h1 className="text-3xl font-bold">Products</h1>
          <p className="text-xs text-gray-500 ">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Consequuntur eaque mollitia numquam animi, labore ratione unde eos a
            corporis minima! Dolor velit non dolorem optio facere autem officia
            suscipit adipisci?
          </p>
        </div>
        {/* Body section */}
        <div>
          <div className="grid grid-cols-2 gap-12  md:grid-cols-4  xl:grid-cols-6 place-items-center ">
            {/* Card section */}
            {ProductsData.map((data) => (
              <div
                key={data.id}
                className="space-y-3"
                data-aos-delay={data.aosDelay}
                data-aos="fade-up"
              >
                <img
                  data-aos-delay={data.aosDelay}
                  data-aos="fade-up"
                  src={data.img}
                  alt={data.id}
                  className="h-[100px] w-[150px] sm:min-w-[200px] sm:min-h-[200px] object-cover rounded-md bg-slate-500 cursor-pointer"
                />
                <div
                  data-aos-delay={data.aosDelay}
                  data-aos="fade-up"
                  className="tracking-wide"
                >
                  <div>
                    <h3 className="font-semibold mb-2">{data.title}</h3>
                  </div>
                  <p className="text-sm text-light-muted font-semibold">
                    {data.color}
                  </p>
                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-400 text-xs" />
                    <span className="text-xs">{data.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/*  view all button*/}
          <div className="sm:mt-10 flex justify-center">
            <button className="text-center mt-10 cursor-pointer bg-light-primary text-white py-1 px-5 rounded-md hover:opacity-70">
              View All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
