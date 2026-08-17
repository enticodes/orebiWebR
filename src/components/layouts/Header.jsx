import React from "react";
import Container from "../common/Container";
import Flex from "../common/Flex";
import Image from "../common/Image";
import logo from "/src/assets/Logo.png";
import { IoReorderTwo } from "react-icons/io5";
import { FaSearch, FaUser, FaCaretDown, FaShoppingCart } from "react-icons/fa";
import { useState, useRef } from "react";
 
const Header = () => {

     let dropRef = useRef(null);

  let handleDrop = () => {
    
     

    if (dropRef.current.style.display == "block") {
      dropRef.current.style.display = "none";
    } 
    
    else {
      dropRef.current.style.display = "block";
    }

  };
  return (
    <>
      <div>
        <Container>
          <Flex className={"gap-x-110"}>
            <Image imgSrc={logo} className={"pt-8 pb-8"} />
            <div className={"text-[14px] text-[#c1bbbb]"}>
              <ul className={"flex gap-x-9.75"}>
                <li
                  className={
                    " hover:text-black hover:font-bold duration-75 cursor-pointer"
                  }
                >
                  HOME
                </li>
                <li
                  className={
                    " hover:text-black hover:font-bold duration-75 cursor-pointer"
                  }
                >
                  SHOP
                </li>
                <li
                  className={
                    " hover:text-black hover:font-bold duration-75 cursor-pointer"
                  }
                >
                  ABOUT
                </li>
                <li
                  className={
                    " hover:text-black hover:font-bold duration-75 cursor-pointer"
                  }
                >
                  CONTACT
                </li>
              </ul>
            </div>
          </Flex>
        </Container>
      </div>

      <div className={"bg-gray-200"}>
        <Container>
          <Flex className={"justify-between"}>
            <div className={"flex items-center pt-10 pb-10"}>
              <IoReorderTwo className={"cursor-pointer"} onClick={handleDrop}/>
              <h6 className={"text-[14px] cursor-pointer"} onClick={handleDrop}>Shop by Category </h6>
              <div className="absolute top-40 left-10 mt-3 w-64 bg-white shadow-lg border border-gray-100 z-50 hidden" ref={dropRef}>
                <div className="px-5 py-3 hover:bg-gray-100 cursor-pointer">
                  Electronics
                </div>

                <div className="px-5 py-3 hover:bg-gray-100 cursor-pointer">
                  Mobile Phones
                </div>

                <div className="px-5 py-3 hover:bg-gray-100 cursor-pointer">
                  Laptops
                </div>

                <div className="px-5 py-3 hover:bg-gray-100 cursor-pointer">
                  Headphones
                </div>

                <div className="px-5 py-3 hover:bg-gray-100 cursor-pointer">
                  Watches
                </div>

                <div className="px-5 py-3 hover:bg-gray-100 cursor-pointer">
                  Fashion
                </div>

                <div className="px-5 py-3 hover:bg-gray-100 cursor-pointer">
                  Shoes
                </div>

                <div className="px-5 py-3 hover:bg-gray-100 cursor-pointer">
                  Bags
                </div>

                <div className="px-5 py-3 hover:bg-gray-100 cursor-pointer">
                  Furniture
                </div>

                <div className="px-5 py-3 hover:bg-gray-100 cursor-pointer">
                  Home & Living
                </div>

                <div className="px-5 py-3 hover:bg-gray-100 cursor-pointer">
                  Beauty
                </div>

                <div className="px-5 py-3 hover:bg-gray-100 cursor-pointer">
                  Sports
                </div>

                <div className="px-5 py-3 hover:bg-gray-100 cursor-pointer">
                  Groceries
                </div>

                <div className="px-5 py-3 hover:bg-gray-100 cursor-pointer">
                  Accessories
                </div>
              </div>
            </div>
            <div>
              <input
                type={"text"}
                className={"bg-white h-12.5 w-150"}
                placeholder={"Search Products"}
              ></input>
              <FaSearch className={"absolute top-30.75 right-115"} />
            </div>
            <div className={"flex items-center"}>
              <FaUser />
              <FaCaretDown />
              <FaShoppingCart className={"ml-10.25"} />
            </div>
          </Flex>
        </Container>
      </div>
    </>
  );
};

export default Header;
