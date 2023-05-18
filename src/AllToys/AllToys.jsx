import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllToysTable from './AllToysTable';

const AllToys = () => {
    const toys = useLoaderData()
    console.log(toys);
    return (
        <div>
            <h1>this is all toysss</h1>
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
                        </tr>
                    </thead>
                    {
                        toys.map(toy => <AllToysTable
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