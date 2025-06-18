import React, { useEffect, useState, useContext } from 'react';
import MyBooksContainer from './MyBooksContainer';
import { AuthContext } from '../../provider/AuthContext';
import axios from 'axios';
import { useNavigate } from 'react-router';
import { MdOutlineLibraryAdd } from 'react-icons/md';
import Loading from '../Loading/Loading';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';

const MyBooks = () => {
    const { user } = useContext(AuthContext);
    const [booksData, setBooksData] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        if (user?.email) {
            axios.get(`https://books-leaf-server.vercel.app/mybooks?user_email=${user.email}`, {
                headers: {
                    Authorization: `Bearer ${user.accessToken}`
                }
            })
                .then(res => {
                    setBooksData(res.data);
                    setLoading(false);
                })
                .catch(err => {
                    console.error(err);
                    setLoading(false);
                });
        }
    }, [user?.email, user?.accessToken]);

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
                axios.delete(`https://books-leaf-server.vercel.app/books/${id}`)
                    .then(res => {
                        if (res.data.deletedCount) {
                            Swal.fire({
                                position: "center",
                                icon: "success",
                                title: "Book Successfully Deleted",
                                showConfirmButton: false,
                                timer: 1500
                            });
                            const filteredBooks = booksData?.filter(book => book._id !== id);
                            setBooksData(filteredBooks);
                        }
                    })
                    .catch(err => {
                        console.log(err);
                    })
            }
        });


    }


    if (loading) {
        return <Loading />;
    }

    return (
        <>
            <Helmet>
                <title>My Books</title>
            </Helmet>
            {
                booksData?.length === 0 ?
                    <div className='flex flex-col items-center justify-center min-h-screen gap-5 my-10'>
                        <h1 className='text-2xl text-error'>No Books In Your Bookshelf !!</h1>
                        <img className='w-52' src="/assets/empty_bookshelf.png" alt="" />
                        <button
                            onClick={() => navigate('/addbook')}
                            className='flex items-center gap-1 text-secondary bg-primary rounded-sm mt-5 px-4 py-2'
                        >
                            <MdOutlineLibraryAdd /> Add a Book
                        </button>
                    </div>
                    :
                    <div className='max-w-screen-xl min-h-screen mx-auto mt-10 mb-20'>
                        <div className='text-center'>
                            <h1 className='cormorant text-3xl font-medium'>My Added Books</h1>
                        </div>
                        <MyBooksContainer booksData={booksData} handleDeleteBook={handleDeleteBook} />
                    </div>
            }
        </>
    );
};

export default MyBooks;
