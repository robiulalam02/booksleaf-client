import React, { useState } from 'react';
import { BiSolidEdit } from 'react-icons/bi';
import { FaQuoteLeft } from 'react-icons/fa';
import { AiTwotoneDelete } from "react-icons/ai";
import { MdDelete } from 'react-icons/md';
import axios from 'axios';
import { toast } from 'react-toastify';

const MyReviewCard = ({ reviewData, reviews, setReviews }) => {
    console.log(reviewData);
    const { _id, user_name, review, date } = reviewData;
    const [showModal, setShowModal] = useState(false);

    const handleSubmitReview = e => {
        e.preventDefault();

        const form = new FormData(e.target);
        const data = Object.fromEntries(form.entries());

        const {review} = data;

        const date = new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })

        const updatedReview = {
            review,
            date
        }

        console.log(updatedReview);

        // update in mongo db

        axios.patch(`http://localhost:3000/reviews/${_id}`, updatedReview)
        .then(res=> {
            if (res.data.modifiedCount) {
                toast.success('review successfully updated')
                
                setReviews(reviews.map(item=> 
                    item._id===_id ? {...item, review: review, date: date} : item
                ));

                setShowModal(false)
            }
        })


    }


    return (

        <>
            {
                showModal ?
                    < form onSubmit={handleSubmitReview} class="bg-gray-50 text-gray-900 p-8 rounded-2xl shadow-2xl w-full space-y-6 backdrop-blur-md">

                        <h2 class="text-2xl font-bold text-center">Update Review</h2>
                        <div class="text-center text-gray-400 text-xl mb-4">
                            <textarea defaultValue={review} name="review" rows="4" required class="w-full p-4 text-md placeholder-gray-400 text-black rounded-lg border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none" placeholder="Write your thoughts..."></textarea>
                        </div>
                        <div class="text-center">
                            <button type="submit" class=" w-full bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:from-indigo-600 hover:to-pink-600 transition-all duration-300">
                                Submit Review
                            </button>
                        </div>
                    </form>
                    :
                    <div className='shadow-2xl p-10 flex flex-col justify-between max-w-xl mx-auto gap-5 rounded-md bg-gray-50'>
                        <span className='flex items-center justify-between'>
                            <FaQuoteLeft color='#1b3764' size={25} />
                            <span className='text-sm'>{date}</span>
                        </span>
                        <p className='break-words text-lg font-light italic'>{review}</p>

                        <div className='flex items-center justify-between'>
                            <h3 className=''>{user_name}</h3>

                            <div className='flex items-center gap-2'>
                                <button onClick={() => setShowModal(true)}><BiSolidEdit /></button>
                                <button className='text-rose-600'><MdDelete /></button>
                            </div>
                        </div>
                    </div>
            }
        </>
    );
};

export default MyReviewCard;