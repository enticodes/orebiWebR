import React from "react";
import Container from "../common/Container";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaTwitter } from "react-icons/fa";
import Image from "../common/Image";
import orebii from "/src/assets/OREBI.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-slate-950 text-gray-800 dark:text-gray-200 border-t border-gray-200 dark:border-slate-800 pt-16 pb-12 transition-colors duration-300">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          
          {/* Menu Column */}
          <div className="space-y-4">
            <h3 className="text-sm font-extrabold uppercase tracking-wider text-gray-900 dark:text-white">MENU</h3>
            <ul className="space-y-2.5 text-xs font-semibold text-gray-500 dark:text-gray-400">
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
            </ul>
          </div>

          {/* Shop Column */}
          <div className="space-y-4">
            <h3 className="text-sm font-extrabold uppercase tracking-wider text-gray-900 dark:text-white">SHOP</h3>
            <ul className="space-y-2.5 text-xs font-semibold text-gray-500 dark:text-gray-400">
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
            </ul>
          </div>

          {/* Help Column */}
          <div className="space-y-4">
            <h3 className="text-sm font-extrabold uppercase tracking-wider text-gray-900 dark:text-white">HELP</h3>
            <ul className="space-y-2.5 text-xs font-semibold text-gray-500 dark:text-gray-400">
              <li className="hover:text-black dark:hover:text-white cursor-pointer transition-colors">Privacy Policy</li>
              <li className="hover:text-black dark:hover:text-white cursor-pointer transition-colors">Terms & Conditions</li>
              <li className="hover:text-black dark:hover:text-white cursor-pointer transition-colors">Shipping Info</li>
              <li className="hover:text-black dark:hover:text-white cursor-pointer transition-colors">Secure Payments</li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="space-y-3 sm:col-span-2 md:col-span-1">
            <h3 className="text-sm font-extrabold uppercase tracking-wider text-gray-900 dark:text-white">CONTACT</h3>
            <p className="text-sm font-bold text-gray-900 dark:text-white">(052) 611-5711</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">company@domain.com</p>
            <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
              575 Crescent Ave. Quakertown, PA 18951
            </p>
          </div>

          {/* Brand & Social Column */}
          <div className="space-y-4 sm:col-span-2 md:col-span-1 flex flex-col justify-between">
            <div>
              <Image imgSrc={orebii} className="h-7 object-contain dark:invert mb-3" />
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Premium online store providing quality lifestyle & tech products worldwide.
              </p>
            </div>
            
            <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
              <a href="#" className="w-8 h-8 rounded-full bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 flex items-center justify-center text-xs hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors">
                <FaFacebookF />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 flex items-center justify-center text-xs hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors">
                <FaTwitter />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 flex items-center justify-center text-xs hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors">
                <FaLinkedinIn />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 flex items-center justify-center text-xs hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors">
                <FaInstagram />
              </a>
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-gray-200 dark:border-slate-800 text-center text-xs text-gray-400 dark:text-gray-500">
          © {new Date().getFullYear()} Orebi Web Store. All rights reserved. Built with React & Tailwind CSS.
        </div>
      </Container>
    </footer>
  );
};

export default Footer;