import React, { Suspense } from 'react';
import BooksGrid from './BooksGrid';
import Loading from '../Loading/Loading';

const booksPromise = fetch('http://localhost:3000/books').then(res => res.json())

const FeaturedBooks = () => {
    return (
        <div className='max-w-screen-xl mx-auto my-20'>
            <div className='text-center'>
                <h2 className='cormorant text-4xl font-semibold'>Popular Books</h2>
            </div>

            <Suspense fallback={<Loading />}>
                <BooksGrid booksPromise={booksPromise} />
            </Suspense>
        </div>
    );
};

export default FeaturedBooks;