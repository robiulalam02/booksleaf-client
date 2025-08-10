import React, { useState } from 'react';
import BooksCard from '../PopularBooks/BooksCard';
import Loading from '../Loading/Loading';
import { use } from 'react';
import { CiFilter } from "react-icons/ci";
import { Helmet } from 'react-helmet-async';

const BookshelfPage = ({ books, setSearchTerm, selectedCategory, setSelectedCategory, allCategoriesPromise, isLoading, setSortOption, sortOption }) => {

    const allCategories = use(allCategoriesPromise);
    const [showFilter, setShowFilter] = useState(false);

    const handleSearch = e => {
        e.preventDefault();

        const search = e.target.search.value;

        setSearchTerm(search);
    }

    return (
        <div className='max-w-screen-xl mx-auto mt-10 mb-20 px-4 sm:px-6'>
            <Helmet>
                <title>Bookshelf</title>
            </Helmet>
            <div className='mb-20 text-center'>
                <h1 className='cormorant text-4xl font-medium'>Your Digital BookShelf</h1>
            </div>
            <div>
                <div className='flex flex-col-reverse md:flex-row items-start md:items-center justify-between'>
                    <div className=''>
                        <h1 className='mt-5 md:mt-0'>Total Books Found: {books.length}</h1>
                        <button onClick={() => setShowFilter(!showFilter)} className='flex items-center bg-primary text-white py-1 px-2 rounded mt-5 md:hidden'>Filter <CiFilter className='text-2xl' /></button>
                    </div>


                    <div className='w-full md:w-8/12 lg:w-4/12'>
                        <form onSubmit={handleSearch} className="w-full">
                            <div className="relative w-full">
                                <input onChange={e => setSearchTerm(e.target.value)} type="search" className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-lg border-gray-300 border outline-0" placeholder="Search Books" required name='search' />
                                <button type="submit" className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                    </svg>
                                </button>
                            </div>
                        </form>
                    </div>

                </div>

                <div className="mt-10">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">

                        {/* Sidebar */}
                        <aside className={`
      col-span-1 md:col-span-3 
      border border-base-200 rounded p-4
      md:block md:sticky top-16
      bg-white
      md:self-start
      ${showFilter ? 'block' : 'hidden'}
      `}
                            style={{ maxHeight: 'calc(100vh - 4rem)', overflowY: 'auto' }} // sticky height and scroll on tall content
                        >
                            <h3 className="text-xl font-semibold text-center mb-4">Filter Books</h3>

                            <ul className="mb-6 space-y-2">
                                <li
                                    className={`px-3 py-2 cursor-pointer rounded hover:bg-base-200 ${selectedCategory === "All" ? "bg-base-200 font-semibold" : ""}`}
                                    onClick={() => setSelectedCategory("All")}
                                >
                                    All Category
                                </li>
                                {allCategories?.map(category => (
                                    <li
                                        key={category.id}
                                        className={`px-3 py-2 cursor-pointer rounded hover:bg-base-200 ${selectedCategory === category.name.toLowerCase() ? "bg-base-200 font-semibold" : ""}`}
                                        onClick={() => setSelectedCategory(category.name.toLowerCase())}
                                    >
                                        {category.name}
                                    </li>
                                ))}
                            </ul>

                            <div>
                                <label htmlFor="sort" className="block font-medium mb-1">Sort by Upvotes</label>
                                <select
                                    id="sort"
                                    value={sortOption}
                                    onChange={(e) => setSortOption(e.target.value)}
                                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                >
                                    <option value="">Default</option>
                                    <option value="top">Top Upvotes</option>
                                    <option value="lowest">Lowest Upvotes</option>
                                </select>
                            </div>
                        </aside>

                        {/* Books grid or loading */}
                        <main className="col-span-1 md:col-span-9">
                            {isLoading ? (
                                <div className="flex justify-center items-center h-full">
                                    <Loading />
                                </div>
                            ) : (
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {books?.map(book => (
                                        <BooksCard key={book._id} book={book} />
                                    ))}
                                </div>
                            )}
                        </main>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default BookshelfPage;