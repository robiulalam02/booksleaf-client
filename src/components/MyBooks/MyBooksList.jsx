import axios from 'axios';
import React from 'react';
import { BiUpvote } from 'react-icons/bi';
import { TbMilitaryRank } from 'react-icons/tb';
import { useNavigate } from 'react-router';
import Swal from 'sweetalert2';

const MyBooksList = ({ book, myBooks, setMyBooks }) => {
    const navigate = useNavigate();

    const handleDeleteBook = () => {
        // delete book from database

        axios.delete(`http://localhost:3000/books/${book._id}`)
            .then(res => {
                if (res.data.deletedCount) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Book Successfully Deleted",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    const filteredBooks = myBooks?.filter(book=> book._id !== book._id);
                    setMyBooks(filteredBooks);
                }
            })
            .catch(err => {
                console.log(err);
            })
    }

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
                    <button onClick={() => navigate(`/updatebook/${book._id}`)}>
                        <img className='w-5' src="/public/assets/edit.png" alt="" />
                    </button>

                    <button onClick={handleDeleteBook}>
                        <img className='w-6' src="/public/assets/delete.png" alt="" />
                    </button>
                </div>
            </td>
        </tr>
    );
};

export default MyBooksList;


