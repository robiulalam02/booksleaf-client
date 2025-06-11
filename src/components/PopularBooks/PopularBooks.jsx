import React, { Suspense, use } from 'react';
import BooksGrid from './BooksGrid';
import Loading from '../Loading/Loading';



const PopularBooks = ({ booksPromise }) => {
    const booksAPI = use(booksPromise);
    return (
        <div className='max-w-screen-xl mx-auto my-20'>
            <div className='text-center'>
                <h2 className='cormorant text-4xl font-semibold'>Popular Books</h2>
            </div>

            <BooksGrid booksAPI={booksAPI} />

        </div>
    );
};

export default PopularBooks;