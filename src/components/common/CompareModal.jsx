import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCompare, clearCompare } from "../../features/compare/compareSlice";
import { addToCart } from "../../features/cart/cartSlice";
import { FaTimes, FaExchangeAlt, FaShoppingCart, FaStar } from "react-icons/fa";
import { useToast } from "./Toast";

const CompareModal = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.compare);
  const { addToast } = useToast() || { addToast: () => {} };

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
    addToast?.(`Added "${item.title}" to Cart!`, "success");
  };

  return (
    <div
      className={`fixed inset-0 z-[999] overflow-y-auto bg-black/70 backdrop-blur-md flex items-center justify-center p-4 transition-all duration-300 ${
        isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`bg-white dark:bg-slate-900 rounded-3xl shadow-2xl max-w-5xl w-full max-h-[90vh] flex flex-col border border-gray-100 dark:border-slate-800 overflow-hidden transform transition-all duration-300 ease-out ${
          isOpen ? "scale-100 opacity-100 translate-y-0" : "scale-95 opacity-0 translate-y-4"
        }`}
      >
        {/* Header */}
        <div className="p-6 border-b border-gray-200 dark:border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-amber-500/10 text-amber-500 flex items-center justify-center">
              <FaExchangeAlt />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">Product Comparison</h2>
              <p className="text-xs text-gray-500 dark:text-gray-400">Comparing up to 4 items side-by-side</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            {items.length > 0 && (
              <button
                onClick={() => dispatch(clearCompare())}
                className="text-xs font-semibold text-rose-500 hover:text-rose-600 px-3 py-1.5 rounded-lg border border-rose-200 dark:border-rose-900/40 hover:bg-rose-50 dark:hover:bg-rose-950/30"
              >
                Clear All
              </button>
            )}
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-slate-800 text-gray-500 dark:text-gray-400"
            >
              <FaTimes />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 overflow-x-auto flex-1">
          {items.length === 0 ? (
            <div className="py-16 text-center text-gray-400 dark:text-gray-500">
              <FaExchangeAlt className="text-5xl mx-auto mb-4 opacity-40 text-amber-500" />
              <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">No products to compare</p>
              <p className="text-sm mt-1">Click the compare icon on products to add them to this table.</p>
            </div>
          ) : (
            <div className="min-w-[600px]">
              <div className="grid grid-cols-5 gap-4 border-b border-gray-200 dark:border-slate-800 pb-4 font-semibold text-sm text-gray-500 dark:text-gray-400">
                <div className="col-span-1">Feature</div>
                {items.map((item) => (
                  <div key={item.id} className="relative text-center">
                    <button
                      onClick={() => dispatch(removeFromCompare(item.id))}
                      className="absolute top-0 right-0 p-1 text-gray-400 hover:text-rose-500"
                      title="Remove"
                    >
                      <FaTimes />
                    </button>
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-24 h-24 object-contain mx-auto mb-2 bg-gray-50 dark:bg-slate-800 rounded-xl p-2"
                    />
                    <h4 className="font-bold text-gray-900 dark:text-white text-sm line-clamp-1">{item.title}</h4>
                  </div>
                ))}
              </div>

              {/* Specs Rows */}
              <div className="divide-y divide-gray-100 dark:divide-slate-800 text-sm">
                
                {/* Price */}
                <div className="grid grid-cols-5 gap-4 py-4 items-center">
                  <div className="font-semibold text-gray-700 dark:text-gray-300">Price</div>
                  {items.map((item) => (
                    <div key={item.id} className="text-center font-bold text-emerald-600 dark:text-emerald-400 text-base">
                      ${Number(item.price).toFixed(2)}
                    </div>
                  ))}
                </div>

                {/* Rating */}
                <div className="grid grid-cols-5 gap-4 py-4 items-center">
                  <div className="font-semibold text-gray-700 dark:text-gray-300">Rating</div>
                  {items.map((item) => (
                    <div key={item.id} className="flex items-center justify-center gap-1 text-amber-400 font-semibold">
                      <FaStar /> {item.rating || 4.5}
                    </div>
                  ))}
                </div>

                {/* Category */}
                <div className="grid grid-cols-5 gap-4 py-4 items-center">
                  <div className="font-semibold text-gray-700 dark:text-gray-300">Category</div>
                  {items.map((item) => (
                    <div key={item.id} className="text-center text-gray-600 dark:text-gray-400 uppercase text-xs font-medium">
                      {item.category || "General"}
                    </div>
                  ))}
                </div>

                {/* Availability */}
                <div className="grid grid-cols-5 gap-4 py-4 items-center">
                  <div className="font-semibold text-gray-700 dark:text-gray-300">Availability</div>
                  {items.map((item) => (
                    <div key={item.id} className="text-center text-emerald-500 font-medium text-xs">
                      In Stock
                    </div>
                  ))}
                </div>

                {/* Action */}
                <div className="grid grid-cols-5 gap-4 py-4 items-center">
                  <div className="font-semibold text-gray-700 dark:text-gray-300">Action</div>
                  {items.map((item) => (
                    <div key={item.id} className="text-center">
                      <button
                        onClick={() => handleAddToCart(item)}
                        className="px-4 py-2 bg-black dark:bg-white text-white dark:text-black rounded-xl text-xs font-semibold hover:opacity-90 transition-opacity inline-flex items-center gap-1.5"
                      >
                        <FaShoppingCart /> Add to Cart
                      </button>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default CompareModal;
