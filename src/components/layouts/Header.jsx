import React, { useState, useRef, useEffect } from "react";
import Container from "../common/Container";
import Image from "../common/Image";
import logo from "/src/assets/Logo.png";
import { IoReorderTwo } from "react-icons/io5";
import {
  FaSearch,
  FaUser,
  FaCaretDown,
  FaShoppingCart,
  FaHeart,
  FaExchangeAlt,
  FaSun,
  FaMoon,
  FaTimes,
  FaBars,
} from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { toggleTheme } from "../../features/theme/themeSlice";
import CartDrawer from "../common/CartDrawer";
import WishlistDrawer from "../common/WishlistDrawer";
import CompareModal from "../common/CompareModal";
import UserModal from "../common/UserModal";
import axios from "axios";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const dropRef = useRef(null);

  const mode = useSelector((state) => state.theme?.mode || "light");
  const cartItems = useSelector((state) => state.cart?.items || []);
  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const wishlistCount = useSelector((state) => state.wishlist?.items?.length || 0);
  const compareCount = useSelector((state) => state.compare?.items?.length || 0);
  const user = useSelector((state) => state.user?.user);

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isCompareOpen, setIsCompareOpen] = useState(false);
  const [isUserOpen, setIsUserOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);

  // Search state
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  const handleDrop = () => {
    setIsCategoryOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropRef.current && !dropRef.current.contains(e.target)) {
        setIsCategoryOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Live Search handler
  useEffect(() => {
    if (!searchQuery.trim()) {
      setSearchResults([]);
      setIsSearching(false);
      return;
    }
    const timer = setTimeout(async () => {
      try {
        setIsSearching(true);
        const res = await axios.get(`https://dummyjson.com/products/search?q=${searchQuery}`);
        setSearchResults(res.data.products?.slice(0, 5) || []);
      } catch (err) {
        console.error(err);
      } finally {
        setIsSearching(false);
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  const navLinkStyle = ({ isActive }) =>
    `font-semibold transition-colors duration-200 cursor-pointer block py-2 md:py-0 ${
      isActive
        ? "text-black dark:text-white font-bold md:border-b-2 md:border-black dark:md:border-white pb-1"
        : "text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white"
    }`;

  return (
    <>
      {/* Top Navbar */}
      <header className="bg-white dark:bg-slate-900 border-b border-gray-100 dark:border-slate-800 transition-colors duration-300 py-4 sticky top-0 z-40 shadow-xs">
        <Container>
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <Image imgSrc={logo} className="h-7 sm:h-8 object-contain dark:invert" />
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:block text-sm">
              <ul className="flex items-center gap-x-8">
                <li>
                  <NavLink to="/" className={navLinkStyle}>
                    HOME
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/shop" className={navLinkStyle}>
                    SHOP
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/about" className={navLinkStyle}>
                    ABOUT
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/contact" className={navLinkStyle}>
                    CONTACT
                  </NavLink>
                </li>
              </ul>
            </nav>

            {/* Header Right Action Icons */}
            <div className="flex items-center gap-2 sm:gap-4 text-gray-700 dark:text-gray-200">
              
              {/* Theme Toggle Button */}
              <button
                onClick={() => dispatch(toggleTheme())}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors text-amber-500"
                title={`Switch to ${mode === "light" ? "Dark" : "Light"} Mode`}
              >
                {mode === "light" ? <FaMoon className="text-slate-700 text-base sm:text-lg" /> : <FaSun className="text-amber-400 text-base sm:text-lg" />}
              </button>

              {/* Compare Icon */}
              <button
                onClick={() => setIsCompareOpen(true)}
                className="relative p-2 hover:text-black dark:hover:text-white transition-colors"
                title="Compare Products"
              >
                <FaExchangeAlt className="text-base sm:text-lg" />
                {compareCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 bg-amber-500 text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                    {compareCount}
                  </span>
                )}
              </button>

              {/* Wishlist Icon */}
              <button
                onClick={() => setIsWishlistOpen(true)}
                className="relative p-2 hover:text-rose-500 transition-colors"
                title="Wishlist"
              >
                <FaHeart className="text-base sm:text-lg" />
                {wishlistCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 bg-rose-500 text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                    {wishlistCount}
                  </span>
                )}
              </button>

              {/* User/Login Icon */}
              <button
                onClick={() => setIsUserOpen(true)}
                className="flex items-center gap-1 p-2 hover:text-black dark:hover:text-white transition-colors"
                title={user ? `Logged in as ${user.name}` : "User Account"}
              >
                <FaUser className="text-base sm:text-lg" />
                {user ? (
                  <span className="hidden sm:inline text-xs font-semibold text-emerald-600 dark:text-emerald-400 max-w-[70px] truncate">
                    {user.name}
                  </span>
                ) : (
                  <FaCaretDown className="text-xs hidden sm:inline" />
                )}
              </button>

              {/* Cart Icon */}
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative p-2 text-gray-900 dark:text-white hover:text-emerald-600 transition-colors"
                title="Shopping Cart"
              >
                <FaShoppingCart className="text-lg sm:text-xl" />
                {cartCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 bg-black dark:bg-white text-white dark:text-black text-[10px] font-extrabold w-4 sm:w-5 h-4 sm:h-5 rounded-full flex items-center justify-center shadow-md">
                    {cartCount}
                  </span>
                )}
              </button>

              {/* Mobile Hamburger Menu Toggle */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 md:hidden text-gray-700 dark:text-gray-200 hover:text-black dark:hover:text-white text-lg"
              >
                {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
              </button>

            </div>
          </div>

          {/* Mobile Collapsible Navigation Menu */}
          {isMobileMenuOpen && (
            <nav className="md:hidden mt-4 pt-4 border-t border-gray-100 dark:border-slate-800 space-y-2">
              <NavLink to="/" onClick={() => setIsMobileMenuOpen(false)} className={navLinkStyle}>
                HOME
              </NavLink>
              <NavLink to="/shop" onClick={() => setIsMobileMenuOpen(false)} className={navLinkStyle}>
                SHOP
              </NavLink>
              <NavLink to="/about" onClick={() => setIsMobileMenuOpen(false)} className={navLinkStyle}>
                ABOUT
              </NavLink>
              <NavLink to="/contact" onClick={() => setIsMobileMenuOpen(false)} className={navLinkStyle}>
                CONTACT
              </NavLink>
            </nav>
          )}
        </Container>
      </header>

      {/* Sub Header / Category & Live Search Bar */}
      <div className="bg-gray-100 dark:bg-slate-800/90 border-b border-gray-200 dark:border-slate-700/50 py-3 transition-colors duration-300 relative z-30">
        <Container>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            
            {/* Shop by Category */}
            <div className="relative flex items-center w-full sm:w-auto" ref={dropRef}>
              <div
                onClick={handleDrop}
                className="flex items-center justify-between w-full sm:w-auto gap-2 cursor-pointer py-2 px-3 rounded-lg hover:bg-gray-200 dark:hover:bg-slate-700 text-gray-800 dark:text-gray-200 font-medium text-xs sm:text-sm transition-colors bg-white sm:bg-transparent dark:bg-slate-900 sm:dark:bg-transparent border sm:border-0 border-gray-200 dark:border-slate-700"
              >
                <div className="flex items-center gap-2">
                  <IoReorderTwo className="text-xl" />
                  <span>Shop by Category</span>
                </div>
                <FaCaretDown className={`text-xs transition-transform duration-300 ${isCategoryOpen ? "rotate-180" : ""}`} />
              </div>

              {/* Category Dropdown with Smooth Scale/Fade Transition */}
              <div
                className={`absolute top-12 left-0 right-0 sm:right-auto sm:w-64 bg-white dark:bg-slate-900 shadow-xl border border-gray-100 dark:border-slate-800 rounded-xl py-2 z-50 max-h-72 overflow-y-auto transform transition-all duration-300 ease-out origin-top-left ${
                  isCategoryOpen
                    ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
                }`}
              >
                {[
                  "Electronics",
                  "Mobile Phones",
                  "Laptops",
                  "Headphones",
                  "Watches",
                  "Fashion",
                  "Shoes",
                  "Bags",
                  "Furniture",
                  "Home & Living",
                  "Beauty",
                  "Sports",
                  "Groceries",
                  "Accessories",
                ].map((cat) => (
                  <div
                    key={cat}
                    onClick={() => {
                      setIsCategoryOpen(false);
                      navigate(`/shop?category=${encodeURIComponent(cat.toLowerCase())}`);
                    }}
                    className="px-5 py-2 text-xs sm:text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800 hover:text-black dark:hover:text-white cursor-pointer transition-colors"
                  >
                    {cat}
                  </div>
                ))}
              </div>
            </div>

            {/* Live Search Input */}
            <div className="relative flex-1 max-w-lg w-full">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-700 rounded-full py-2 pl-4 pr-9 text-xs sm:text-sm text-gray-800 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition-all shadow-xs"
                  placeholder="Search products in catalog..."
                />
                {searchQuery ? (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 text-xs"
                  >
                    <FaTimes />
                  </button>
                ) : (
                  <FaSearch className="absolute right-3.5 top-3 text-gray-400 text-xs sm:text-sm" />
                )}
              </div>

              {/* Search Results Dropdown */}
              {searchQuery && (
                <div className="absolute top-11 left-0 right-0 bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800 shadow-2xl rounded-2xl p-2 z-50 space-y-1">
                  {isSearching ? (
                    <div className="p-4 text-center text-xs text-gray-400">Searching catalog...</div>
                  ) : searchResults.length > 0 ? (
                    searchResults.map((prod) => (
                      <div
                        key={prod.id}
                        onClick={() => {
                          setSearchQuery("");
                          navigate(`/shop?search=${encodeURIComponent(prod.title)}`);
                        }}
                        className="flex items-center gap-3 p-2 rounded-xl hover:bg-gray-50 dark:hover:bg-slate-800 cursor-pointer"
                      >
                        <img
                          src={prod.thumbnail}
                          alt={prod.title}
                          className="w-9 h-9 object-contain rounded-lg bg-gray-100 dark:bg-slate-800 p-1"
                        />
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-semibold text-gray-900 dark:text-white truncate">
                            {prod.title}
                          </p>
                          <p className="text-[11px] text-emerald-600 font-bold">${prod.price}</p>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="p-4 text-center text-xs text-gray-400">No products found</div>
                  )}
                </div>
              )}
            </div>

          </div>
        </Container>
      </div>

      {/* Drawers & Modals */}
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      <WishlistDrawer isOpen={isWishlistOpen} onClose={() => setIsWishlistOpen(false)} />
      <CompareModal isOpen={isCompareOpen} onClose={() => setIsCompareOpen(false)} />
      <UserModal isOpen={isUserOpen} onClose={() => setIsUserOpen(false)} />
    </>
  );
};

export default Header;
