import React, { Suspense, useState } from 'react';
import BookshelfPage from './BookshelfPage';
import Loading from '../Loading/Loading';
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from '../../Hooks/useAxiosSecure'
import axios from 'axios';
import ErrorPage from '../../Error/ErrorPage';

const allCategoriesPromise = fetch('/category.json').then(res => res.json());

const Bookshelf = () => {
    const axiosSecure = useAxiosSecure()
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [sortOption, setSortOption] = useState('');
    console.log(sortOption)

    const { data: books = [], isLoading, isError } = useQuery({
        queryKey: ["books", searchTerm, selectedCategory, sortOption],
        queryFn: async () => {
            const res = await axios.get("http://localhost:3000/books", {
                params: {
                    search: searchTerm,
                    category: selectedCategory,
                    sort: sortOption
                }
            });
            return res.data;
        },
        keepPreviousData: true
    });

    if (isError) {
        return <ErrorPage />
    }

    return (
        <Suspense fallback={<Loading />}>
            <div className='min-h-dvh'>
                <BookshelfPage books={books} setSearchTerm={setSearchTerm} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} allCategoriesPromise={allCategoriesPromise} isLoading={isLoading} setSortOption={setSortOption} sortOption={sortOption} />
            </div>
        </Suspense>
    );
};

export default Bookshelf;