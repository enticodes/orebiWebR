import React from 'react'
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

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import Heading from '../common/Heading'

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
    <div className={"mt-32"}>
      
       <Container>
      <Heading text={"New Arrivals"} as={"h2"} className={"text-3xl font-bold mb-12"}/>
    <Swiper
  
           modules={[Navigation, Scrollbar, A11y]}
                    spaceBetween={24}
                    slidesPerView={4.2}
                    navigation
                    loop={true}
                    speed={600}

      
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <Products productImg={clock} badgeT={"new"} productT={"Basic Crew Neck Tee"} />
      </SwiperSlide>

      <SwiperSlide>
        <Products productImg={watch} badgeT={"new"} productT={"Basic Crew Neck Tee"} />
      </SwiperSlide>

      <SwiperSlide>
        <Products productImg={basket} badgeT={"new"} productT={"Basic Crew Neck Tee"} />
      </SwiperSlide>

      <SwiperSlide> 
        <Products productImg={softtoy} badgeT={"new"} productT={"Basic Crew Neck Tee"} />
      </SwiperSlide>

      <SwiperSlide>
        <Products productImg={clock} badgeT={"new"} productT={"Basic Crew Neck Tee"} />
      </SwiperSlide>

      <SwiperSlide>
        <Products productImg={watch} badgeT={"new"} productT={"Basic Crew Neck Tee"} />
      </SwiperSlide>

      <SwiperSlide>
        <Products productImg={basket} badgeT={"new"} productT={"Basic Crew Neck Tee"} />
      </SwiperSlide>

      <SwiperSlide> 
        <Products productImg={softtoy} badgeT={"new"} productT={"Basic Crew Neck Tee"} />
      </SwiperSlide>
    </Swiper>
    </Container>
    </div>
  );
};

export default Arrivals