import React, { Suspense, useState } from 'react';
import BookshelfPage from './BookshelfPage';
import Loading from '../Loading/Loading';
import { AuthContext } from '../../provider/AuthContext';
import { useLoaderData } from 'react-router';

const allCategoriesPromise = fetch('/category.json').then(res=>res.json());

const Bookshelf = () => {
    const booksData = useLoaderData();
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');


    

    const books = booksData.filter(book => {
        const searchResult = book.book_title.toLowerCase().includes(searchTerm.toLowerCase()) || book.book_author.toLowerCase().includes(searchTerm.toLowerCase());
        const categoryResult = book.book_category.toLowerCase() === selectedCategory.toLowerCase();

        if (selectedCategory==="All") {
            return searchResult;
        }
        return searchResult && categoryResult;
    }
    )

    return (
        <Suspense fallback={<Loading />}>
            <BookshelfPage books={books} setSearchTerm={setSearchTerm} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} allCategoriesPromise={allCategoriesPromise} />
        </Suspense>
    );
};

export default Bookshelf;