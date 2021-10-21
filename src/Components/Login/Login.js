import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useFirebase from '../Hooks/useFirebase';
import './Login.css'

const Login = () => {

    const { signInUsingGoogle } = useFirebase();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';
    console.log('came from', location.state?.from);


    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
    }

    return (
        <div className="login-form mt-5">
            <div className="mt-5">
                <h2>Login</h2>
                <form >

                    <div className="row mb-3">
                        <label for="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                        <div className="col-sm-10">
                            <input type="email" className="form-control" id="inputEmail3" required placeholder="Enter your email" />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label for="inputPassword3" className="col-sm-2 col-form-label">Pass</label>
                        <div className="col-sm-10">
                            <input type="password" className="form-control" id="inputPassword3" required placeholder="Enter your password" />
                        </div>
                    </div>


                    <button type="submit" className="btn btn-primary">Log in</button>


                </form>
                <p>New here? <Link to="/register">Create account</Link> </p>
                <div>    or     </div>
                <p>Sign in with Google</p>

                <button onClick={handleGoogleLogin} type="button" class="btn btn-outline-dark">Sign in</button>

            </div>
        </div>
    );
};

export default Login;