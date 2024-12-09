import { IoCloseOutline } from "react-icons/io5";
import { BsCartPlusFill } from "react-icons/bs";
import PropTypes from "prop-types";

export default function PopUpForm({ orderPopUp, setOrderPopUp, product }) {
  if (!product) return null; // Prevent rendering if no product is selected

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
              {/* Product Details */}
              <div className="mt-4 text-center">
                <img
                  src={product.img}
                  alt={product.title}
                  className="w-[150px] mx-auto mb-4"
                />
                <h2 className="text-lg font-bold">{product.title}</h2>
                <p className="text-gray-500">{product.description}</p>
                <p className="text-lg font-bold mt-2">{product.price}</p>
              </div>
              {/* Add to Cart Button */}
              <div className="flex w-full mt-5 gap-1">
                <button
                  onClick={() => alert("Feature is not yet available")}
                  className="w-full gap-2 flex items-center rounded-md justify-center bg-gradient-to-r from-light-primary to-light-secondary hover:opacity-80 duration-200 text-slate-50 py-3 px-4"
                >
                  <BsCartPlusFill size={20} />
                  <span className="text-sm font-bold text-slate-50">
                    Add to Cart
                  </span>
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
  orderPopUp: PropTypes.bool.isRequired,
  setOrderPopUp: PropTypes.func.isRequired,
  product: PropTypes.object, // Accept the selected product
};
