import React from 'react';
// import * as motion from "motion/react-client"\

import { motion } from "motion/react"

const Slide1 = () => {
    return (
        <div className='flex flex-col-reverse lg:flex-row items-center justify-evenly lg:justify-between h-full'>
            <div className='w-full lg:w-6/12 text-center lg:text-start px-4 lg:px-0'>
                <motion.h1
                    initial={{ y: 25, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, ease: 'easeInOut' }}
                    className='cormorant text-3xl sm:text-4xl md:text-5xl lg:text-7xl'>Discover Your Next <span className='text-secondary'>Favorite</span> Book</motion.h1>
                <p
                    className='mt-5 pr-0 lg:pr-10'>Explore a curated collection of timeless classics, trending titles, and hidden gems — all in one beautiful online shelf.</p>
            </div>
            <div className='w-full lg:w-6/12 flex justify-center items'>
                <div className='relative'>
                    {/* <motion.div
                        animate={{ y: 100 }}
                        transition={{ ease: "easeInOut", duration: .8 }}>

                    </motion.div> */}
                    <motion.img
                        initial={{ rotate: 0 }}
                        whileInView={{ rotate: -12 }}
                        transition={{ duration: .8, ease: 'easeInOut' }}
                        className='h-[250px] md:h-[320px] lg:h-[440px] mr-10 md:mr-36 lg:mr-0' src="/assets/book-1.jpg" alt="" />
                    <img className='h-full absolute top-0 left-10 md:top-14 md:left-40 ' src="/assets/book-2.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Slide1;