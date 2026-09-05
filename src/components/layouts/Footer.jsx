import React from "react";
import Container from "../common/Container";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaTwitter, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";
import Image from "../common/Image";
import orebii from "/src/assets/OREBI.png";
import { Link } from "react-router-dom";
import { useToast } from "../common/Toast";

const Footer = () => {
  const { addToast } = useToast() || { addToast: () => {} };

  const handleSubscribe = (e) => {
    e.preventDefault();
    addToast?.("Thank you for subscribing to our newsletter!", "success");
    e.target.reset();
  };

  return (
    <footer className="bg-gray-100 dark:bg-slate-950 text-gray-800 dark:text-gray-200 border-t border-gray-200 dark:border-slate-800/80 pt-12 sm:pt-16 pb-8 sm:pb-12 transition-colors duration-300">
      <Container>
        
        {/* Top Newsletter Strip on Footer */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 mb-12 shadow-sm border border-gray-200/60 dark:border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-lg sm:text-xl font-black text-gray-900 dark:text-white">
              Join Our Newsletter
            </h3>
            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
              Get 10% off your first order and stay updated on exclusive deals.
            </p>
          </div>
          <form onSubmit={handleSubscribe} className="flex w-full md:w-auto max-w-md gap-2">
            <input
              type="email"
              required
              placeholder="Enter your email address..."
              className="flex-1 px-4 py-2.5 bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-xl text-xs sm:text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
            />
            <button
              type="submit"
              className="px-5 py-2.5 bg-black dark:bg-white text-white dark:text-black font-bold text-xs sm:text-sm rounded-xl hover:opacity-90 transition-opacity flex items-center gap-2 flex-shrink-0"
            >
              Subscribe <FaPaperPlane className="text-xs" />
            </button>
          </form>
        </div>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-5 gap-8 sm:gap-10 mb-12">
          
          {/* Brand & Info - Full width on small screens */}
          <div className="col-span-2 md:col-span-1 space-y-4">
            <Link to="/">
              <Image imgSrc={orebii} className="h-7 object-contain dark:invert mb-3" />
            </Link>
            <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
              Orebi Web Store is your destination for premium tech, gadgets, lifestyle, and fashion accessories.
            </p>

            <div className="flex items-center gap-2.5 text-gray-600 dark:text-gray-300 pt-2">
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 flex items-center justify-center text-xs hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
                title="Facebook"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 flex items-center justify-center text-xs hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
                title="Twitter"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 flex items-center justify-center text-xs hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
                title="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 flex items-center justify-center text-xs hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
                title="Instagram"
              >
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Quick Menu */}
          <div className="col-span-1 space-y-3">
            <h3 className="text-xs sm:text-sm font-black uppercase tracking-wider text-gray-900 dark:text-white">
              MENU
            </h3>
            <ul className="space-y-2 text-xs font-semibold text-gray-500 dark:text-gray-400">
              <li>
                <Link to="/" className="hover:text-black dark:hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/shop" className="hover:text-black dark:hover:text-white transition-colors">
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-black dark:hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-black dark:hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/cart" className="hover:text-black dark:hover:text-white transition-colors">
                  Cart
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="col-span-1 space-y-3">
            <h3 className="text-xs sm:text-sm font-black uppercase tracking-wider text-gray-900 dark:text-white">
              CATEGORIES
            </h3>
            <ul className="space-y-2 text-xs font-semibold text-gray-500 dark:text-gray-400">
              <li>
                <Link to="/shop?category=electronics" className="hover:text-black dark:hover:text-white transition-colors">
                  Electronics
                </Link>
              </li>
              <li>
                <Link to="/shop?category=laptops" className="hover:text-black dark:hover:text-white transition-colors">
                  Laptops
                </Link>
              </li>
              <li>
                <Link to="/shop?category=mens-shoes" className="hover:text-black dark:hover:text-white transition-colors">
                  Footwear
                </Link>
              </li>
              <li>
                <Link to="/shop?category=smartphones" className="hover:text-black dark:hover:text-white transition-colors">
                  Smartphones
                </Link>
              </li>
              <li>
                <Link to="/shop?category=beauty" className="hover:text-black dark:hover:text-white transition-colors">
                  Beauty
                </Link>
              </li>
            </ul>
          </div>

          {/* Policy & Help */}
          <div className="col-span-1 space-y-3">
            <h3 className="text-xs sm:text-sm font-black uppercase tracking-wider text-gray-900 dark:text-white">
              HELP & POLICIES
            </h3>
            <ul className="space-y-2 text-xs font-semibold text-gray-500 dark:text-gray-400">
              <li className="hover:text-black dark:hover:text-white cursor-pointer transition-colors">
                Privacy Policy
              </li>
              <li className="hover:text-black dark:hover:text-white cursor-pointer transition-colors">
                Terms of Service
              </li>
              <li className="hover:text-black dark:hover:text-white cursor-pointer transition-colors">
                Shipping & Delivery
              </li>
              <li className="hover:text-black dark:hover:text-white cursor-pointer transition-colors">
                Returns & Refund
              </li>
              <li className="hover:text-black dark:hover:text-white cursor-pointer transition-colors">
                FAQ & Help Center
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="col-span-2 sm:col-span-1 space-y-3">
            <h3 className="text-xs sm:text-sm font-black uppercase tracking-wider text-gray-900 dark:text-white">
              CONTACT
            </h3>
            <div className="space-y-2 text-xs text-gray-500 dark:text-gray-400">
              <div className="flex items-center gap-2 font-bold text-gray-900 dark:text-white">
                <FaPhoneAlt className="text-emerald-500 text-xs" />
                <span>+1 (800) 555-OREBI</span>
              </div>
              <div className="flex items-center gap-2">
                <FaEnvelope className="text-indigo-500 text-xs" />
                <span>support@orebi.com</span>
              </div>
              <div className="flex items-start gap-2 pt-1 leading-relaxed">
                <FaMapMarkerAlt className="text-rose-500 text-xs mt-0.5 flex-shrink-0" />
                <span>575 Crescent Ave, Quakertown, PA 18951</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 sm:pt-8 border-t border-gray-200 dark:border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-xs text-gray-500 dark:text-gray-400">
          <p>© {new Date().getFullYear()} Orebi Store. All rights reserved.</p>
          <div className="flex items-center gap-4 text-[11px]">
            <span className="hover:underline cursor-pointer">Privacy</span>
            <span>•</span>
            <span className="hover:underline cursor-pointer">Terms</span>
            <span>•</span>
            <span className="hover:underline cursor-pointer">Cookies</span>
          </div>
        </div>

      </Container>
    </footer>
  );
};

export default Footer;