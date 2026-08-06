import React from 'react'
import Container from '../common/Container'
import Flex from '../common/Flex'
import Products from '../common/Products'
import clock from '/src/assets/clock.png'
import Badge from '../common/Badge'
import watch from '/src/assets/watch.png'
import basket from '/src/assets/basket.png'
import softtoy from '/src/assets/softtoy.png'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

// const Arrivals = () => {
//   return (
//     <div className={"mb-10"}>
//         <Container>
//             <Flex className={"gap-x-10"}>
//                 <div className={"w-[1/4]"}>
//                 <Products productImg={clock} badgeT={"new"} productT={"Basic Crew Neck Tee"}/>
//                 </div>
//                 <div className={"w-[1/4]"}>
//                 <Products productImg={watch} badgeT={"new"} productT={"Basic Crew Neck Tee"}/>
//                 </div>
//                 <div className={"w-[1/4]"}>
//                 <Products productImg={basket} badgeT={"new"} productT={"Basic Crew Neck Tee"}/>
//                 </div>
//                 <div className={"w-[1/4]"}>
//                 <Products productImg={softtoy} badgeT={"new"} productT={"Basic Crew Neck Tee"}/>
//                 </div>
//             </Flex>
//         </Container>
//     </div>
//   )
// }


const Arrivals = () => {
  return (
    <Swiper
    modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={4}
      navigation
      pagination={{ clickable: true }}
       scrollbar={{ draggable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide> <div className={"w-[1/4]"}>
        <Products productImg={clock} badgeT={"new"} productT={"Basic Crew Neck Tee"} />
      </div></SwiperSlide>

      <SwiperSlide>  <div className={"w-[1/4]"}>
        <Products productImg={watch} badgeT={"new"} productT={"Basic Crew Neck Tee"} />
      </div></SwiperSlide>

      <SwiperSlide>  <div className={"w-[1/4]"}>
        <Products productImg={basket} badgeT={"new"} productT={"Basic Crew Neck Tee"} />
      </div></SwiperSlide>

      <SwiperSlide>   <div className={"w-[1/4]"}>
        <Products productImg={softtoy} badgeT={"new"} productT={"Basic Crew Neck Tee"} />
      </div></SwiperSlide>
      <SwiperSlide> <div className={"w-[1/4]"}>
        <Products productImg={clock} badgeT={"new"} productT={"Basic Crew Neck Tee"} />
      </div></SwiperSlide>

      <SwiperSlide>  <div className={"w-[1/4]"}>
        <Products productImg={watch} badgeT={"new"} productT={"Basic Crew Neck Tee"} />
      </div></SwiperSlide>

      <SwiperSlide>  <div className={"w-[1/4]"}>
        <Products productImg={basket} badgeT={"new"} productT={"Basic Crew Neck Tee"} />
      </div></SwiperSlide>

      <SwiperSlide>   <div className={"w-[1/4]"}>
        <Products productImg={softtoy} badgeT={"new"} productT={"Basic Crew Neck Tee"} />
      </div></SwiperSlide>
      ...
    </Swiper>
  );
};

export default Arrivals