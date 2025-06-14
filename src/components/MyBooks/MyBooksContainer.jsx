import React, { use } from 'react';
import MyBooksList from './MyBooksList';

const MyBooksContainer = ({ myBooksPromise }) => {
    const myBooks = use(myBooksPromise);
    console.log(myBooks);

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
                                        myBooks?.map(book=> <MyBooksList key={book._id} book={book} />)
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