import React from 'react';
import Hero from '../components/Hero/Hero';
import FeaturedBooks from '../components/FeaturedBooks/FeaturedBooks';

const Home = () => {
    return (
        <>
            <section className='bg-primary'>
                <Hero />
            </section>

            <section>
                <FeaturedBooks />
            </section>
        </>
    );
};

export default Home;