import React, { useEffect, useState } from 'react';
import Header from './Header/Header';
import bg from '../../images/bg2.jpg'
import Body from './Body/Body';
import { Col, Container, Row } from 'react-bootstrap';

const Home = () => {

    const [medic, setMedic] = useState([]);

    useEffect(() => {
        fetch('./medic.json')
            .then(res => res.json())
            .then(data => setMedic(data))
    }, [])

    return (
        <div>
            <Header></Header>

            <img src={bg} alt="bg-img" className="img-fluid" />


            <h2 className="mb-5 font-monospace text-primary">S E R V I C E S</h2>
            <Container className="mb-5">
                <Row>
                    <Col><h2 className="mt-5 font-monospace">We are dedicated to providing best-in-class services.</h2></Col>
                    <Col><img className="img-style" src="https://media.istockphoto.com/photos/medicine-doctor-holding-electronic-medical-and-record-on-tablet-dna-picture-id1250152635?k=20&m=1250152635&s=612x612&w=0&h=ee7B3TXwK9PlS3qf5cUw3emtQk3UIJ82tjxYwaq084I=" alt="" /></Col>
                </Row>

            </Container>

            <div className="row row-cols-1 row-cols-lg-3 row-cols-md-2 g-4 m-5 ">

                {
                    medic.map(medics => <Body
                        key={medics.id}
                        medics={medics}
                    ></Body>)
                }

            </div>
        </div>


    );
};

export default Home;