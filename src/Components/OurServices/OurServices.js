import React, { useEffect, useState } from 'react';
import Services from './Service/Services';


const OurServices = () => {
    const [service, setService] = useState([]);

    useEffect(() => {
        fetch('./service.json')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])

    return (
        <div className="container mt-5">

            <img className="mt-5" src="https://eyehospital.guk.org.bd/wp-content/uploads/2020/07/Lab-Automation-for-In-vitro-Diagnostics-Market22.jpg" alt="" />

            <h2 className="font-monospace text-danger py-5">+ U L T R A &nbsp;&nbsp; P H A R M A &nbsp;&nbsp; L I M I T E D</h2>

            <div className="row row-cols-1 row-cols-lg-4 row-cols-md-2 g-4  ">

                {
                    service.map(services => <Services
                        key={services.id}
                        services={services}
                    ></Services>)
                }

            </div>

        </div>
    );
};

export default OurServices;