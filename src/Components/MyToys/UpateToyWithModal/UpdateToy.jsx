import React from 'react';
import Footer from '../../../Shared/Footer/Footer';
import Header from '../../../Shared/Header/Header';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateToy = () => {
    const toyData= useLoaderData()
    // console.log('toy',toyData);
    const { _id } = toyData

    const handleUpdate = event =>{
        event.preventDefault()
        const form =event.target;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const detail = form.detail.value;
        const update = {price, quantity, detail}
        console.log(update); 
        fetch(`https://hero-toys-server-site.vercel.app/addToy/${_id}`,{
            method: 'PUT',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(update)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if (data.modifiedCount > 0) {
                Swal.fire({
                    title: 'Success!',
                    text: 'Update Toy Data Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
    }

    return (
        <>
        <Header></Header>
        <div className="hero min-h-screen ">
            <div className="hero-content flex-col">
                <div className="text-center ">
                    <h1 className="text-5xl font-bold">Update To Toy?</h1>

                </div>
                <form onSubmit={handleUpdate} className="card w-full  ">
                    <div className="card-body grid grid-cols-2">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="text" name="price" placeholder="Price" className="input input-bordered w-80" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Available quantity </span>
                            </label>
                            <input type="text" name="quantity" placeholder="Available quantity" className="input input-bordered" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Detail description
                                </span>
                            </label>
                            <input type="text" name="detail" placeholder="Detail description" className="input input-bordered" />
                        </div>
                        <br />
                        <div className="form-control mt-6">
                            <button  className="btn btn-error w-90 ">Update</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>

        <Footer></Footer>
        </>
    );
};

export default UpdateToy;