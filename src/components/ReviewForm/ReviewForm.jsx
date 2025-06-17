import React from 'react';
import { use } from 'react';
import { AuthContext } from '../../provider/AuthContext';
import axios from 'axios';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';

const ReviewForm = ({ bookId, setReviews, postedUser, myReview }) => {

    const { user } = use(AuthContext);

    const handleSubmitReview = e => {
        e.preventDefault();

        const form = new FormData(e.target);
        const data = Object.fromEntries(form.entries());

        const date = new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })

        const review = {
            book_id: bookId,
            user_email: user?.email,
            date,
            user_name: user?.displayName,
            ...data
        }

        if (postedUser===user?.email) {
            return toast.error('Oops! You can’t review a book you added!')
        }

        if (myReview?.user_email === user?.email) {
            return toast.error('You’ve already submitted a review for this item!')
        }

        // store review to database

        axios.post('https://books-leaf-server.vercel.app/reviews', review)
            .then(res => {
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Review Submitted Successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    axios.get(`https://books-leaf-server.vercel.app/reviews/${bookId}`)
                        .then(res => {
                            setReviews(res.data)
                        })

                    e.target.reset();
                }
            })
    }

    return (
            < form onSubmit={handleSubmitReview} className="bg-gray-50 text-gray-900 p-8 rounded-2xl shadow-2xl max-w-xl w-full space-y-6 backdrop-blur-md">

                <h2 className="text-3xl font-bold text-center ">Write a Review</h2>
                <div className="text-center text-gray-400 text-xl mb-4">
                    <textarea name="review" rows="4" required className="w-full p-4 text-xl   placeholder-gray-400 text-black rounded-lg border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none" placeholder="Write your thoughts..."></textarea>
                </div>
                <div className="text-center">
                    <button type="submit" className=" w-full bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:from-indigo-600 hover:to-pink-600 transition-all duration-300">
                        Submit Review
                    </button>
                </div>
            </form>
    );
};

export default ReviewForm;