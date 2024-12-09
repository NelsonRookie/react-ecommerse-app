// Images.............
import profile1 from "../assets/profile_assets/profile1.jpg";
import profile2 from "../assets/profile_assets/profile2.jpg";
import profile3 from "../assets/profile_assets/profile3.jpg";
import profile4 from "../assets/profile_assets/profile4.jpg";

const testimonialData = [
  {
    id: 1,
    person: "Elena",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur eaque mollitia numquam animi, labore ratione unde eos a corporis minima!",
    img: profile1,
  },
  {
    id: 2,
    person: "Sophia",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur eaque mollitia numquam animi, labore ratione unde eos a corporis minima!",
    img: profile2,
  },
  {
    id: 3,
    person: "Mason",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur eaque mollitia numquam animi, labore ratione unde eos a corporis minima!",
    img: profile3,
  },
  {
    id: 4,
    person: "Liam",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur eaque mollitia numquam animi, labore ratione unde eos a corporis minima!",
    img: profile4,
  },
];

export default function Testimonials() {
  return (
    <div className="py-10 mb-10">
      <div className="container mx-auto sm:mx-auto">
        {/* Header Section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p className="text-sm font-bold sm:text-xl text-light-primary">
            What our Customers are Saying
          </p>
          <h1 className="text-3xl font-bold text-light-text dark:text-white">
            Testimonials
          </h1>
          <p className="text-xs text-gray-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Consequuntur eaque mollitia numquam animi, labore ratione unde eos a
            corporis minima!
          </p>
        </div>

        {/* Testimonial cards */}
        <div
          data-aos="zoom-in"
          className="grid mx-w-sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 "
        >
          {testimonialData.map((data) => (
            <div
              key={data.id}
              className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gray-800 bg-dark-primary/10 border dark:border-slate-500 relative"
            >
              <div className="mb-4">
                <img
                  src={data.img}
                  alt={data.person}
                  className="rounded-full w-20 h-20 object-cover"
                />
              </div>
              <div className="flex flex-col items-center gap-4">
                <div className="space-y-3">
                  <p className="text-xs dark:text-dark-muted">{data.text}</p>
                  <h1 className="text-xl font-bold text-black/80 dark:text-dark-text">
                    {data.person}
                  </h1>
                </div>
              </div>
              <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                ,,{" "}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
