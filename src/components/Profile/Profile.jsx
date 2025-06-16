import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../../provider/AuthContext';
import { FaUser } from "react-icons/fa6";
import { MdEmail } from 'react-icons/md';
import { FaRegEdit } from "react-icons/fa";
import axios from 'axios';
import Loading from '../Loading/Loading';
import BooksByCategory from './BooksByCategory';

import CategoryPiechart from './CategoryPiechart';

const Profile = () => {
    const { user } = use(AuthContext);
    const [myBooks, setMyBooks] = useState([]);
    const [byCategory, setByCategory] = useState([]);

    useEffect(() => {
        if (user?.email) {
            axios.get(`http://localhost:3000/books?user_email=${user?.email}`)
                .then(res => {
                    setMyBooks(res.data)
                })
        }
    }, [user?.email])

    useEffect(() => {
        if (user?.email) {
            axios.get(`http://localhost:3000/mybooks/categories?user_email=${user?.email}`)
                .then(res => {
                    const categories = [];
                    categories.push(res.data)
                    setByCategory(categories);
                })
        }
    }, [user?.email])



    const categoryCounts = myBooks.reduce((acc, book) => {
        acc[book.book_category] = (acc[book.book_category] || 0) + 1;
        return acc;
    }, {});

    const chartData = Object.entries(categoryCounts).map(([category, count]) => ({
        category,
        count,
    }));

    console.log(chartData);

    return (
        <div className='max-w-screen-xl mx-auto mt-10 mb-20'>
            <h2 className='text-2xl'>User Details</h2>
            <div className='mt-10 flex gap-20 items-center shadow p-5 rounded-2xl'>

                <div>
                    <div className='w-60 h-60 rounded-xl overflow-hidden'>
                        <img className='w-full h-full object-cover' src={user?.photoURL} alt="" />
                    </div>
                </div>

                <div className='flex items-center gap-10'>
                    <div>
                        <div className='flex items-center gap-1'>
                            <span><FaUser /></span>
                            <p className='text-gray-600'>user name</p>
                        </div>
                        <p className='mt-1 text-xl font-medium'>{user?.displayName}</p>
                    </div>

                    <div>
                        <div className='flex items-center gap-1'>
                            <span><MdEmail /></span>
                            <p className='text-gray-600'>user email</p>
                        </div>
                        <p className='mt-1 text-xl font-medium'>{user?.email}</p>
                    </div>

                    <div>
                        <button className='flex items-center gap-1 bg-primary text-gray-50 px-4 py-2 hover:text-secondary'><span><FaRegEdit /></span> Edit profile</button>
                    </div>
                </div>

            </div>

            <div className='mt-10'>
                <div className='text-center'>
                    <h2 className='text-2xl font-medium'>Bookshelf Summary</h2>

                    <div className='flex justify-center'>
                        <CategoryPiechart chartData={chartData} />
                    </div>

                    <div className='mt-10'>
                        <div className='text-xl'>
                            Total Books: <span className='font-medium'>{myBooks?.length < 10 ? `0${myBooks?.length}` : myBooks?.length}</span>
                        </div>

                        <div className='grid grid-cols-1 gap-4 mt-10 max-w-2xl mx-auto'>
                            {
                                myBooks?.map(book => <BooksByCategory key={book._id} book={book} byCategory={byCategory} />)
                            }
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Profile;