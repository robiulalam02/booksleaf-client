import React from 'react';
import BooksCard from '../PopularBooks/BooksCard';
import Loading from '../Loading/Loading';

const BookshelfPage = ({ books, setSearchTerm, selectedCategory, setSelectedCategory }) => {

    const handleSearch = e => {
        e.preventDefault();

        const search = e.target.search.value;

        setSearchTerm(search);
    }

    return (
        <div className='max-w-screen-xl mx-auto mt-10 mb-20'>
            <div className='mb-20 text-center'>
                <h1 className='cormorant text-4xl font-medium'>Your Digital BookShelf</h1>
            </div>
            <div>
                <div className='flex items-center justify-between'>
                    <h1>Total Books: {books.length}</h1>


                    <div className='w-6/12'>
                        <form onSubmit={handleSearch} className="w-full">
                            <div className="flex">

                                <select value={selectedCategory} onChange={e=> setSelectedCategory(e.target.value)} className='shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600' name="" id="">
                                    <option value="All">All Category</option>
                                    <option value="fiction">Fiction</option>
                                    <option value="nonfiction">Non-Fiction</option>
                                    <option value="fantasy">Fantasy</option>
                                </select>

                                <div className="relative w-full">
                                    <input onChange={e=>setSearchTerm(e.target.value)} type="search" className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder="Search Your Favourite Books or Writer..." required name='search' />
                                    <button type="submit" className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>

                </div>

                <div className='grid grid-cols-4 gap-5 mt-20'>
                    {
                        books?.map(book => <BooksCard key={book._id} book={book} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default BookshelfPage;