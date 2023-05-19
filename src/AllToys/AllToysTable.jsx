import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';

const AllToysTable = ({ toy }) => {
    // console.log(toy);
    const {user} = useContext(AuthContext)
    
    const { _id, sellerName, name, subCategory, quantity, price, } = toy

    const handleView =()=>{
        if (!user) {
            Swal.fire(
                'login first!!',
                '“You have to log in first to view details” ',
              )
        }
    }
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
            <Link onClick={handleView} className='hover:border-2 border-blue-500 p-2 rounded-lg' to={`/singleToyDetail/${_id}`}>View Detail</Link>
            </td>
        </tr>
        
       
    </tbody>
    );
};

export default AllToysTable;