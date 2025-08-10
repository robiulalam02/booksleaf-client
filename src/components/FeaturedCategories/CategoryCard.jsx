import React from 'react';
import { Fade } from 'react-awesome-reveal';

const CategoryCard = ({ category, categoryCount }) => {
    return (
        <>
            <Fade
                delay={200}
                duration={1000}
                fraction={0.5}
                triggerOnce
            >
                <div className='border-2 border-secondary/80 rounded-xl flex flex-col items-center p-5 gap-2 hover:-translate-y-1 cursor-pointer transition ease-in-out duration-300 hover:border-secondary'>
                    <img className='w-14 ' src={category.image} alt="" />
                    <h3>{category.name}</h3>
                    <p>
                        {
                            categoryCount[category.name.toLowerCase()] < 10 ? `0${categoryCount[category.name.toLowerCase()]}` : categoryCount[category.name.toLowerCase()]
                        }
                    </p>
                </div>
            </Fade>
        </>
    );
};

export default CategoryCard;