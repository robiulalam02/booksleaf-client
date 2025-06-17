import React from 'react';
// import * as motion from "motion/react-client"\

import { motion } from "motion/react"

const Slide1 = () => {
    return (
        <div className='flex items-center justify-between h-full'>
            <div className='w-6/12'>
                <motion.h1
                    initial={{ y: 25, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, ease: 'easeInOut' }}
                    className='cormorant text-7xl'>Discover Your Next <span className='text-secondary'>Favorite</span> Book</motion.h1>
                <p
                    className='mt-5 pr-10'>Explore a curated collection of timeless classics, trending titles, and hidden gems — all in one beautiful online shelf.</p>
            </div>
            <div className='w-6/12 flex justify-center items'>
                <div className='relative'>
                    {/* <motion.div
                        animate={{ y: 100 }}
                        transition={{ ease: "easeInOut", duration: .8 }}>

                    </motion.div> */}
                    <motion.img
                        initial={{ rotate: 0 }}
                        whileInView={{ rotate: -12 }}
                        transition={{ duration: .8, ease: 'easeInOut' }}
                        className='h-[440px]' src="/public/assets/book-1.jpg" alt="" />
                    <img className='h-full absolute top-14 left-40 ' src="/public/assets/book-2.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Slide1;