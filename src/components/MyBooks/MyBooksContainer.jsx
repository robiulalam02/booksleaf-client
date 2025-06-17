import React, { useEffect, useState } from 'react';
import MyBooksList from './MyBooksList';
import { MdOutlineLibraryAdd } from "react-icons/md";
import Loading from '../Loading/Loading';
import axios from 'axios';
import Swal from 'sweetalert2';

const MyBooksContainer = ({ booksData }) => {
    console.log(booksData);
    const [myBooks, setMyBooks] = useState([]);

    useEffect(() => {
        setMyBooks(booksData)
    }, [booksData])


    const handleDeleteBook = id => {
        // delete book from database

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`http://localhost:3000/books/${id}`)
                    .then(res => {
                        if (res.data.deletedCount) {
                            Swal.fire({
                                position: "center",
                                icon: "success",
                                title: "Book Successfully Deleted",
                                showConfirmButton: false,
                                timer: 1500
                            });
                            const filteredBooks = myBooks?.filter(book => book._id !== id);
                            setMyBooks(filteredBooks);
                        }
                    })
                    .catch(err => {
                        console.log(err);
                    })
            }
        });


    }

    return (
        <div class="container mx-auto px-4 sm:px-8">
            <div class="py-8">
                <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                    <div class="inline-block min-w-full shadow rounded-lg">
                        <table class="min-w-full leading-normal">
                            <thead>
                                <tr>
                                    <th
                                        class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-md font-bold text-gray-600 uppercase tracking-wider cormorant">
                                        Book Name
                                    </th>
                                    <th
                                        class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-md font-bold text-gray-600 uppercase tracking-wider cormorant hidden md:table-cell">
                                        Category
                                    </th>
                                    <th
                                        class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-md font-bold text-gray-600 uppercase tracking-wider cormorant hidden md:table-cell">
                                        Status
                                    </th>
                                    <th
                                        class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-md font-bold text-gray-600 uppercase tracking-wider cormorant">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    myBooks?.map(book => <MyBooksList key={book._id} book={book} handleDeleteBook={handleDeleteBook} />)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            {/* {
                myBooks?.map(book => <MyBooksCard key={book._id} book={book} />)
            } */}
        </div>
    )
};

export default MyBooksContainer;