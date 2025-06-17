import React from 'react';
// import * as motion from "motion/react-client"

const Slide3 = () => {
    return (
        <div className='flex items-center justify-between h-full'>
            <div className='w-6/12'>
                <h1
                    className='cormorant text-7xl'>Write Reviews, <span className='text-secondary'>Reflections</span> & Recommendations</h1>
                <p className='mt-5 pr-10'>Express your thoughts, review books you've read, and help others discover stories worth exploring — your words can inspire fellow readers.</p>
            </div>
            <div className='w-6/12 flex justify-center items'>
                <div className='relative'>

                    <img className='w-full' src="/assets/writer.png" alt="" />

                </div>
            </div>
        </div>
    );
};

export default Slide3;