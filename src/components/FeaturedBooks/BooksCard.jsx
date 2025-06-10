import React from 'react';

const BooksCard = ({ book }) => {
    return (
        <div className='flex flex-col items-center gap-4 text-center shadow p-4'>
            <div className='w-[200px] h-[300px] overflow-hidden'>
                <img className='object-cover h-full w-full' src={book.cover_photo} alt="" />
            </div>
            <div className='w-full '>
                <h3 className='cormorant text-2xl font-semibold overflow-hidden whitespace-nowrap text-ellipsis truncate'>{book?.book_title}</h3>
            </div>
            <p>{book.book_author}</p>

            <button className='border border-secondary w-full py-4'>Books Detail</button>
        </div>
    );
};

export default BooksCard;