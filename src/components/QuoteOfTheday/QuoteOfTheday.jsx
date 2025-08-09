import React from 'react';
import { Fade, Zoom } from 'react-awesome-reveal';
import { ImQuotesLeft, ImQuotesRight } from 'react-icons/im';
import Container from '../Container/Container';

const QuoteOfTheday = () => {
    return (
        <div className='bg-secondary/50 mb-20 mt-40'>
            <Container>
                <div className='max-w-screen-2xl mx-auto py-20'>
                    <h2 className='cormorant text-4xl md:text-5xl text-center lg:text-start lg:text-6xl font-bold'>Quote Of The day</h2>
                    <div className='flex flex-col lg:flex-row items-center justify-evenly'>
                        <Zoom
                            delay={300}
                            triggerOnce={true}
                        >
                            <img className='w-64 md:w-96' src="/assets/book-web.webp" alt="" />
                        </Zoom>
                        <div className='w-full md:w-7/12 px-4 lg:px-0'>
                            <span className='opacity-40 relative text-4xl md:text-5xl lg:text-6xl xl:text-7xl top-0 lg:top-12 lg:left-4'><ImQuotesLeft /></span>
                            <Fade
                                delay={300}
                                triggerOnce={true}
                            >
                                <p className='z-10 cormorant text-center text-3xl md:text-4xl xl:text-5xl font-bold text-primary px-0 lg:px-10 leading-relaxed'>Where you are is a result of who you were, but where you go depends entirely on who you choose to be.</p>
                            </Fade>
                            <div className='flex justify-end'>
                                <span className='opacity-40 relative right-6 md:right-0 lg:right-40 2xl:right-72 bottom-5 text-4xl md:text-5xl lg:text-6xl xl:text-7xl'><ImQuotesRight /></span>
                            </div>
                        </div>
                    </div>
                    <div className='text-end relative 2xl:-top-20 px-4 lg:px-0'>
                        <p className='text-lg md:text-xl'>— Hal Elrod, The Miracle Morning</p>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default QuoteOfTheday;