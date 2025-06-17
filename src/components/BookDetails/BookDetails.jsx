import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { IoBookSharp } from "react-icons/io5";
import axios from 'axios';
import ReviewForm from '../ReviewForm/ReviewForm';
import ReviewsCard from '../ReviewsCard/ReviewsCard';
import { GoArrowDown } from "react-icons/go";
import { use } from 'react';
import { AuthContext } from '../../provider/AuthContext';
import { toast } from 'react-toastify';

const BookDetails = () => {
    const {user} = use(AuthContext)
    const book = useLoaderData();
    console.log(book._id);
    const [upvoteCount, setUpvoteCount] = useState(book.upvotes);
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        if (book._id) {
            axios.get(`http://localhost:3000/reviews/${book._id}`)
                .then(res => {
                    console.log(res.data);
                    setReviews(res.data);
                })
        }
    }, [book._id])

    const handleUpvote = () => {
        if (book.user_email===user?.email) {
            return toast.error('Oops! You can’t upvote your own added book!')
        }
        const update = {
            upvote: true
        }
        axios.patch(`http://localhost:3000/upvote/${book._id}`, update)
            .then(res => {
                if (res.data.modifiedCount) {
                    setUpvoteCount(upvoteCount + 1)
                }
            })
    }

    return (
        <div className='my-20'>
            <div className='flex items-center gap-20 py-10 max-w-screen-xl mx-auto'>
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
                            <p className=''>Total Upvotes:</p>
                            <p className='text-gray-500'>{upvoteCount}</p>
                        </div>
                        <div className='flex items-center gap-3 text-xl mt-5'>
                            <p className=''>Book Category:</p>
                            <p className='text-gray-500'>{book.book_category}</p>
                        </div>
                        <div className='flex items-center gap-3 text-xl mt-5'>
                            <p className=''>Added By:</p>
                            <p className='text-gray-500'>{book.user_name}</p>
                        </div>
                        <div className='flex items-center gap-3 text-xl mt-5'>
                            <p className=''>User Email:</p>
                            <p className='text-gray-500'>{book.user_email}</p>
                        </div>
                        <div className='flex items-center gap-3 text-xl mt-5'>
                            <p className=''>Reading Status:</p>
                            <p className={`${book.reading_status === "Reading" ? 'text-success' : 'text-warning'}`}>{book.reading_status}</p>
                        </div>
                    </div>
                    <div>
                        <button onClick={handleUpvote} class="relative inline-flex items-center justify-center w-5/12 py-4 overflow-hidden text-lg tracking-tighter text-black border border-secondary group">
                            <span class="absolute w-0 h-0 transition-all duration-300 ease-out bg-secondary  group-hover:w-full group-hover:h-full"></span>

                            <span class="relative font-medium">UPVOTE</span>
                        </button>
                    </div>
                </div>
            </div>

            <div className='max-w-screen-xl mx-auto my-20'>
                <h2 class="cormorant font-black text-black text-center text-4xl leading-none  max-w-2xl mx-auto mb-12">What Readers
                    Are Saying</h2>
                {
                    reviews?.length === 0 ?
                        <div className='flex items-center gap-1 justify-center  text-error'>
                            <p className='text-center'>No reviews yet!! Give a review </p>
                            <span><GoArrowDown /></span>
                        </div>
                        :
                        <div className='grid grid-cols-3 gap-5'>
                            {/* <ReviewsCard /> */}
                            {
                                reviews?.map(rev => <ReviewsCard key={rev._id} reviewData={rev} />)
                            }
                        </div>
                }
            </div>

            <div>
                <ReviewForm bookId={book._id} setReviews={setReviews} postedUser={book.user_email} />
            </div>
        </div>
    );
};

export default BookDetails;