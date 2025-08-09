import React, { useEffect, useState } from 'react';
import BooksCard from './BooksCard';
import { Slide } from 'react-awesome-reveal';

const BooksGrid = ({ booksAPI }) => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const filter = booksAPI.sort((a, b) => b.upvotes - a.upvotes).slice(0, 8);
        setBooks(filter)
    }, [booksAPI]);

    return (
        <Slide
            direction='up'
            cascade={true}
            delay={300}
            triggerOnce={true}
        >
            <div className='grid grid-cols-1 px-4 sm:px-10 md:px-4 lg:px-0 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-20'>
                {
                    books?.map(book => <BooksCard key={book._id} book={book} />)
                }
            </div>
        </Slide>
    );
};

export default BooksGrid;