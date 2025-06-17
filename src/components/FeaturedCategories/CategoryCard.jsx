import React from 'react';

const CategoryCard = ({ category, categoryCount }) => {
    console.log(categoryCount);
    return (
        <>
            <div className='border-2 border-secondary rounded-xl flex flex-col items-center p-5 gap-2'>
                <img className='w-14 ' src={category.image} alt="" />
                <h3>{category.name}</h3>
                <p>
                    {
                        categoryCount[category.name.toLowerCase()] < 10 ? `0${categoryCount[category.name.toLowerCase()]}` : categoryCount[category.name.toLowerCase()]
                    }
                </p>
            </div>
            {/* <div className='border-2 border-secondary rounded-xl flex flex-col items-center p-5 gap-2'>
                <img className='w-14' src="/assets/fantasy.png" alt="" />
                <h3>Fantasy</h3>
                <p>Available Books: 0{categories.fantasy}</p>
            </div>
            <div className='border-2 border-secondary rounded-xl flex flex-col items-center p-5 gap-2'>
                <img className='w-14' src="/assets/non-fiction.png" alt="" />
                <h3>Non-Fiction</h3>
                <p>Available Books: 0{categories.nonfiction}</p>
            </div>
            <div className='border-2 border-secondary rounded-xl flex flex-col items-center p-5 gap-2'>
                <img className='w-14' src="/assets/history.png" alt="" />
                <h3>History</h3>
                <p>Available Books: 0{categories.history}</p>
            </div>
            <div className='border-2 border-secondary rounded-xl flex flex-col items-center p-5 gap-2'>
                <img className='w-14' src="/assets/thriller.png" alt="" />
                <h3>Thriller</h3>
                <p>Available Books: 00</p>
            </div>
            <div className='border-2 border-secondary rounded-xl flex flex-col items-center p-5 gap-2'>
                <img className='w-14' src="/assets/science.png" alt="" />
                <h3>Science</h3>
                <p>Available Books: 00</p>
            </div>
            <div className='border-2 border-secondary rounded-xl flex flex-col items-center p-5 gap-2'>
                <img className='w-14' src="/assets/business.png" alt="" />
                <h3>Business</h3>
                <p>Available Books: 00</p>
            </div>
            <div className='border-2 border-secondary rounded-xl flex flex-col items-center p-5 gap-2'>
                <img className='w-14' src="/assets/philosophy.png" alt="" />
                <h3>Philosophy</h3>
                <p>Available Books: 00</p>
            </div> */}
        </>
    );
};

export default CategoryCard;