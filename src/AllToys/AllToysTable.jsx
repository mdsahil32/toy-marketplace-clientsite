import React from 'react';

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
        </tr>
        
       
    </tbody>
    );
};

export default AllToysTable;