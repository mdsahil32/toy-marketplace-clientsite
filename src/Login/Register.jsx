import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {
    const { createUser }= useContext(AuthContext)
    const [error, setError] = useState()
    const handleRegister = e => {
        e.preventDefault()
        const form = event.target;
        const name = form.name.value
        const url = form.url.value
        const email = form.email.value;
        const password = form.password.value;
        const user = { name, url, email, password }
        console.log(user);

        createUser(email, password)
        .then(result => {
            const logged = result.user
            console.log(logged);
            Swal.fire(
                'Good job!',
                'Register Successfully',
                'success'
              )
        })
        .catch(error =>{
            setError(error.message);
        })
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col ">
                <div className="text-center ">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                </div>
                <form onSubmit={handleRegister} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo Url</span>
                            </label>
                            <input type="text" name="url" placeholder="photo url" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <p>Already have an account? <Link className="text-blue-500" to='/login'>login now</Link></p>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                        <p className="text-red-500">{error}</p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;