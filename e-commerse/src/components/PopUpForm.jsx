import { IoCloseOutline } from "react-icons/io5"; // Ensure this import is correct
import PropTypes from "prop-types";

export default function PopUpForm({ orderPopUp, setOrderPopUp }) {
  return (
    <>
      {orderPopUp && (
        <div className="popup">
          {/* Background overlay */}
          <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm">
            {/* Popup box */}
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-white dark:bg-gray-900 rounded-md duration-200 w-[300px]">
              {/* Header */}
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-lg font-bold">Order Now</h1>
                </div>

                <IoCloseOutline
                  className="text-2xl cursor-pointer"
                  onClick={() => setOrderPopUp(false)}
                />
              </div>
              {/* Form Section */}
              <div className="mt-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 py-2 px-3 mb-4"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 py-2 px-3 mb mb-4"
                />
                <input
                  type="text"
                  placeholder="Address"
                  className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 py-2 px-3 mb mb-4"
                />
              </div>
              <div className="flex justify-center">
                <button className="bg-gradient-to-r from-light-primary to-light-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full">
                  {" "}
                  Order Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

PopUpForm.propTypes = {
  orderPopUp: PropTypes.any,
  setOrderPopUp: PropTypes.any,
};
