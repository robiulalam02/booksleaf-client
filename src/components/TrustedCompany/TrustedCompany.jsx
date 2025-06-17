import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';

const TrustedCompany = () => {
    return (
        <div className='max-w-screen-xl mx-auto my-20'>


            <div className='text-center'>
                <h2 className='cormorant text-4xl font-semibold'>Trusted By Companies</h2>
            </div>

            <div className='mt-20'>
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={0}
                    slidesPerView={4}
                    autoplay={{ delay: 3000 }}
                    loop={true}
                >
                    <SwiperSlide style={{ height: '150px' }}>
                        <div className='flex justify-center items-center h-full'>
                            <div className='w-40 overflow-hidden'>
                                <img className='w-full object-cover' src="/assets/Penguin_Random_House_logo.png" alt="" />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide style={{ height: '150px' }}>
                        <div className='flex justify-center items-center h-full'>
                            <div className='w-40 overflow-hidden'>
                                <img className='w-full object-cover' src="/assets/HarperCollins.png" alt="" />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide style={{ height: '150px' }}>
                        <div className='flex justify-center items-center h-full'>
                            <div className='w-40 overflow-hidden'>
                                <img className='w-full object-cover' src="/assets/1200px-Simon_and_Schuster.svg.webp" alt="" />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide style={{ height: '150px' }}>
                        <div className='flex justify-center items-center h-full'>
                            <div className='w-40 overflow-hidden'>
                                <img className='w-full object-cover' src="/assets/barnes.png" alt="" />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide style={{ height: '150px' }}>
                        <div className='flex justify-center items-center h-full'>
                            <div className='w-40 overflow-hidden'>
                                <img className='w-full object-cover' src="/assets/190725_macmillan.png" alt="" />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide style={{ height: '150px' }}>
                        <div className='flex justify-center items-center h-full'>
                            <div className='w-40 overflow-hidden'>
                                <img className='w-full object-cover' src="/assets/cropped-hachette-logo1.webp" alt="" />
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default TrustedCompany;

<>




</>