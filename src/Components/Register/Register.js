import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css'

const Register = () => {
    return (
        <div className="mt-5 register-form">
            <div className="mt-5">
                <h2 className="mt-5">Create account</h2>
                <form onSubmit="">
                    <input type="email" name="" id="" placeholder="Your email" />
                    <br />
                    <input type="password" name="" id="" placeholder="Password" />
                    <br />
                    <input type="password" name="" id="" placeholder="Re-enter password" />
                    <br />
                    <input type="submit" value="Register" />
                    <p>Already have an account? <Link to="/login">Login</Link></p>

                    <div>         or       </div>
                    <button className="btn-regular">Google Sign in</button>
                </form>
            </div>
        </div >
    );
};

export default Register;