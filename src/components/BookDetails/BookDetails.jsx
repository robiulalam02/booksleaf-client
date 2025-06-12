import React from 'react';
import { useLoaderData } from 'react-router';
import { IoBookSharp } from "react-icons/io5";

const BookDetails = () => {
    const book = useLoaderData();
    console.log(book);
    return (
        <div className='max-w-screen-xl mx-auto my-20'>
            <div className='flex items-center gap-20 py-10'>
                <div className='relative border-10 h-[600px] w-[400px] border-secondary p-6'>
                    <img style={{ boxShadow: 'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px' }} className='h-full  absolute z-50 -top-10 right-12' src={book.cover_photo} alt="" />
                </div>
                <div>
                    <div>
                        <h1 className='cormorant text-5xl font-bold text-primary'>{book.book_title}</h1>
                        <p className='text-2xl text-secondary mt-2'>By {book.book_author}</p>
                    </div>
                    <div className='mt-5'>
                        <div className='flex items-center gap-2'>
                            <span className='text-primary'><IoBookSharp /></span>
                            <p className='text-lg'>Book Overview:</p>
                        </div>
                        <p className='text-gray-500 mt-1 text-xl'>{book.book_overview}</p>
                    </div>
                    <div className='flex items-center gap-3 text-xl mt-5'>
                        <p className=''>Total Page:</p>
                        <p className='text-gray-500'>{book.total_page}</p>
                    </div>
                    <div className='flex items-center gap-3 text-xl mt-5'>
                        <p className=''>Total Reviews:</p>
                        <p className='text-gray-500'>{book.upvotes}</p>
                    </div>
                    <div className='flex items-center gap-3 text-xl mt-5'>
                        <p className=''>Book Category:</p>
                        <p className='text-gray-500'>{book.book_category}</p>
                    </div>
                    <div className='flex items-center gap-3 text-xl mt-5'>
                        <p className=''>Reading Status:</p>
                        <p className={`${book.reading_status === "Reading" ? 'text-success' : 'text-warning'}`}>{book.reading_status}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;