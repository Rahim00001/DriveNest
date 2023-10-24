import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Login = () => {
    const { signInUser, googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const [loginError, setLoginError] = useState('');
    const [success, setSuccess] = useState('');

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        setLoginError('');
        setSuccess('');

        signInUser(email, password)
            .then(result => {
                console.log(result.user);
                form.reset();
                navigate('/');
            })
            .catch(error => {
                console.error(error);
                setLoginError(error.message);
            })
    }

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.error(error);
            })
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Please Login!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
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
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <p>New Here? <Link to='/register'>Register</Link></p>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary mb-3">Login</button>
                            <button onClick={handleGoogleSignIn} className="btn btn-outline btn-accent">Login With Google</button>
                        </div>
                        {
                            loginError && <p className="text-red-600">{loginError}</p>
                        }
                        {
                            success && <p className="text-green-600">{success}</p>
                        }
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;