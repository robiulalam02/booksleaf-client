import React from 'react';
import {MutatingDots} from "react-loader-spinner";
import ThreeDotsWave from './ThreeDotsWave';

const Loading = () => {
    return (
        <div className='flex justify-center h-dvh items-center'>
            <ThreeDotsWave />
        </div>
    );
};
    
export default Loading;