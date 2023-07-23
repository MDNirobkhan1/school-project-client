import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import slide1 from '../../../image/1.jpg';
import slide2 from '../../../image/2.jpg';
import slide3 from '../../../image/3.jpg';
import slide4 from '../../../image/4.jpg';
import slide5 from '../../../image/5.jpg';
import slide6 from '../../../image/6.jpg';
import slide7 from '../../../image/7.jpg';

const GropuPhoto = () => {
    return (
        
      <>
      <div>
        <hr />
        <h1 className='text-4xl text-center mt-10 mb-10 font-semibold'>Graduation group photo</h1>
      </div>
        <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper  mb-10"
      >
        
        <SwiperSlide>
            <img src={slide1} alt="" />
        </SwiperSlide>
      
        <SwiperSlide>
            <img src={slide2} alt="" />
        </SwiperSlide>
      
        <SwiperSlide>
            <img src={slide3} alt="" />
        </SwiperSlide>
      
        <SwiperSlide>
            <img src={slide4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide5} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide6} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide7} alt="" />
        </SwiperSlide>
      
      </Swiper>
      </>
    );
};

export default GropuPhoto;