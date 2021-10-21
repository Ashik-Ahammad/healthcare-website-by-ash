import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Products = () => {
    return (
        <div>
            <img className="mt-5" src="https://media.istockphoto.com/photos/powdered-spirulina-and-pills-on-white-background-picture-id1337251157?b=1&k=20&m=1337251157&s=170667a&w=0&h=icUj83Ayz63AT7N32CCoWxef2dobSXO3va4yb2s8ho0=" alt="" />
            <h4>Grab your products</h4>

            <Container>
                <Row xs={2} md={4} lg={6}>
                    <Col><img className="img-fluid" src="https://images-prod.healthline.com/hlcmsresource/images/AN_images/spirulina-1296x728-feature.jpg" alt="" /> <h5>Spirulina</h5></Col>
                    <Col><img className="img-fluid" src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F23%2F2021%2F04%2F26%2Fways-to-use-oats-2000.jpg" alt="" /> <h5>Oats</h5></Col>
                </Row>
                <Row xs={1} md={2}>
                    <Col><img className="img-fluid" src="https://5.imimg.com/data5/TT/OJ/MY-44567530/whey-protein-500x500.jpg" alt="" /> <h5>Protein</h5></Col>
                    <Col><img className="img-fluid" src="https://cdn.shopify.com/s/files/1/0101/4890/4996/products/14485-a-vogel-echinaforce-drops-30ml-13700026171449_2045x.jpg?v=1608050874" alt="" /> <h5>Echinacea</h5></Col>
                    <Col><img className="img-fluid" src="https://d35cnulyv0pa6p.cloudfront.net/products/images/2021/363716/ginseng.png?6cbIz82thECG_T31DXRwMnMWMqevS45q=" alt="" /> <h5>Ginseng</h5></Col>
                </Row>
                <Row xs="auto">
                    <Col><img className="img-fluid" src="https://img.emedihealth.com/wp-content/uploads/2020/09/aloe-vera-feat-1.jpg" alt="" /> <h5>Pure Aloevera</h5></Col>
                    <Col><img className="img-fluid" src="https://vitaking.com/wp-content/uploads/2019/05/beta_carotene.jpg" alt="" /> <h5>Beta-Carotene</h5></Col>
                    <Col><img className="img-fluid" src="https://atlasbiomed.com/blog/content/images/2020/12/2020-10-08-2--Probiotics-for-IBS-201013-.png" alt="" /> <h5>Probiotics</h5></Col>
                </Row>
            </Container>

            <button class="btn btn-outline-success" type="button">Stay with us for upcoming products...</button>
        </div>
    );
};

export default Products;