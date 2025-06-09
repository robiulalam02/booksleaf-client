import React from 'react';
// import * as motion from "motion/react-client"

const Slide1 = () => {
    return (
        <div className='flex items-center justify-between h-full'>
            <div className='w-6/12'>
                <h1 className='cormorant text-7xl'>Discover Your Next <span className='text-secondary'>Favorite</span> Book</h1>
                <p className='mt-5 pr-10'>Explore a curated collection of timeless classics, trending titles, and hidden gems — all in one beautiful online shelf.</p>
            </div>
            <div className='w-6/12 flex justify-center items'>
                <div className='relative'>
                    {/* <motion.div
                        animate={{ y: 100 }}
                        transition={{ ease: "easeInOut", duration: .8 }}>

                    </motion.div> */}
                    <img className='h-[440px] -rotate-12' src="/public/assets/book-1.jpg" alt="" />
                    <img className='h-full absolute top-14 left-40 ' src="/public/assets/book-2.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Slide1;