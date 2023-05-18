import { data } from 'autoprefixer';
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ToyDetail = () => {
    const singleToy = useLoaderData()
    console.log(singleToy);
    const { _id, sellerName, name, subCategory, quantity, price, url, rating, sellerEmail, detail } = singleToy

    return (
        <>
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
        </>
    );
};

export default ToyDetail;