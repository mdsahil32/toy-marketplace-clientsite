import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import AllToysTable from './AllToysTable';

const AllToys = () => {
    const toys = useLoaderData()
    const [searchText, setSearchText] = useState('')
    const [toy, setToy] = useState(toys)
   
    const handleSearch = () =>{
        fetch(`http://localhost:5000/toySearchByName/${searchText}`)
        .then(res => res.json())
        .then(data => {
          setToy(data);
        })
    }

    return (
        <div>
            <h1 className='text-3xl font-semibold text-center my-3'>All Toys Are Here!!</h1>
            <div className='text-center my-4'>
                <input onChange={(e) => setSearchText(e.target.value)} type="text" className='border-2 border-black h-10 rounded mr-1 ps-2 pl' placeholder='toy name' />
                <button onClick={handleSearch} className='bg-blue-800 hover:bg-blue-950 text-white p-2 rounded-md'>Search</button>
            </div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head*/}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Toy Name</th>
                            <th>sub Category</th>
                            <th>quantity</th>
                            <th>price</th>
                            <th>seller Name</th>
                            <th>See Details</th>
                        </tr>
                    </thead>
                    {
                        toy.map(toy => <AllToysTable
                            key={toy._id}
                            toy={toy}
                        ></AllToysTable>)
                    }
                </table>
            </div>

        </div>
    );
};

export default AllToys;