import React from 'react';
import { BiUpvote } from 'react-icons/bi';
import { TbMilitaryRank } from 'react-icons/tb';
import { useNavigate } from 'react-router';

const MyBooksList = ({ book }) => {
    const navigate = useNavigate();
    return (
        <tr>
            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <div class="flex items-center">
                    <div class="flex-shrink-0 h-20">
                        <img class="w-full h-full"
                            src={book.cover_photo}
                            alt="" />
                    </div>
                    <div class="ml-3">
                        <p class="text-gray-900 whitespace-no-wrap">
                            {book.book_title}
                        </p>
                    </div>
                </div>
            </td>
            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden md:table-cell">
                <p class="text-gray-900 whitespace-no-wrap">{book.book_category.toUpperCase()}</p>
            </td>
            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden md:table-cell">
                <p class="text-gray-900 whitespace-no-wrap">
                    {book.reading_status.toUpperCase()}
                </p>
            </td>
            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <div className='flex items-center gap-5'>
                    <button onClick={()=> navigate(`/updatebook/${book._id}`)}>
                        <img className='w-5' src="/public/assets/edit.png" alt="" />
                    </button>

                    <button>
                        <img className='w-6' src="/public/assets/delete.png" alt="" />
                    </button>
                </div>
            </td>
        </tr>
    );
};

export default MyBooksList;


