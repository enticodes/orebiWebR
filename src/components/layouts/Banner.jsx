import React from "react";
import { Link } from "react-router-dom";
import Container from "../common/Container";
import intro from "/src/assets/intro.png";

const Banner = () => {
  return (
    <section className="py-6 sm:py-8 bg-transparent">
      <Container>
        <Link
          to="/shop"
          className="group relative overflow-hidden rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 block bg-gray-100 dark:bg-slate-800"
          title="Go to Shop"
        >
          <img
            src={intro}
            alt="Main Banner"
            className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500 cursor-pointer"
          />
        </Link>
      </Container>
    </section>
  );
};

export default Banner;