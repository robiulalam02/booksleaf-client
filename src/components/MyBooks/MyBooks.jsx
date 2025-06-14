import React, { Suspense, use } from 'react';
import MyBooksContainer from './MyBooksContainer';
import { myBooksPromise } from '../../API/LoaderAPI';
import { AuthContext } from '../../provider/AuthContext';
import Loading from '../Loading/Loading';

const MyBooks = () => {
    const { user } = use(AuthContext)
    return (
        <div className='max-w-screen-xl h-dvh mx-auto mt-10 mb-20'>
            <div className='text-center'>
                <h1 className='cormorant text-3xl font-medium'>My Added Books</h1>
            </div>

            <Suspense fallback={<Loading/>}>
                <MyBooksContainer myBooksPromise={myBooksPromise(user?.email)} />
            </Suspense>
        </div>
    );
};

export default MyBooks;