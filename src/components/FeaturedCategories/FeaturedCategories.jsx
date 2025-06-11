import React, { Suspense } from 'react';
import CategoryCard from './CategoryCard';
import Loading from '../Loading/Loading';

const categoriesPromise = fetch('http://localhost:3000/books/categories').then(res => res.json());

const FeaturedCategories = () => {
    return (
        <div className='bg-primary my-20 text-white pt-10 pb-20'>
            <div className='text-center'>
                <h2 className='cormorant text-4xl font-semibold'>Featured Categories</h2>
            </div>
            <div className='grid grid-cols-4 gap-5 mt-10 max-w-screen-xl mx-auto'>
                <Suspense fallback={<Loading />}>
                    <CategoryCard categoriesPromise={categoriesPromise} />
                </Suspense>
            </div>
        </div>
    );
};

export default FeaturedCategories;