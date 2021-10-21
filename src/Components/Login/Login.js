import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../Hooks/useFirebase';
import './Login.css'

const Login = () => {

    const { user, signInUsingGoogle } = useFirebase();

    return (
        <div className="login-form mt-5">
            <div className="mt-5">
                <h2>Login</h2>
                <form onSubmit="">
                    <label htmlFor="inputEmail3">Email : </label>
                    <input type="email" name="" id="" placeholder="enter your email" />
                    <br />
                    <label htmlFor="inputPassword3">Password : </label>
                    <input type="password" name="" id="" placeholder="password" />
                    <br />
                    <input type="submit" value="submit" />
                </form>
                <p>New here? <Link to="/register">Create account</Link> </p>
                <div>    or     </div>
                <p>sign in with Google</p>
                <button
                    className="btn-regular"
                    onClick={signInUsingGoogle}
                >Google Sign In</button>
            </div>
        </div>
    );
};

export default Login;