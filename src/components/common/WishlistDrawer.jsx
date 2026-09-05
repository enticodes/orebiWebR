import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromWishlist } from "../../features/wishlist/wishlistSlice";
import { addToCart } from "../../features/cart/cartSlice";
import { FaTimes, FaTrash, FaHeart, FaShoppingCart } from "react-icons/fa";
import { useToast } from "./Toast";

const WishlistDrawer = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.wishlist);
  const { addToast } = useToast() || { addToast: () => {} };

  const handleMoveToCart = (item) => {
    dispatch(addToCart(item));
    dispatch(removeFromWishlist(item.id));
    addToast?.(`Moved "${item.title}" to Cart!`, "success");
  };

  return (
    <div
      className={`fixed inset-0 z-[999] overflow-hidden transition-all duration-300 ${
        isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div
          className={`w-screen max-w-md bg-white dark:bg-slate-900 shadow-2xl flex flex-col justify-between border-l dark:border-slate-800 transform transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-5 border-b border-gray-200 dark:border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-rose-50 dark:bg-rose-950/40 text-rose-500 flex items-center justify-center">
                <FaHeart />
              </div>
              <h2 className="text-lg font-bold text-gray-900 dark:text-white">
                Wishlist ({items.length})
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-slate-800 text-gray-500 dark:text-gray-400"
            >
              <FaTimes />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 text-gray-400 dark:text-gray-500">
                <FaHeart className="text-5xl mb-4 text-rose-300 opacity-60" />
                <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">Your wishlist is empty</p>
                <p className="text-sm mt-1">Save items you love by clicking the heart icon on any product.</p>
              </div>
            ) : (
              items.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-4 p-3 rounded-xl border border-gray-100 dark:border-slate-800 bg-gray-50/50 dark:bg-slate-800/40"
                >
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-16 h-16 object-contain bg-white dark:bg-slate-900 rounded-lg p-1 border dark:border-slate-800"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white truncate">
                      {item.title}
                    </h4>
                    <p className="text-sm font-bold text-emerald-600 dark:text-emerald-400 mt-0.5">
                      ${Number(item.price).toFixed(2)}
                    </p>

                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => handleMoveToCart(item)}
                        className="px-3 py-1 bg-black dark:bg-white text-white dark:text-black rounded-lg text-xs font-medium flex items-center gap-1.5 hover:opacity-90 transition-opacity"
                      >
                        <FaShoppingCart className="text-[10px]" /> Add to Cart
                      </button>

                      <button
                        onClick={() => dispatch(removeFromWishlist(item.id))}
                        className="p-1 text-gray-400 hover:text-rose-500 transition-colors"
                        title="Remove"
                      >
                        <FaTrash className="text-xs" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default WishlistDrawer;
