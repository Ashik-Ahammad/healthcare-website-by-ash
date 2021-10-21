import React, { useState } from 'react';
import './Register.css'

const Register = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegistration = e => {
        console.log(email, password);
        e.preventDefault();
    }

    const handleEmailChange = e => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }

    return (
        <div className="register-form container">
            <div className="mt-5 pt-5">

                <h2 className="mb-5 text-primary">Create an account</h2>
                <form onSubmit={handleRegistration}>

                    <div className="row mb-3">
                        <label for="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                        <div className="col-sm-10">
                            <input onBlur={handleEmailChange} type="email" className="form-control" id="inputEmail3" required placeholder="Enter your email" />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label for="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                        <div className="col-sm-10">
                            <input onBlur={handlePasswordChange} type="password" className="form-control" id="inputPassword3" required placeholder="Enter your password" />
                        </div>
                    </div>


                    <button type="submit" className="btn btn-primary">Sign in</button>


                </form>
            </div>
        </div >
    );
};

export default Register;