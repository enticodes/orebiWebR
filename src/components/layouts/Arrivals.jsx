import React, { useEffect, useState } from 'react'
import Container from '../common/Container'
import Flex from '../common/Flex'
import Products from '../common/Products'
import clock from '/src/assets/clock.png'
import Badge from '../common/Badge'
import watch from '/src/assets/watch.png'
import basket from '/src/assets/basket.png'
import softtoy from '/src/assets/softtoy.png'
import { Navigation, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import axios from 'axios'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import Heading from '../common/Heading'



const Arrivals = () => {
  let [allData, setAllData] = useState([])

  useEffect(() => {
    async function alldatas() {
      let data = await axios.get("https://dummyjson.com/products")
      setAllData(data.data.products)
    }
    alldatas()
  }, [])

  return (
    <div className={"mt-32"}>

      <Container>
        <Heading text={"New Arrivals"} as={"h2"} className={"text-3xl font-bold mb-12"} />
        <Swiper modules={[Navigation, Scrollbar, A11y]}
         spaceBetween={24} 
         slidesPerView={4.2} 
         navigation loop={true} 
         speed={600} > 
        {allData.slice(0, 8).map((item) => (<SwiperSlide key={item.id}> 
        <Products productImg={item.thumbnail} badgeT={"new"} productT={item.title} /> </SwiperSlide>))} </Swiper>
      </Container>
    </div>
  );
};

export default Arrivals