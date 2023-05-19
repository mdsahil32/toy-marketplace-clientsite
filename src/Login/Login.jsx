import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import googleImg from '../assets/google.png'

const Login = () => {
    const navigate = useNavigate()
    const [error, setError] = useState()
    const { signIn, signInWithGoogle } = useContext(AuthContext)
    const location = useLocation()
    const from = location.state?.from?.pathname ||  '/'
    const handleLogin = e => {
        e.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // eslint-disable-next-line no-unused-vars
        const user = { email, password }
        // console.log(user);

        signIn(email, password)
        .then(result =>{
            const logged = result.user;
            console.log(logged);
            navigate(from, {replace: true})
        })
        .catch(error => {
            setError(error.message);
        })
    }
    const handleGoogle = () =>{
        signInWithGoogle()
        .then(result =>{
            const logged = result.user;
            console.log(logged);
            navigate(from, {replace: true})
        })
        .catch(error => {
            console.log(error);
        })
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col ">
                <div className="text-center ">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <form onSubmit={handleLogin} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
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
                                <p>you are new to here? <Link className="text-blue-500" to='/register'>Register now</Link></p>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <p className="text-red-500">{error}</p>
                    </div>
                    <img className="w-1/4 ms-8 pb-6 link" onClick={handleGoogle} src={googleImg} alt="" />
                </form>
                
            </div>
        </div>
    );
};

export default Login;