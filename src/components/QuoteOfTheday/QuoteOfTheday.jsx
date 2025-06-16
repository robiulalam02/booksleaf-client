import React from 'react';
import { ImQuotesLeft, ImQuotesRight } from 'react-icons/im';

const QuoteOfTheday = () => {
    return (
        <div className='bg-secondary/50 mb-20 mt-40'>
            <div className='max-w-screen-xl mx-auto py-20'>
                <h2 className='cormorant text-6xl font-bold'>Quote Of The day</h2>
                <div className='flex items-center justify-center'>
                    <img className='w-96' src="/assets/book-web.webp" alt="" />
                    <div className='w-8/12'>
                        <span className='opacity-40 relative top-12 left-4'><ImQuotesLeft size={70} /></span>
                        <p className='z-10 cormorant text-5xl font-bold text-primary px-10 leading-relaxed'>Where you are is a result of who you were, but where you go depends entirely on who you choose to be.</p>
                        <div className='flex justify-end'>
                            <span className='opacity-40 relative right-72 bottom-5'><ImQuotesRight size={70} /></span>
                        </div>
                    </div>
                </div>
                <div className='text-end relative -top-20'>
                    <p className='text-xl'>— Hal Elrod, The Miracle Morning</p>
                </div>
            </div>
        </div>
    );
};

export default QuoteOfTheday;