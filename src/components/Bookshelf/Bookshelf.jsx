import React, { Suspense, use, useEffect, useState } from 'react';
import BookshelfPage from './BookshelfPage';
import Loading from '../Loading/Loading';
import { AuthContext } from '../../provider/AuthContext';

const Bookshelf = () => {

    const [booksData, setBooksData] = useState([]);
    const { setLoading } = use(AuthContext);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
    console.log(selectedCategory);

    useEffect(() => {
        const fetchBooks = async () => {
            setLoading(true);
            try {
                const res = await fetch('http://localhost:3000/books');
                const data = await res.json();
                setBooksData(data);
            } catch (error) {
                console.error('Failed to fetch books:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchBooks();
    }, [setLoading])

    const books = booksData.filter(book => {
        const searchResult = book.book_title.toLowerCase().includes(searchTerm.toLowerCase()) || book.book_author.toLowerCase().includes(searchTerm.toLowerCase());
        const categoryResult = book.book_category.toLowerCase().includes(selectedCategory.toLowerCase());

        if (selectedCategory==="All") {
            return searchResult;
        }
        return searchResult && categoryResult;
    }
    )

    return (
        <Suspense fallback={<Loading />}>
            <BookshelfPage books={books} setSearchTerm={setSearchTerm} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        </Suspense>
    );
};

export default Bookshelf;