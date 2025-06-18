import React from 'react';
import useAxiosSecure from './useAxiosSecure';

const useBookDetailsPromise = () => {
    const myAxiosInstance = useAxiosSecure();

    const bookDetailsAPI = id => {
        return myAxiosInstance.get(`/books/${id}`)
            .then(res => res.data)
    }
    return bookDetailsAPI;
};

export default useBookDetailsPromise;