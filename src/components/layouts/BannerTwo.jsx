import React from "react";
import Container from "../common/Container";
import { Link } from "react-router-dom";
import adFour from "/src/assets/adFour.png";

const BannerTwo = () => {
  return (
    <section className="py-8 sm:py-12 bg-transparent">
      <Container>
        <Link
          to="/shop"
          className="group relative overflow-hidden rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 block bg-gray-900 min-h-[200px] sm:min-h-[300px] md:min-h-[400px]"
        >
          <img
            src={adFour}
            alt="Ad Banner 4"
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 min-h-[200px] sm:min-h-[300px] md:min-h-[400px]"
          />
        </Link>
      </Container>
    </section>
  );
};

export default BannerTwo;