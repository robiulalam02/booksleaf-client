import React from 'react';
// import * as motion from "motion/react-client"

import { motion } from "motion/react"

const Slide2 = ({isActive}) => {
    return (
        <div className='flex items-center justify-between h-full'>
            <div className='w-6/12'>
                <motion.h1
                    initial={{ y: 25, opacity: 0 }}
                    animate={isActive ? { y: 0, opacity: 1 } :  {}}
                    transition={{ duration: 1, ease: 'easeInOut' }}
                    className='cormorant text-7xl'>Add Your Own <br /> Books to the <span className='text-secondary'>Shelf</span></motion.h1>
                <p className='mt-5 pr-10'>Share your personal collection or self-published works. Build a virtual bookshelf that others can explore and appreciate.</p>
            </div>
            <div className='w-6/12 flex justify-center items'>
                <div className='relative'>

                    <img className='w-full' src="/public/assets/bookshelf.png" alt="" />

                </div>
            </div>
        </div>
    );
};

export default Slide2;