import React from 'react';
// import * as motion from "motion/react-client"

import { motion } from "motion/react"

const Slide3 = ({isActive}) => {
    return (
        <div className='flex items-center justify-between h-full'>
            <div className='w-6/12'>
                <motion.h1
                    initial={{ y: 25, opacity: 0 }}
                    animate={isActive ? { y: 0, opacity: 1 } : {}}
                    transition={{ duration: 1, ease: 'easeInOut' }}
                    className='cormorant text-7xl'>Write Reviews, <span className='text-secondary'>Reflections</span> & Recommendations</motion.h1>
                <p className='mt-5 pr-10'>Express your thoughts, review books you've read, and help others discover stories worth exploring — your words can inspire fellow readers.</p>
            </div>
            <div className='w-6/12 flex justify-center items'>
                <div className='relative'>

                    <img className='w-full' src="/public/assets/writer.png" alt="" />

                </div>
            </div>
        </div>
    );
};

export default Slide3;