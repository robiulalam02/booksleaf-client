import React from 'react';
// import * as motion from "motion/react-client"


const Slide2 = () => {
    return (
        <div className='flex flex-col-reverse lg:flex-row items-center justify-evenly lg:justify-between h-full'>
            <div className='w-full lg:w-6/12 text-center lg:text-start px-4 lg:px-0'>
                <h1

                    className='cormorant text-3xl sm:text-4xl md:text-5xl lg:text-7xl'>Add Your Own <br /> Books to the <span className='text-secondary'>Shelf</span></h1>
                <p className='mt-5 pr-0 lg:pr-10 text-xs md:text-base'>Share your personal collection or self-published works. Build a virtual bookshelf that others can explore and appreciate.</p>
            </div>
            <div className='w-full lg:w-6/12 flex justify-end items px-4 lg:px-0'>

                <img className='w-full' src="/assets/bookshelf.png" alt="" />
            </div>
        </div>
    );
};

export default Slide2;