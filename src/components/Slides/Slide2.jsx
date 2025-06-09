import React from 'react';
// import * as motion from "motion/react-client"

const Slide2 = () => {
    return (
        <div className='flex items-center justify-between h-full'>
            <div className='w-6/12'>
                <h1 className='cormorant text-7xl'>Add Your Own <br /> Books to the <span className='text-secondary'>Shelf</span></h1>
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