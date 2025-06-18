import React from 'react';
import MyBooksList from './MyBooksList';
import { MdOutlineLibraryAdd } from "react-icons/md";
import Loading from '../Loading/Loading';
import Swal from 'sweetalert2';

const MyBooksContainer = ({ booksData, handleDeleteBook }) => {
    
    return (
        <div className="container mx-auto px-4 sm:px-8">
            <div className="py-8">
                <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                    <div className="inline-block min-w-full shadow rounded-lg">
                        <table className="min-w-full leading-normal">
                            <thead>
                                <tr>
                                    <th
                                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-md font-bold text-gray-600 uppercase tracking-wider cormorant">
                                        Book Name
                                    </th>
                                    <th
                                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-md font-bold text-gray-600 uppercase tracking-wider cormorant hidden md:table-cell">
                                        Category
                                    </th>
                                    <th
                                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-md font-bold text-gray-600 uppercase tracking-wider cormorant hidden md:table-cell">
                                        Status
                                    </th>
                                    <th
                                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-md font-bold text-gray-600 uppercase tracking-wider cormorant">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    booksData?.map(book => <MyBooksList key={book._id} book={book} handleDeleteBook={handleDeleteBook} />)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default MyBooksContainer;