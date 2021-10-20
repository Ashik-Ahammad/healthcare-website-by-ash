import React from 'react';
import { ButtonGroup } from 'react-bootstrap';
import './Body.css'

const Body = (props) => {

    const { id, name, img, description } = props.medics;



    return (

        <div className="mt-5">



            <div className="card shadow-lg">
                <img className="body-img " src={img} alt="img" />
                <div className="card-body">
                    <h5 className={id}><span>{name}</span></h5>
                    <p className="card-text">{description}</p>
                    <button type="button" class="btn btn-outline-secondary">More Details</button>


                </div>
            </div>


        </div>
    );
};

export default Body;