import Swal from "sweetalert2";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useContext } from "react";

const AddToys = () => {
    const {user } = useContext(AuthContext)
    console.log(user);
    const handleSubmit = e =>{
        e.preventDefault()
        const form =e.target;
        const url = form.url.value;
        const name = form.name.value;
        const sellerName = form.sellerName.value;
        const sellerEmail = form.sellerEmail.value;
        const subCategory = form.subCategory.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const detail = form.detail.value;
        const AddToy = {url, name, sellerEmail, sellerName, subCategory, price, rating, quantity, detail}
        // console.log(AddToy);
        fetch('http://localhost:5000/addToy',{
            method:'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(AddToy)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if (data.insertedId) {
                Swal.fire(
                    'Good job!',
                    'Added Toy Successfully',
                    'success'
                  )
            }
        })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center ">
                    <h1 className="text-5xl font-bold">Add Toys!</h1>

                </div>
                <form onSubmit={handleSubmit} className="card  w-full  ">
                    <div className="card-body grid grid-cols-3 ">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Picture URL</span>
                            </label>
                            <input type="text" name="url" placeholder="Picture URL" className="input input-bordered w-80" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Toy Name</span>
                            </label>
                            <input  type="text" name="name" placeholder="Name" className="input input-bordered " />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">seller name</span>
                            </label>
                            <input defaultValue={user?.displayName} type="text" name="sellerName" placeholder="seller name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">seller email</span>
                            </label>
                            <input defaultValue={user?.email} type="email" name="sellerEmail" placeholder="seller email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Sub-category</span>
                            </label>
                            <input type="text" name="subCategory" placeholder="Sub-category" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="text" name="price" placeholder="Price" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <input type="text" name="rating" placeholder="Rating" className="input input-bordered" />
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
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddToys;