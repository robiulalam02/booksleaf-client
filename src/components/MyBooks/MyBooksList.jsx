import React from 'react';
import { BiUpvote } from 'react-icons/bi';
import { TbMilitaryRank } from 'react-icons/tb';
import { useNavigate } from 'react-router';
import Swal from 'sweetalert2';

const MyBooksList = ({ book, handleDeleteBook }) => {
    const navigate = useNavigate();

    return (
        <tr>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <div className="flex items-center">
                    <div className="flex-shrink-0 h-20">
                        <img className="w-full h-full"
                            src={book.cover_photo}
                            alt="" />
                    </div>
                    <div className="ml-3">
                        <p className="text-gray-900 whitespace-no-wrap">
                            {book.book_title}
                        </p>
                    </div>
                </div>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden md:table-cell">
                <p className="text-gray-900 whitespace-no-wrap">{book.book_category.toUpperCase()}</p>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm hidden md:table-cell">
                <p className="text-gray-900 whitespace-no-wrap">
                    {book.reading_status.toUpperCase()}
                </p>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <div className='flex items-center gap-5'>
                    <button onClick={() => navigate(`/updatebook/${book._id}`)}>
                        <img className='w-5' src="/assets/edit.png" alt="" />
                    </button>

                    <button onClick={()=> handleDeleteBook(book._id)}>
                        <img className='w-6' src="/assets/delete.png" alt="" />
                    </button>
                </div>
            </td>
        </tr>
    );
};

export default MyBooksList;


