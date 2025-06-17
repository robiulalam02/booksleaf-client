import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

const ReviewsCard = ({ reviewData }) => {
    const { user_name, review, date } = reviewData;
    return (
        <div className='shadow-2xl p-10 flex flex-col justify-between gap-5 rounded-md '>
            <span className='flex items-center justify-between'>
                <FaQuoteLeft color='#1b3764' size={25} />
                <span className='text-sm'>{date}</span>
            </span>
            <p className='break-words text-lg font-light italic'>{review}</p>

            <h3 className=''>{user_name}</h3>
        </div>
    );
};

export default ReviewsCard;