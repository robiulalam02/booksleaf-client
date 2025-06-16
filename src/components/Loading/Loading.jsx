import React from 'react';
import {MutatingDots} from "react-loader-spinner";

const Loading = () => {
    return (
        <div className='flex justify-center h-dvh items-center'>
            <MutatingDots color='#1b3764' secondaryColor="#f4ca40" />
        </div>
    );
};
    
export default Loading;