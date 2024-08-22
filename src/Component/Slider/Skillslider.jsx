import React, {useEffect} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import "./Skillslider.css"
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Aos from "aos"
import "aos/dist/aos.css"
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

import slide_image_1 from '../../assets/react.jpg';
import slide_image_2 from '../../assets/node.jpg';
import slide_image_3 from '../../assets/mongodb.png';
import slide_image_4 from '../../assets/Cshark.png';
import slide_image_5 from '../../assets/html.png';
import slide_image_6 from '../../assets/css.png';
import slide_image_7 from '../../assets/tailwind.png';
import slide_image_8 from '../../assets/firebase.png';
import slide_image_9 from '../../assets/typescript.png';
import slide_image_10 from '../../assets/cplusplus.png';
import slide_image_11 from '../../assets/bootstrap.png';

export default function Skillslider() {
  useEffect(()=> {
    Aos.init({duration: 1000});
})
  return (
    <div className="container" >
    <h1 className="slider-heading" data-aos="fade-right">Skills Gallery</h1>
    <Swiper
    data-aos="fade-right"
      effect={'coverflow'}
      grabCursor={true}
      centeredSlides={true}
      loop={true}
      slidesPerView={'auto'}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2.5,
      }}
      pagination={{ el: '.swiper-pagination', clickable: true }}
      navigation={{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        clickable: true,
      }}
      modules={[EffectCoverflow, Pagination, Navigation]}
      className="swiper_container"
    >
      <SwiperSlide  className='image-1'>
        <h1>Node jS</h1>
        <img src={slide_image_2} alt="slide_image" />
      </SwiperSlide>
      <SwiperSlide className='image-1'>
        <h1>REACT</h1>
        <img src={slide_image_1} alt="slide_image" />
      </SwiperSlide>
      <SwiperSlide  className='image-1'>
        <h1>MONGO DB</h1>
        <img src={slide_image_3} alt="slide_image" />
      </SwiperSlide>
      <SwiperSlide  className='image-1'>
        <h1>C#</h1>
        <img src={slide_image_4} alt="slide_image" />
      </SwiperSlide>
      <SwiperSlide  className='image-1'>
        <h1>HTML</h1>
        <img src={slide_image_5} alt="slide_image" />
      </SwiperSlide>
      <SwiperSlide  className='image-1'>
        <h1>CSS</h1>
        <img src={slide_image_6} alt="slide_image" />
      </SwiperSlide>
      <SwiperSlide  className='image-1'>
        <h1>TAILWIND</h1>
        <img src={slide_image_7} alt="slide_image" />
      </SwiperSlide>
      <SwiperSlide  className='image-1'>
        <h1>FireBase</h1>
        <img src={slide_image_8} alt="slide_image" />
      </SwiperSlide>
      <SwiperSlide  className='image-1'>
        <h1>TypeScript</h1>
        <img src={slide_image_9} alt="slide_image" />
      </SwiperSlide>
      <SwiperSlide  className='image-1'>
        <h1>C++</h1>
        <img src={slide_image_10} alt="slide_image" />
      </SwiperSlide>
      <SwiperSlide  className='image-1'>
        <h1>BootStrap</h1>
        <img src={slide_image_11} alt="slide_image" />
      </SwiperSlide>

      <div className="slider-controler">
        <div className="swiper-button-prev slider-arrow">
          <ion-icon name="arrow-back-outline"></ion-icon>
        </div>
        <div className="swiper-button-next slider-arrow">
          <ion-icon name="arrow-forward-outline"></ion-icon>
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </Swiper>
  </div>
  )
}
