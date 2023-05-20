import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyToysTable = ({ toy , toys, setToys}) => {

    // console.log(toys);
    const { _id, sellerName, name, subCategory, quantity, price, } = toy

    const handleDelete = _id =>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          })
       .then((result) =>{
        if (result.isConfirmed) {
            fetch(`https://hero-toys-server-site.vercel.app/addToy/${_id}`,{
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data =>{
                // console.log(data);
                if (data.deletedCount > 0) {
                    Swal.fire(
                        'Deleted!',
                        'Your Toy has been deleted.',
                        'success'
                      )
                      const remaining = toys.filter(toy => toy._id !== _id)
                      setToys(remaining);
                }
            })

        }

       })
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
                    <Link className='hover:border-2 border-blue-500 p-2 rounded-lg' to={`/singleToyDetail/${_id}`}>View Detail</Link>
                </td>
                <td>
                    <Link className='hover:border-2 border-gray-600 p-2 rounded-md' to={`/updateToy/${_id}`}>Update</Link>
                </td>
                <td className='btn p-1 text-black  bg-slate-100' onClick={()=>handleDelete(_id)} >delete</td>
            </tr>


        </tbody>
    );
};

export default MyToysTable;