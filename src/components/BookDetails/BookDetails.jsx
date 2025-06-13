import React from 'react';
import { useLoaderData } from 'react-router';
import { IoBookSharp } from "react-icons/io5";

const BookDetails = () => {
    const book = useLoaderData();
    console.log(book);
    return (
        <div className='max-w-screen-xl mx-auto h-dvh my-20'>
            <div className='flex items-center gap-20 py-10 h-full'>
                <div>
                    <div className='relative border-10 h-[600px] w-[450px] border-secondary p-6'>
                        <img style={{ boxShadow: 'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px' }} className='h-full w-full absolute z-50 -top-10 right-12' src={book.cover_photo} alt="" />
                    </div>
                </div>
                <div className='flex flex-col gap-10'>
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
                    <div>
                        <button class="relative inline-flex items-center justify-center w-5/12 py-4 overflow-hidden text-lg tracking-tighter text-black border border-secondary group">
                            <span class="absolute w-0 h-0 transition-all duration-300 ease-out bg-secondary  group-hover:w-full group-hover:h-full"></span>

                            <span class="relative">Give a Review</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;