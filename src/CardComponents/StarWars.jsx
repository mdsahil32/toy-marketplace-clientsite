import React from 'react';
import { Link } from 'react-router-dom';

const StarWars = ({starWar}) => {
    const {id, name , number, picture, price, rating} = starWar;
    return (
        <div className="card w-full bg-base-100 border-4 shadow-xl">
            <figure className="px-10 pt-10">
                <img  src={picture} alt="Shoes" className="rounded-xl h-80" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>Price: ${price}</p>
                <p>Rating: {rating}</p>
                <div className="card-actions">
                <Link to={`/toysDetails/${number}`}>
                    <button  className="btn btn-primary">view details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default StarWars;