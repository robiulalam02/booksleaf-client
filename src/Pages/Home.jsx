import React, { Suspense } from 'react';
import Hero from '../components/Hero/Hero';
import PopularBooks from '../components/PopularBooks/PopularBooks';
import FeaturedCategories from '../components/FeaturedCategories/FeaturedCategories';
import Loading from '../components/Loading/Loading';
import TrustedCompany from '../components/TrustedCompany/TrustedCompany';
import QuoteOfTheday from '../components/QuoteOfTheday/QuoteOfTheday';

const booksPromise = fetch('http://localhost:3000/books').then(res => res.json())

const Home = () => {
    return (
        <>
            <section className='bg-primary'>
                <Hero />
            </section>

            <section>
                <Suspense fallback={<Loading />}>
                    <PopularBooks booksPromise={booksPromise} />
                </Suspense>
            </section>

            <section>
                <Suspense fallback={<Loading />}>
                    <FeaturedCategories booksPromise={booksPromise} />
                </Suspense>
            </section>
            
            <section>
                <TrustedCompany />
            </section>

            <section>
                <QuoteOfTheday />
            </section>
        </>
    );
};

export default Home;