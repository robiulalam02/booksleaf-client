import axios from 'axios';
import React, { useState } from 'react'
import { toast } from 'react-toastify';

const Contact = () => {
    const [isLoading, setIsLoading] = useState(false);
    const handleContact = async (e) => {
        e.preventDefault();

        const form = new FormData(e.target)
        const data = Object.fromEntries(form.entries());
        console.log(data);

        try {
            setIsLoading(true);
            const res = await axios.post('http://localhost:3000/contact', data)
            console.log(res)
            if (res.data.message) {
                toast.success('Your message has been sent. We will reach you soon!');
                e.target.reset();
            }
        } catch (error) {
            setIsLoading(false);
            console.log(error)
        } finally{
            setIsLoading(false);
        }
    }
    return (
        <div className='min-h-dvh bg-primary'>
            <div className='max-w-screen-xl mx-auto py-20 flex items-center text-white'>
                <div className='w-6/12 flex flex-col gap-5'>
                    <h1 className='text-7xl font-extrabold cormorant'>Reach Out to Us Right Away</h1>
                    <p>Connect now for swift assistance and discover the benefits of reaching out to us immediately for personalized solutions and support.</p>

                    <div className='flex flex-col gap-3'>
                        <div className='flex items-center gap-2'>
                            <img className='w-14' src="/assets/email.png" alt="" />
                            <div>
                                <h3 className='text-2xl font-bold cormorant'>Suppor Email</h3>
                                <p>contact@booksleaf.com</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-2'>
                            <img className='w-14' src="/assets/call.png" alt="" />
                            <div>
                                <h3 className='text-2xl font-bold cormorant'>24/7 Hotline</h3>
                                <p>+88-01758-166935</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-6/12'>
                    <form
                        onSubmit={handleContact}
                        className="w-full p-6 font-sans flex flex-col space-y-4"
                    >
                        <input
                            type="text"
                            name="name"
                            // value={form.name}
                            // onChange={handleChange}
                            placeholder="Your Name"
                            required
                            className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-base"
                        />
                        <input
                            type="email"
                            name="email"
                            // value={form.email}
                            // onChange={handleChange}
                            placeholder="Your Email"
                            required
                            className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-base"
                        />
                        <textarea
                            name="message"
                            // value={form.message}
                            // onChange={handleChange}
                            placeholder="Your Message"
                            required
                            rows={5}
                            className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-base resize-y"
                        />
                        <button
                            type="submit"
                            className="bg-blue-600 text-white font-semibold h-12 rounded-md hover:bg-blue-700 transition-colors"
                        >
                            {
                                isLoading ?
                                <span className="loading loading-spinner"></span>
                                :
                                'Send Message'
                            }
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
