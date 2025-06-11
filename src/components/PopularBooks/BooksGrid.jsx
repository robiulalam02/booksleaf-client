import React, { useEffect, useState } from 'react';
import BooksCard from './BooksCard';

const BooksGrid = ({ booksAPI }) => {
    const [books, setBooks] = useState([])
    console.log(booksAPI);

    useEffect(()=>{
        const filter = booksAPI.sort((a, b) => b.upvotes - a.upvotes).slice(0, 8);
        setBooks(filter)
    }, [booksAPI]);

    return (
        <div className='grid grid-cols-4 gap-5 mt-20'>
            {
                books?.map(book=> <BooksCard key={book._id} book={book}/>)
            }
        </div>
    );
};

export default BooksGrid;