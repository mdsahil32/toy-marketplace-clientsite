import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const ToysDetails = () => {
    const data = useLoaderData()
    const {id, name , number, picture, price, rating} = data;
    return (
        <>
            {/* sub-category toy details  */}
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img className='w-full h-96' src={picture} />
                    <div>
                        <h1 className="text-5xl font-bold">{name}</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <p>Price: {price}</p>
                        <p>Rating: {rating}</p>
                       <Link to='/'> <button  className="btn mt-4">To Back</button></Link>
                    </div>
                </div>
            </div>

        </>
    );
};

export default ToysDetails;