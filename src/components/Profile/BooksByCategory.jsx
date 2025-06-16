import React from 'react';

const BooksByCategory = ({ book, byCategory }) => {
    console.log(book);
    console.log(byCategory);
    const { book_category } = book;

    return (
            <div className='shadow h-32 border-2 border-primary text-primary flex flex-col justify-center'>
                {
                    byCategory?.map(cat => <div>
                        <span className='text-4xl'>{cat[book_category] < 10 ? `0${cat[book_category]}` : cat[book_category]}</span>
                    </div>)
                }
                <h3 className='cormorant text-2xl font-semibold'>{book_category}</h3>
            </div>
    );
};

export default BooksByCategory;