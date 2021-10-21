import React from 'react';
import './Services.css'

const Services = (props) => {

    const { id, name, img, description, price } = props.services;

    return (
        <div className="col">
            <div className="card shadow-lg">
                <img className="service-img" src={img} alt="img" />
                <div className="card-body">
                    <h5 className={id}><span>{name}</span></h5><h6>{price}</h6>
                    <p className="card-text">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default Services;