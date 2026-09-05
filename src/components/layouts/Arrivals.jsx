import React, { useEffect, useState } from 'react'
import Container from '../common/Container'
import Products from '../common/Products'
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
      try {
        let data = await axios.get("https://dummyjson.com/products")
        setAllData(data.data.products || [])
      } catch (err) {
        console.error(err);
      }
    }
    alldatas()
  }, [])

  return (
    <section className="py-12 bg-transparent text-gray-900 dark:text-white transition-colors duration-300">
      <Container>
        <Heading text={"New Arrivals"} as={"h2"} className={"text-3xl font-black mb-8 dark:text-white"} />
        <Swiper
          modules={[Navigation, Scrollbar, A11y]}
          spaceBetween={24} 
          breakpoints={{
            320: { slidesPerView: 1.2 },
            640: { slidesPerView: 2.2 },
            1024: { slidesPerView: 4 }
          }}
          navigation
          loop={true} 
          speed={600}
        > 
          {allData.slice(0, 8).map((item) => (
            <SwiperSlide key={item.id} className="py-2"> 
              <Products item={item} productImg={item.thumbnail} badgeT={"NEW"} productT={item.title} price={item.price} category={item.category} rating={item.rating} /> 
            </SwiperSlide>
          ))} 
        </Swiper>
      </Container>
    </section>
  );
};

export default Arrivals;