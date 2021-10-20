import React from 'react';
import { NavLink } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <img className="mt-5 img-fluid" src="https://www.hebergementwebs.com/image/f6/f6795affaba8108b6e07489aec8702c5.png/45-best-free-error-page-templates-that-are-easy-to-customize-2020-17.png" alt="" />

            <h4>Page you are searching currently not available!!!</h4>


            <NavLink className="mb-5 text-decoration-none border border-2 p-1" to="/home">RETURN TO HOME</NavLink>
        </div>
    );
};

export default NotFound;