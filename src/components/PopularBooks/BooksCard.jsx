import React from 'react';
import { BiUpvote } from 'react-icons/bi';
import { TbMilitaryRank } from 'react-icons/tb';

const BooksCard = ({ book }) => {
    return (
        <div className='flex flex-col items-center gap-4 text-center shadow p-4'>
            <div className='bg-gray-300 flex justify-center p-5 w-full h-[300px] overflow-hidden'>
                <img className='object-cover h-full' src={book.cover_photo} alt="" />
            </div>
            <span
                className="inline-flex items-center justify-center rounded-full bg-amber-100 px-2.5 py-0.5 text-amber-700 dark:bg-amber-700 dark:text-amber-100"
            >
                <TbMilitaryRank />

                <p className="text-sm whitespace-nowrap">{book.upvotes}+ upvotes</p>
            </span>
            <div className='w-full '>
                <h3 className='cormorant text-2xl font-semibold overflow-hidden whitespace-nowrap text-ellipsis truncate'>{book?.book_title}</h3>
            </div>
            <p>{book.book_author}</p>

            <button href="#_" class="relative inline-flex items-center justify-center w-full py-4 overflow-hidden text-lg tracking-tighter text-black border border-secondary group">
                <span class="absolute w-0 h-0 transition-all duration-300 ease-out bg-secondary  group-hover:w-full group-hover:h-full"></span>
                
                <span class="relative">Books Detail</span>
            </button>

            {/* <button className='border border-secondary w-full py-4'>Books Detail</button> */}
        </div>
    );
};

export default BooksCard;


