import React from 'react';

const BooksByCategory = ({ book, byCategory }) => {
    const { category } = book;

    return (
            <div className='shadow h-32 border-2 border-primary text-primary flex flex-col justify-center'>
                {
                    byCategory?.map((cat, index) => <div key={index}>
                        <span className='text-4xl'>{cat[category] < 10 ? `0${cat[category]}` : cat[category]}</span>
                    </div>)
                }
                <h3 className='cormorant text-2xl font-semibold'>{category}</h3>
            </div>
    );
};

export default BooksByCategory;