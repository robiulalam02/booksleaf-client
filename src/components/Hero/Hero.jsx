import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Slide1 from '../Slides/Slide1';
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md';
import { Autoplay } from 'swiper/modules';
import Slide2 from '../Slides/Slide2';
import Slide3 from '../Slides/Slide3';

const Hero = () => {
    const [next, setNext] = useState(null);
    const [activeIndex, setActiveIndex] = useState(0);
    return (
        <div className='text-white h-[700px] place-content-center relative max-w-screen-2xl mx-auto'>
            <div className='md:max-w-5xl mx-auto lg:max-w-6xl xl:max-w-screen-2xl lg:px-20'>
                <Swiper
                    modules={[Autoplay]}
                    style={{ height: '640px' }}
                    loop={true}
                    slidesPerView={1}
                    spaceBetween={50}
                    onSwiper={setNext}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                >
                    <SwiperSlide>
                        <Slide1 isActive={activeIndex === 0} />
                    </SwiperSlide>

                    <SwiperSlide>
                        <Slide2 />
                    </SwiperSlide>

                    <SwiperSlide>
                        <Slide3 />
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className='w-full h-full z-50 absolute top-0 flex justify-between items-center px-6'>
                <button onClick={() => next && next.slidePrev()}>
                    <span className='hover:text-secondary'>
                        <MdArrowBackIosNew size={24} />
                    </span>
                </button>
                <button onClick={() => next && next.slideNext()}>
                    <span className='hover:text-secondary'>
                        <MdArrowForwardIos size={24} />
                    </span>
                </button>
            </div>
        </div>
    );
};

export default Hero;