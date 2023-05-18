import React from 'react';
import { Link } from 'react-router-dom';

const AllToysTable = ({ toy }) => {
    console.log(toy);
    const { _id, sellerName, name, subCategory, quantity, price, } = toy
    return (
        <tbody>
        {/* row 1 */}
        <tr>
            <th></th>
            <td>{name}</td>
            <td>{subCategory}</td>
            <td>{quantity}</td>
            <td>{price}</td>
            <td>{sellerName}</td>
            <td>
            <Link className='hover:border-2 border-blue-500 p-2 rounded-lg' to={`/singleToyDetail/${_id}`}>View Detail</Link>
            </td>
        </tr>
        
       
    </tbody>
    );
};

export default AllToysTable;