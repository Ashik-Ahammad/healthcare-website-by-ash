import React from 'react';
import app from '../../images/app.png'
import './AboutUs.css'
import cloth from '../../images/tshirt.png'
import { Badge, ButtonGroup as Button } from 'react-bootstrap';

const AboutUs = () => {
    return (
        <div className="mt-5 mb-5">

            <img className="mt-5 w-50" src={app} alt="" />
            <a href="https://play.google.com/store/apps/details?id=com.mightybell.teamultra" target="_blank" rel="noreferrer"><h5>Download our app</h5></a>

            <h4 className="container p-3 text-white border border-5 bg-primary">This pharmaceutical industry discovers, develops, produces, and markets drugs or pharmaceutical drugs for use as medications to be administered to patients, with the aim to cure them, vaccinate them, or alleviate the symptoms. Pharmaceutical companies may deal in generic or brand medications and medical devices.</h4>

            <div className="container">

                <img src={cloth} alt="" />
                <h5 className="text-warning">Shopping of 99$ and win a T-shirt</h5>
            </div>

            <div>
                <Button variant="primary" className="border border-3 rounded p-3 bg-info fs-4 text-danger">
                    Call for emergency <Badge bg="secondary"> <a href="https://play.google.com/store/apps/details?id=com.callapp.contacts&rdid=com.callapp.contacts&shortlink=fab10c2c&pid=callapp_site&c=site" target="_blank" rel="noreferrer" className="fs-5 text-warning">699</a></Badge>
                    <span className="visually-hidden">unread messages</span>
                </Button>
            </div>

            <div class="container mt-5">
                <div class="row ">

                    <div class="col-sm-3 border border-3 bg-light ">

                        A professional pharmacy service is defined as “an action or set of actions undertaken in or organised by a pharmacy, delivered by a pharmacist or other health practitioner, who applies their specialised health knowledge personally or via an intermediary, with a patient/client, population or other health professional we are.
                    </div>
                    <div class="col-sm-9">
                        <div class="row">
                            <div class="col-8 col-sm-6 border border-3 bg-light">
                                Pharmacy is the clinical health science that links medical science with chemistry and it is charged with the discovery, production, disposal, safe and effective use, and control of medications and drugs. The practice of pharmacy requires excellent knowledge of drugs, their mechanism of action, side effects, interactions, mobility and toxicity. At the same time, it requires knowledge of treatment and understanding of the pathological process. Some specialties of pharmacists, such as that of clinical pharmacists, require other skills, e.g. knowledge about the acquisition and evaluation of physical and laboratory data.
                            </div>
                            <div class="col-4 col-sm-6 border border-3 bg-light">
                                Medical services means medical and health care services provided to a Person, including, but not limited to, medical and health care services provided to a Person which are covered by a policy of insurance, and includes, without limitation, physician services, nurse and therapist services, dental services, hospital services, skilled nursing facility services, comprehensive outpatient rehabilitation services, home health care services, residential and out-patient behavioral healthcare services, and medicine or health care equipment provided to a Person for a necessary or specifically requested valid and proper medical or health purpose.
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AboutUs;