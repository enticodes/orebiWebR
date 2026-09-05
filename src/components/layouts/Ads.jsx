import React from "react";
import Container from "../common/Container";
import adOne from "/src/assets/adOne.jpg";
import adTwo from "/src/assets/adTwo.png";
import adThree from "/src/assets/adThree.jpg";
import { Link } from "react-router-dom";

const Ads = () => {
  return (
    <section className="py-8 sm:py-12 bg-transparent">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          
          {/* Main Ad Banner */}
          <Link
            to="/shop"
            className="group relative overflow-hidden rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 block bg-gray-100 dark:bg-slate-800"
          >
            <img
              src={adOne}
              alt="Ad Banner 1"
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 min-h-[220px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6">
              <span className="text-white font-extrabold text-sm sm:text-base group-hover:underline underline-offset-4">
                Shop Special Electronics &rarr;
              </span>
            </div>
          </Link>

          {/* Secondary Ads */}
          <div className="flex flex-col gap-6">
            <Link
              to="/shop"
              className="group relative overflow-hidden rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 block flex-1 bg-gray-100 dark:bg-slate-800"
            >
              <img
                src={adTwo}
                alt="Ad Banner 2"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 min-h-[120px]"
              />
            </Link>

            <Link
              to="/shop"
              className="group relative overflow-hidden rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 block flex-1 bg-gray-100 dark:bg-slate-800"
            >
              <img
                src={adThree}
                alt="Ad Banner 3"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 min-h-[120px]"
              />
            </Link>
          </div>

        </div>
      </Container>
    </section>
  );
};

export default Ads;