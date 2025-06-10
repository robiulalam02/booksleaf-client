import React, { use } from 'react';
import BooksCard from './BooksCard';

const BooksGrid = ({ booksPromise }) => {
    const booksData = use(booksPromise);
    console.log(booksData);
    return (
        <div className='grid grid-cols-4 gap-5 mt-20'>
            {
                booksData?.map(book=> <BooksCard key={book._id} book={book}/>)
            }
        </div>
    );
};

export default BooksGrid;