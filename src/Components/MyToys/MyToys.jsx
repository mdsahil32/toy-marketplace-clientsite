import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import MyToysTable from "./MyToysTable";
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";

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
        <>
        <Header></Header>
        <div>
        <h1 className='text-3xl font-semibold text-center my-3'>My Toys Are Here!!</h1>
      
        <div className="overflow-x-auto ">
            <table className="table w-full ">
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
                        <th>Update Data</th>
                        <th></th>
                    </tr>
                </thead>
                    {
                        toys.map(toy => <MyToysTable
                        key={toy._id}
                        toy={toy}
                        toys={toys}
                        setToys={setToys}
                        ></MyToysTable>)
                    }
            </table>
        </div>

    </div>

    <Footer></Footer>
    </>
    );
};

export default MyToys;