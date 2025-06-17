import React, { Suspense, useEffect, useState } from 'react';
import CategoryCard from './CategoryCard';
import Loading from '../Loading/Loading';
import { use } from 'react';
import axios from 'axios';

const FeaturedCategories = ({categoriesPromise}) => {
    const categories = use(categoriesPromise);
    const [categoryCount, setCategoryCount] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:3000/books/categories')
        .then(res=>{
            setCategoryCount(res.data)
        })
    }, [])

    return (
        <div className='bg-primary my-20 text-white pt-10 pb-20'>
            <div className='text-center'>
                <h2 className='cormorant text-4xl font-semibold'>Featured Categories</h2>
            </div>
            <div className='grid grid-cols-4 gap-5 mt-10 max-w-screen-xl mx-auto'>
                {/* <Suspense fallback={<Loading />}>
                    <CategoryCard categoriesPromise={categoriesPromise} />
                </Suspense> */}
                {
                    categories?.map(category=> <CategoryCard key={category.id} category={category} categoryCount={categoryCount} />)
                }
            </div>
        </div>
    );
};

export default FeaturedCategories;