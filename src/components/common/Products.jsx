import React from "react";
import Badge from "./Badge";

import { FaHeart, FaShoppingCart, FaExchangeAlt, FaStar } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "/src/features/cart/cartSlice";
import { toggleWishlist } from "/src/features/wishlist/wishlistSlice";
import { addToCompare } from "/src/features/compare/compareSlice";
import { useToast } from "./Toast";
import { Link } from "react-router-dom";

const Products = ({ item, productImg, badgeT, productT, price, category, rating }) => {
  const dispatch = useDispatch();
  const { addToast } = useToast() || { addToast: () => {} };

  const wishlistItems = useSelector((state) => state.wishlist?.items || []);
  const compareItems = useSelector((state) => state.compare?.items || []);

  const productObj = item || {
    id: String(productT || Math.random()).toLowerCase().replace(/\s+/g, '-'),
    title: productT || "Premium Product",
    price: price || 49.99,
    thumbnail: productImg,
    category: category || "General",
    rating: rating || 4.5,
  };

  const isWishlisted = wishlistItems.some((w) => w.id === productObj.id);
  const isCompared = compareItems.some((c) => c.id === productObj.id);

  const handleAddToCart = (e) => {
    e.stopPropagation();
    dispatch(addToCart(productObj));
    addToast?.(`Added "${productObj.title}" to Cart!`, "success");
  };

  const handleToggleWishlist = (e) => {
    e.stopPropagation();
    dispatch(toggleWishlist(productObj));
    if (isWishlisted) {
      addToast?.(`Removed "${productObj.title}" from Wishlist`, "info");
    } else {
      addToast?.(`Added "${productObj.title}" to Wishlist!`, "success");
    }
  };

  const handleAddToCompare = (e) => {
    e.stopPropagation();
    dispatch(addToCompare(productObj));
    addToast?.(`Added "${productObj.title}" to Compare list!`, "info");
  };

  return (
    <div className="group relative bg-white dark:bg-slate-800/90 rounded-2xl overflow-hidden border border-gray-100 dark:border-slate-700/60 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full">
      
      {/* Product Image Container - Clickable Link to Shop */}
      <div className="relative overflow-hidden bg-gray-50 dark:bg-slate-900/50 h-56 sm:h-64 flex items-center justify-center p-4">
        <Link
          to={`/shop?search=${encodeURIComponent(productObj.title)}`}
          className="w-full h-full flex items-center justify-center cursor-pointer"
          title={`Click to view "${productObj.title}" in Shop`}
        >
          {productObj.thumbnail ? (
            <img
              src={productObj.thumbnail}
              alt={productObj.title}
              className="max-h-full max-w-full object-contain transform group-hover:scale-110 transition-transform duration-500 ease-out"
            />
          ) : (
            <div className="text-gray-400 dark:text-gray-600 font-medium text-sm">No Image</div>
          )}
        </Link>

        {/* Badge */}
        {badgeT && (
          <Badge
            badgeText={badgeT}
            className="absolute top-3 left-3 pointer-events-none"
          />
        )}

        {/* Action Overlay Panel on Hover */}
        <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/80 via-black/40 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out flex justify-center items-center gap-3 z-20">
          
          <button
            onClick={handleToggleWishlist}
            title={isWishlisted ? "Remove from Wishlist" : "Add to Wishlist"}
            className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all duration-200 shadow-md ${
              isWishlisted
                ? "bg-rose-500 text-white hover:bg-rose-600 scale-105"
                : "bg-white dark:bg-slate-800 text-gray-700 dark:text-gray-200 hover:bg-rose-500 hover:text-white"
            }`}
          >
            <FaHeart className="text-xs sm:text-sm" />
          </button>

          <button
            onClick={handleAddToCompare}
            title={isCompared ? "In Compare list" : "Compare Product"}
            className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all duration-200 shadow-md ${
              isCompared
                ? "bg-amber-500 text-white hover:bg-amber-600 scale-105"
                : "bg-white dark:bg-slate-800 text-gray-700 dark:text-gray-200 hover:bg-amber-500 hover:text-white"
            }`}
          >
            <FaExchangeAlt className="text-xs sm:text-sm" />
          </button>

          <button
            onClick={handleAddToCart}
            title="Add to Cart"
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black dark:bg-white text-white dark:text-black hover:bg-emerald-600 dark:hover:bg-emerald-500 dark:hover:text-white flex items-center justify-center transition-all duration-200 shadow-md transform hover:scale-105"
          >
            <FaShoppingCart className="text-xs sm:text-sm" />
          </button>
        </div>
      </div>

      {/* Product Details */}
      <div className="p-4 flex flex-col gap-1.5 flex-grow justify-between">
        <div>
          <div className="flex items-center justify-between text-xs text-gray-400 dark:text-gray-400 mb-1">
            <span className="uppercase tracking-wider font-semibold text-[10px] sm:text-xs">
              {productObj.category || "Catalog"}
            </span>
            <div className="flex items-center gap-1 text-amber-400">
              <FaStar className="text-xs" />
              <span className="font-medium text-gray-600 dark:text-gray-300 text-xs">{productObj.rating || 4.5}</span>
            </div>
          </div>

          <Link to={`/shop?search=${encodeURIComponent(productObj.title)}`}>
            <h3 className="font-semibold text-gray-900 dark:text-white text-sm line-clamp-1 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
              {productObj.title}
            </h3>
          </Link>
        </div>

        <div className="flex items-center justify-between mt-2 pt-2 border-t border-gray-100 dark:border-slate-700/50">
          <span className="text-base sm:text-lg font-bold text-gray-900 dark:text-white">
            ${Number(productObj.price).toFixed(2)}
          </span>
          <button
            onClick={handleAddToCart}
            className="text-xs font-semibold text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white flex items-center gap-1 underline underline-offset-4"
          >
            + Add
          </button>
        </div>
      </div>

    </div>
  );
};

export default Products;