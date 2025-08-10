import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../../provider/AuthContext';
import { useNavigate, useParams } from 'react-router';
import { FaRegEdit } from "react-icons/fa";
import axios from 'axios';
import Swal from 'sweetalert2';
import Loading from '../Loading/Loading';

const UpdateBook = () => {
    const { user } = use(AuthContext);
    const { id } = useParams();
    const [book, setBook] = useState([]);
    const navigate = useNavigate();
    const token = user?.accessToken;
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (token) {
            axios.get(`https://books-leaf-server.vercel.app/books/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
                .then(res => {
                    setBook(res.data);
                    setLoading(false);
                })

        }
    }, [id, token])

    const handleUpdateBook = e => {
        e.preventDefault();

        const form = new FormData(e.target);
        const bookData = Object.fromEntries(form.entries());

        // update book data in mongodb

        axios.put(`https://books-leaf-server.vercel.app/books/${book._id}`, bookData)
            .then(res => {
                if (res.data.modifiedCount) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Book Details Updated Successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate('/mybooks')
                }
            })
            .catch(err => {
                console.log(err);
            })

    }

    if (loading) {
        return <Loading />
    }

    return (
        <div className='max-w-screen-xl mx-auto mb-40 mt-10'>

            <div className='mb-20 text-center'>
                <h1 className='cormorant text-3xl font-medium'>Update Book Details</h1>
            </div>

            <div className='max-w-3xl mx-auto mt-20 shadow-2xl rounded-xl overflow-hidden'>
                <div className='px-10 py-5 bg-primary text-white'>
                    <div className='flex items-center gap-1 text-secondary'>
                        <span><FaRegEdit size={20} /></span>
                        <h3 className='text-xl font-semibold'>Update Details</h3>
                    </div>
                    <p className='text-gray-50'>plese give your books details</p>
                </div>

                <form onSubmit={handleUpdateBook} className='mt-6'>
                    <div className='space-y-5 px-10 pb-10'>
                        <div className='flex flex-col gap-2'>
                            <label>Book Name<span className='text-error'>*</span></label>
                            <input defaultValue={book.book_title} className='w-full bg-slate-50 shadow h-10 px-5' type="text" name="book_title" placeholder='Enter Book Name' />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label>Writer Name<span className='text-error'>*</span></label>
                            <input defaultValue={book.book_author} required className='w-full bg-slate-50 shadow h-10 px-5' type="text" name="book_author" placeholder='Enter Writer Name' />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label>Book Category<span className='text-error'>*</span></label>
                            <select defaultValue={book.book_category} required name='book_category' className='w-full bg-slate-50 shadow h-10 px-5'>
                                <option>Select Category</option>
                                <option value="fiction">Fiction</option>
                                <option value="fantasy">Fantasy</option>
                                <option value="nonfiction">Non-Fiction</option>
                                <option value="history">History</option>
                                <option value="thriller">Thriller</option>
                                <option value="science">Science</option>
                                <option value="business">Business</option>
                                <option value="philosophy">Philosophy</option>
                            </select>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label>Cover Photo<span className='text-error'>*</span></label>
                            <input defaultValue={book.cover_photo} required className='w-full bg-slate-50 shadow h-10 px-5' type="url" name="cover_photo" placeholder='Cover Photo URL' />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label>Total Page<span className='text-error'>*</span></label>
                            <input defaultValue={book.total_page} required className='w-full bg-slate-50 shadow h-10 px-5' type="number" name="total_page" placeholder='Enter Total Page' />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label>Reading Status<span className='text-error'>*</span></label>
                            <select defaultValue={book.reading_status} required name='reading_status' className='w-full bg-slate-50 shadow h-10 px-5'>
                                <option>Reading Status</option>
                                <option value="read">Read</option>
                                <option value="reading">Reading</option>
                                <option value="want-to-read">Want to Read</option>
                            </select>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label>User<span className='text-error'>*</span></label>
                            <input required readOnly defaultValue={user?.displayName} className='w-full bg-slate-50 shadow h-10 px-5' type="text" name="total_name" placeholder='Enter Total Page' />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label>User Email<span className='text-error'>*</span></label>
                            <input required readOnly defaultValue={user?.email} className='w-full bg-slate-50 shadow h-10 px-5' type="email" name="user_email" placeholder='Enter Total Page' />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label>Upvotes<span className='text-error'>*</span></label>
                            <input required readOnly value={book.upvotes} className='w-full bg-slate-50 shadow h-10 px-5' type="number" name="upvotes" />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label>Book Overview<span className='text-error'>*</span></label>
                            <textarea defaultValue={book.book_overview} className='w-full bg-slate-50 shadow px-5 py-2' name="book_overview" rows="5" placeholder='Type Overview'></textarea>
                        </div>
                    </div>

                    <div className='bg-primary px-10 py-5'>
                        <button type='submit' className='bg-secondary px-8 font-semibold py-3'>Add Book</button>
                    </div>
                </form>


            </div>
        </div>
    );
};

export default UpdateBook;