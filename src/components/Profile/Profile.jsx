import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../../provider/AuthContext';
import { FaUser } from "react-icons/fa6";
import { MdEmail, MdOutlineLibraryAdd } from 'react-icons/md';
import { FaRegEdit } from "react-icons/fa";
import axios from 'axios';
import Loading from '../Loading/Loading';
import BooksByCategory from './BooksByCategory';

import CategoryPiechart from './CategoryPiechart';
import { useNavigate } from 'react-router';

const Profile = () => {
    const { user } = use(AuthContext);
    const [myBooks, setMyBooks] = useState([]);
    const [byCategory, setByCategory] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        if (user?.email) {
            axios.get(`https://books-leaf-server.vercel.app/mybooks?user_email=${user?.email}`, {
                headers: {
                    Authorization: `Bearer ${user?.accessToken}`
                }
            })
                .then(res => {
                    setMyBooks(res.data)
                })
        }
    }, [user?.email, user?.accessToken])

    useEffect(() => {
        if (user?.email) {
            axios.get(`https://books-leaf-server.vercel.app/mybooks/categories?user_email=${user?.email}`)
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

                    {
                        myBooks?.length === 0 ?
                            <div className='flex flex-col items-center gap-5 my-10'>
                                <h1 className='text-2xl text-error'>No Books In Your Bookshelf !!</h1>
                                <img className='w-52' src="/assets/empty_bookshelf.png" alt="" />
                                <button onClick={() => navigate('/addbook')} className='flex items-center gap-1 text-secondary bg-primary rounded-sm mt-5 px-4 py-2'><span><MdOutlineLibraryAdd /></span> Add a Book</button>
                            </div>
                            :
                            <div className='flex justify-center'>
                                <CategoryPiechart chartData={chartData} />
                            </div>
                    }

                    <div className='mt-10'>
                        <div className='text-xl'>
                            Total Books: <span className='font-medium'>{myBooks?.length < 10 ? `0${myBooks?.length}` : myBooks?.length}</span>
                        </div>

                        <div className='grid grid-cols-1 gap-4 mt-10 max-w-2xl mx-auto'>
                            {
                                chartData?.map(book => <BooksByCategory key={book._id} book={book} byCategory={byCategory} />)
                            }
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Profile;