export default function Subscribe() {
  return (
    <div
      data-aos="zoom-in"
      className="sm:mt-20 sm:p-12 dark:bg-light-secondary flex items-center justify-center mb-20 bg-gradient-to-r from-orange-500 via-yellow-400 to-white text-white relative overflow-hidden"
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Main Content Container */}
      <div className="container relative z-10 py-10 px-6 md:px-16">
        <div className="space-y-6 max-w-xl mx-auto text-center sm:text-left">
          <h1 className="text-2xl sm:text-4xl font-semibold leading-tight">
            Get Notified About New Products
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 mb-6">
            Subscribe to receive the latest product updates and exclusive
            offers.
          </p>

          {/* Email Input Field */}
          <div className="relative">
            <input
              data-aos="fade-up"
              type="email"
              className="w-full p-4 rounded-full bg-white text-gray-900 placeholder-gray-500 outline-none focus:ring-2 focus:ring-indigo-400 dark:bg-slate-950 dark:text-white dark:placeholder-gray-400"
              placeholder="Enter your email"
            />
            {/* Submit Button */}
            <button
              className="absolute right-3 top-1/2 transform -translate-y-1/2 px-6 py-2 bg-indigo-600 text-white rounded-full shadow-md hover:bg-indigo-700 focus:outline-none"
              onClick={() => alert("Subscribed!")}
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
