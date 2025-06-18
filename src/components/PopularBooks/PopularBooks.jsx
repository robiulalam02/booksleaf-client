import React, { Suspense, use } from 'react';
import BooksGrid from './BooksGrid';
import Loading from '../Loading/Loading';
import { useNavigate } from 'react-router';



const PopularBooks = ({ booksPromise }) => {
    const booksAPI = use(booksPromise);
    const navigate = useNavigate();
    return (
        <div className='max-w-screen-xl mx-auto my-20'>
            <div className='text-center'>
                <h2 className='cormorant text-4xl font-semibold'>Popular Books</h2>
            </div>

            <BooksGrid booksAPI={booksAPI} />

            <div className='text-center mt-10'>
                <button
                    onClick={()=>navigate('/bookshelf')}
                    className="relative inline-flex rounded-full items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold bg-indigo-50 text-indigo-600 transition-all duration-150 ease-in-out hover:pl-10 hover:pr-6 hover:bg-primary group">

                    <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                        <svg className="w-5 h-5 text-indigo-600" xmlns="http://www.w3.org/2000/svg" width="24"
                            height="24" viewBox="0 0 24 24" fill="none">
                            <path
                                d="M14.9385 6L20.9999 12.0613M20.9999 12.0613L14.9385 18.1227M20.9999 12.0613L3 12.0613"
                                stroke="currentcolor" strokeWidth="1.6" strokeLinecap="round"
                                strokeLinejoin="round" />
                        </svg>
                    </span>
                    <span
                        className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                        <svg className="w-5 h-5 text-secondary" xmlns="http://www.w3.org/2000/svg" width="24"
                            height="24" viewBox="0 0 24 24" fill="none">
                            <path
                                d="M14.9385 6L20.9999 12.0613M20.9999 12.0613L14.9385 18.1227M20.9999 12.0613L3 12.0613"
                                stroke="currentcolor" strokeWidth="1.6" strokeLinecap="round"
                                strokeLinejoin="round" />
                        </svg>
                    </span>
                    <span
                        className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-secondary">View All Books</span>
                </button>
            </div>

        </div>
    );
};

export default PopularBooks;