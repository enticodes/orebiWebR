import React from 'react'
import Image from './Image'
import Badge from './Badge'
import Heading from './Heading'
import Flex from './Flex'
import { FaHeart } from "react-icons/fa";
import { TfiReload } from "react-icons/tfi";
import { FaShoppingCart } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';

const Products = ({productImg,badgeT,productT}) => {
  return (
    <div className={"relative group"}>
        <Image imgSrc={productImg}/>
        <Badge badgeText={badgeT} className={"absolute top-4 left-4"}/>
        <div className={"bg-white py-6.25 hidden group-hover:block absolute bottom-5 left-0 w-full"}>
          <Flex className={"justify-end gap-x-2"}>
            <h3 className={"text-[16px] text-[#767676] cursor-pointer hover:text-black hover:font-bold"}>Add to Wish List</h3>
            <FaHeart />
            </Flex>
          <Flex className={"justify-end gap-x-2"}>
            <h3 className={"text-[16px] text-[#767676] cursor-pointer hover:text-black hover:font-bold"}>Compare</h3>
            <TfiReload />
            </Flex>
          <Flex className={"justify-end gap-x-2"}>
            <h3 className={"text-[16px] text-[#767676] cursor-pointer hover:text-black hover:font-bold"}>Add to Cart</h3>
            <FaShoppingCart />
            </Flex>
        </div>
        <div className={"flex justify-between"}>
       <Heading text={productT} as={"h3"} className={"font-bold"}/>
       <p>25$</p>
        </div>
    </div>
  )
}





export default Products