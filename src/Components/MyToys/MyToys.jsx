import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import MyToysTable from "./MyToysTable";

const MyToys = () => {
    const {user} = useContext(AuthContext)
    const [toys, setToys] = useState([])
    
    // console.log(toys);

    useEffect(()=>{
        fetch(`http://localhost:5000/myToys/${user?.email}`)
        .then(res => res.json())
        .then(data => {
            setToys(data);
        })
    } ,[])
    return (
        <div>
        <h1 className='text-3xl font-semibold text-center my-3'>My Toys Are Here!!</h1>
        {/* <div className='text-center my-4'>
            <input onChange={(e) => setSearchText(e.target.value)} type="text" className='border-2 border-black h-10 rounded mr-1 ps-2 pl' placeholder='toy name' />
            <button onClick={handleSearch} className='bg-blue-800 hover:bg-blue-950 text-white p-2 rounded-md'>Search</button>
        </div> */}
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
                        <th></th>
                    </tr>
                </thead>
                    {
                        toys.map(toy => <MyToysTable
                        key={toy._id}
                        toy={toy}
                        ></MyToysTable>)
                    }
            </table>
        </div>

    </div>
    );
};

export default MyToys;