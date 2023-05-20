import { Link } from "react-router-dom";
import { AuthContext } from '../AuthProvider/AuthProvider';
import { useContext } from "react";
import Swal from "sweetalert2";
import Rating from "react-rating";
import { FaStar ,FaStarHalfAlt } from "react-icons/fa";

const Avengers = ({ avenger }) => {
    const { user } = useContext(AuthContext)

    // console.log(avenger);
    const { id, name, number, picture, price, rating } = avenger;

    const handleView = () => {
        if (!user) {
            Swal.fire(
                'login first!!',
                '“You have to log in first to view details” ',

            )
        }
    }

    return (
        <div className="card w-full bg-base-100 shadow-xl border-4">
            <figure className="px-10 pt-10">
                <img src={picture} alt="Shoes" className="rounded-xl h-80" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>Price: ${price}</p>
                <p>Rating: {rating} 
                    <Rating
                        placeholderRating={rating}
                        emptySymbol={<FaStarHalfAlt></FaStarHalfAlt>}
                        placeholderSymbol={<FaStar></FaStar>}
                        fullSymbol={<FaStar></FaStar>}
                        readonly
                    />
                </p>
                <div className="card-actions">
                    <Link to={`/toysDetails/${number}`}>
                        <button onClick={handleView} className="font-semibold underline hover:text-blue-500">view details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Avengers;