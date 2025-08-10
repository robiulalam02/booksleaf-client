import React from 'react';
// import * as motion from "motion/react-client"

const Slide3 = () => {
    return (
        <div className='flex flex-col-reverse lg:flex-row items-center justify-evenly lg:justify-between h-full'>
            <div className='w-full lg:w-6/12 text-center lg:text-start px-4 lg:px-0'>
                <h1
                    className='cormorant text-3xl sm:text-4xl md:text-5xl lg:text-7xl'>Write Reviews, <span className='text-secondary'>Reflections</span> & Recommendations</h1>
                <p className='mt-5 pr-0 lg:pr-10 text-xs md:text-base'>Express your thoughts, review books you've read, and help others discover stories worth exploring — your words can inspire fellow readers.</p>
            </div>
            <div className='sm:w-8/12 lg:w-6/12 flex justify-end items'>
                <img className='w-full' src="/assets/writer.png" alt="" />
            </div>
        </div>
    );
};

export default Slide3;