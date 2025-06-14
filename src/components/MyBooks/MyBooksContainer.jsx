import React, { use, useState } from 'react';
import MyBooksList from './MyBooksList';
import { MdOutlineLibraryAdd } from "react-icons/md";
import { useNavigate } from 'react-router';

const MyBooksContainer = ({ myBooksPromise }) => {
    const initialBooks = use(myBooksPromise);
    const [myBooks, setMyBooks] = useState(initialBooks);
    const navigate = useNavigate();
    console.log(myBooks.length);

    return (
        <div class="container mx-auto px-4 sm:px-8">
            <div class="py-8">
                {
                    myBooks.length === 0 ?
                        <div className='flex flex-col items-center gap-5 my-10'>
                            <h1 className='text-2xl text-error'>No Books In Your Bookshelf !!</h1>
                            <img className='w-52' src="/assets/empty_bookshelf.png" alt="" />
                            <button onClick={() => navigate('/addbook')} className='flex items-center gap-1 text-secondary bg-primary rounded-sm mt-5 px-4 py-2'><span><MdOutlineLibraryAdd /></span> Add a Book</button>
                        </div>
                        :
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
                                            myBooks?.map(book => <MyBooksList key={book._id} book={book} myBooks={myBooks} setMyBooks={setMyBooks} />)
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                }
            </div>
            {/* {
                myBooks?.map(book => <MyBooksCard key={book._id} book={book} />)
            } */}
        </div>
    )
};

export default MyBooksContainer;