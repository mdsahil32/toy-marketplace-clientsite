import { data } from 'autoprefixer';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import img1 from '../../public/img/fun-gaulois-3d-illustration.jpg'
import img2 from '../../public/img/robot-holding-key.jpg'
const ToyDetail = () => {
    const singleToy = useLoaderData()
    console.log(singleToy);
    const { _id, sellerName, name, subCategory, quantity, price, url, rating, sellerEmail, detail } = singleToy

    return (
        <>
            {/* single toy details */}
            <h1 className='text-5xl font-bold text-center'>Single Toy</h1>
            <div className="card lg:card-side bg-base-100 shadow-xl mx-12 my-4">

                <figure><img className='w-80' src={url} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <div>
                        <p>Price: {price}</p>
                        <p>Sub_Category: {subCategory}</p>
                        <p>Quantity: {quantity}</p>
                        <p>Rating:{rating}</p>
                        <p>{detail}</p>
                    </div>
                    <div>
                        <p>Seller Name: {sellerName}</p>
                        <p>Seller email: {sellerEmail}</p>
                    </div>
                </div>
            </div>
            {/*  */}
            <h1 className='text-3xl text-center font-semibold mt-14'>Check My Extra Toy</h1>
            <div className='grid grid-cols-2 mx-24 gap-5 mt-8'>
                <div className="card w-full border-2  bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Gaulois</h2>
                        <p>{detail}</p>
                    </div>
                    <figure><img className='h-80' src={img1} alt="Shoes" /></figure>
                </div>
                {/*  */}
                <div className="card w-full border-2 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Robot-holding</h2>
                        <p>{detail}</p>
                    </div>
                    <figure><img className='h-80' src={img2} alt="Shoes" /></figure>
                </div>
            </div>
        </>
    );
};

export default ToyDetail;