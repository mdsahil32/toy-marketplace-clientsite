import React from 'react';
import img from '../../../public/img/3020.jpg'
const ExtraSection = () => {
    return (

        <div className='md:mx-36 px-4 mt-40'>
            <h1 className='text-4xl font-semibold text-center mb-8'>Read About Toys</h1>
            <div className='grid md:grid-cols-2 '>
                <div>
                    Hero toys are popular playthings that captivate the imaginations of children and even some adults. These toys are often based on characters from various forms of media, such as movies, comic books, and animated series, and they allow individuals to recreate thrilling adventures and epic battles in their own homes.
                    Hero toys not only provide entertainment and play value but also offer educational benefits. They encourage storytelling, imagination, and creativity, allowing children to develop cognitive and social skills. Role-playing with hero toys can foster empathy, problem-solving, and collaboration as kids navigate imaginary worlds and create their own narratives.
                </div>
                <div>
                    <img className='h-full w-96' src={img} alt="" />
                </div>
            </div>
        </div>
    );
};

export default ExtraSection;