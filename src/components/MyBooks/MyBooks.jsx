import React, { use, useEffect, useState } from 'react';
import MyBooksContainer from './MyBooksContainer';
import { AuthContext } from '../../provider/AuthContext';
import axios from 'axios';
import { useNavigate } from 'react-router';
import { MdOutlineLibraryAdd } from 'react-icons/md';
import Loading from '../Loading/Loading';

const MyBooks = () => {
    const { user } = use(AuthContext);
    const [booksData, setBooksData] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        if (user?.email) {
            axios.get(`http://localhost:3000/books?user_email=${user?.email}`)
                .then(res => {
                    setBooksData(res.data);
                })
        }
    }, [user?.email])

    if (!booksData) {
        return (
            <>
                <div className='flex flex-col items-center gap-5 my-10'>
                    <h1 className='text-2xl text-error'>No Books In Your Bookshelf !!</h1>
                    <img className='w-52' src="/assets/empty_bookshelf.png" alt="" />
                    <button onClick={() => navigate('/addbook')} className='flex items-center gap-1 text-secondary bg-primary rounded-sm mt-5 px-4 py-2'><span><MdOutlineLibraryAdd /></span> Add a Book</button>
                </div>
            </>
        )
    }

    return (
        <>
            <div className='max-w-screen-xl h-dvh mx-auto mt-10 mb-20'>
                <div className='text-center'>
                    <h1 className='cormorant text-3xl font-medium'>My Added Books</h1>
                </div>

                <MyBooksContainer booksData={booksData} />

            </div>
        </>
    );
};

export default MyBooks;