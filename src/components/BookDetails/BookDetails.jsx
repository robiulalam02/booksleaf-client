import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { IoBookSharp } from "react-icons/io5";
import axios from 'axios';
import ReviewForm from '../ReviewForm/ReviewForm';
import ReviewsCard from '../ReviewsCard/ReviewsCard';
import { GoArrowDown } from "react-icons/go";
import { use } from 'react';
import { AuthContext } from '../../provider/AuthContext';
import { toast } from 'react-toastify';
import MyReviewCard from '../ReviewsCard/MyReviewCard';
import Loading from '../Loading/Loading';
import { Helmet } from 'react-helmet-async';

const BookDetails = () => {
    const { user } = use(AuthContext)
    const { id } = useParams();
    const [book, setBook] = useState([]);
    const [upvoteCount, setUpvoteCount] = useState('');
    const [reviews, setReviews] = useState([]);
    const token = user?.accessToken;
    const [currentStatus, setCurrentStatus] = useState('');
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
                    setCurrentStatus(book?.reading_status);
                    setUpvoteCount(book?.upvotes)
                    setLoading(false);
                })
                .catch(err => {
                    console.log('error message:', err);
                    setLoading(false);
                })
        }
    }, [id, token, book?.reading_status, book?.upvotes]);


    useEffect(() => {
        if (book._id) {
            axios.get(`https://books-leaf-server.vercel.app/reviews/${book._id}`)
                .then(res => {
                    setReviews(res.data);
                    setLoading(false);
                })
        }
    }, [book._id])

    const handleUpvote = () => {
        if (book.user_email === user?.email) {
            return toast.error('Oops! You can’t upvote your own added book!')
        }

        axios.patch(`https://books-leaf-server.vercel.app/upvote/${book._id}`)
            .then(res => {
                if (res.data.modifiedCount) {
                    setUpvoteCount(upvoteCount + 1)
                }
            })
    }

    const myReview = reviews?.find(item => item.user_email === user?.email);

    const handleReadingStatus = e => {

        const newStatus = {
            status: e.target.value
        }

        // update status in database
        axios.patch(`https://books-leaf-server.vercel.app/books/${book._id}`, newStatus)
            .then(res => {
                if (res.data.modifiedCount) {
                    toast.success('Reading Status Updated Successfully')
                    setCurrentStatus(newStatus.status)
                }
            })
    }

    if (loading) {
        return <Loading />
    }

    return (
        <div className='my-20'>
            <Helmet>
                <title>Book Details</title>
            </Helmet>
            <div className='flex flex-col lg:flex-row gap-20 py-10 max-w-screen-xl mx-auto px-4 lg:px-0'>
                <div>
                    <div className='relative border-10 h-[300px] w-[200px] md:h-[600px] md:w-[450px] border-secondary p-6'>
                        <img style={{ boxShadow: 'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px' }} className='h-full w-full absolute z-40 -top-10 right-12' src={book.cover_photo} alt="" />
                    </div>
                </div>
                <div className='flex flex-col gap-10 px-4 md:px-0'>
                    <div>
                        <div>
                            <h1 className='cormorant text-3xl md:text-5xl font-bold text-primary'>{book.book_title}</h1>
                            <p className='text-xl md:text-2xl text-secondary mt-2'>By {book.book_author}</p>
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
                            {
                                !upvoteCount ?
                                    <p className='text-gray-500'>no upvotes</p>
                                    :
                                    <p className='text-gray-500'>{upvoteCount}</p>
                            }
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
                            {
                                !currentStatus ?
                                    <span className="loading loading-bars loading-xs"></span>
                                    :
                                    <p className="text-success capitalize">{currentStatus}</p>
                            }
                        </div>
                    </div>
                    <div className='flex items-center gap-5'>
                        <button onClick={handleUpvote} className="relative inline-flex items-center justify-center w-5/12 py-4 overflow-hidden text-lg tracking-tighter text-black border border-secondary group">
                            <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-secondary  group-hover:w-full group-hover:h-full"></span>

                            <span className="relative font-medium">UPVOTE</span>
                        </button>

                        {
                            book.user_email === user?.email &&
                            <div className='text-center flex flex-col'>
                                <span className='mb-2'>update status:</span>
                                <select defaultValue={book.reading_status} onChange={handleReadingStatus} className='border border-success  py-2 px-4 rounded' name="" >
                                    <option value="read">Read</option>
                                    <option value="reading">Reading</option>
                                    <option value="want-to-read">Want to Read</option>
                                </select>
                            </div>
                        }
                    </div>
                </div>
            </div>

            <div className='max-w-screen-xl mx-auto my-20 px-4 lg:px-0'>
                <h2 className="cormorant font-black text-black text-center text-2xl md:text-4xl leading-none  max-w-2xl mx-auto mb-12">What Readers
                    Are Saying</h2>
                {
                    reviews?.length === 0 ?
                        <div className='flex items-center gap-1 justify-center  text-error'>
                            <p className='text-center'>No reviews yet!! Give a review </p>
                            <span><GoArrowDown /></span>
                        </div>
                        :
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 '>
                            {/* <ReviewsCard /> */}
                            {
                                reviews?.map(rev => <ReviewsCard key={rev._id} reviewData={rev} />)
                            }
                        </div>
                }
            </div>

            <div className='min-h-screen bg-primary flex items-center justify-center p-6 '>
                {
                    myReview ?
                        <div className='w-xl'>
                            <h1 className='text-center mb-10 text-3xl text-secondary'>My Posted Reviews</h1>
                            <MyReviewCard reviewData={myReview} reviews={reviews} setReviews={setReviews} />
                        </div>
                        :
                        <ReviewForm bookId={book._id} setReviews={setReviews} postedUser={book.user_email} myReview={myReview} />
                }
            </div>
        </div>
    );
};

export default BookDetails;