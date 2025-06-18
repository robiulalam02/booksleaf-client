import React from 'react';
import { Fade, Zoom } from 'react-awesome-reveal';
import { ImQuotesLeft, ImQuotesRight } from 'react-icons/im';

const QuoteOfTheday = () => {
    return (
        <div className='bg-secondary/50 mb-20 mt-40'>
            <div className='max-w-screen-xl mx-auto py-20'>
                <h2 className='cormorant text-4xl md:text-5xl text-center lg:text-start lg:text-6xl font-bold'>Quote Of The day</h2>
                <div className='flex flex-col lg:flex-row items-center justify-center'>
                    <Zoom
                        delay={300}
                        triggerOnce={true}
                    >
                        <img className='w-64 md:w-96' src="/assets/book-web.webp" alt="" />
                    </Zoom>
                    <div className='w-full lg:w-8/12 px-4 lg:px-0'>
                        <span className='opacity-40 relative text-4xl md:text-5xl lg:text-7xl top-0 lg:top-12 lg:left-4'><ImQuotesLeft /></span>
                        <Fade
                            delay={300}
                            triggerOnce={true}
                        >
                            <p className='z-10 cormorant text-center text-3xl md:text-4xl lg:text-5xl font-bold text-primary px-0 lg:px-10 leading-relaxed'>Where you are is a result of who you were, but where you go depends entirely on who you choose to be.</p>
                        </Fade>
                        <div className='flex justify-end'>
                            <span className='opacity-40 relative right-6 md:right-0 lg:right-72 bottom-5 text-4xl md:text-5xl lg:text-7xl'><ImQuotesRight /></span>
                        </div>
                    </div>
                </div>
                <div className='text-end relative lg:-top-20 px-4 lg:px-0'>
                    <p className='text-lg md:text-xl'>— Hal Elrod, The Miracle Morning</p>
                </div>
            </div>
        </div>
    );
};

export default QuoteOfTheday;