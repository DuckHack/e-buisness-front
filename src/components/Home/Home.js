import React, {Component} from 'react';
import './Home.css';
import {Carousel, Grid, Row, Col, Image} from 'react-bootstrap';
import RayBan1 from './Banner_HP_marshal_steven_klein_desktop.jpeg'
import RayBan2 from './Banner_hp_ferrari_collection_2018_desktop.jpeg'
import RayBan3 from './Banner_HP_blaze_2018_desktop.jpeg'
import RayBan4 from './Banner_hp_Mothers-Day_desktop_new.jpeg'
import RayBan5 from './Banner_HP_wings_gold_desktop.jpeg'
import RayBan6 from './Banner_Desktop_Ray_Ban_Eyeglasses_x2.jpeg'
import RayBan7 from './Banner_Desktop_Ray_Ban_Sunglasses_Wayfarer.jpeg'


class Home extends Component{
    render(){
        return(
            <div className={'mainPageBox'}>
                <div className={'carouselBox'}>
                    <Carousel>
                        <Carousel.Item>
                            <img width={900} height={500} alt="900x500" src={RayBan1} />
                            <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img width={900} height={500} alt="900x500" src={RayBan2} />
                            <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img width={900} height={500} alt="900x500" src={RayBan3} />
                            <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img width={900} height={500} alt="900x500" src={RayBan4} />
                            <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img width={900} height={500} alt="900x500" src={RayBan5} />
                            <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
                <div className={'imageGrid'}>
                    <Grid>
                        <div className={'row'}>
                            <Row className="show-grid">
                                <Col sm={6} md={6} lg={6}>
                                    <Image src={RayBan6} alt='IMAGE' responsive/>
                                </Col>
                                <Col sm={6} md={6} lg={6}>
                                    <Image src={RayBan7} alt='IMAGE' responsive/>
                                </Col>
                            </Row>
                        </div>
                    </Grid>
                </div>
                <div className={'bottomFooter'}>
                    <footer>
                        <h1>
                            Footer
                        </h1>
                    </footer>
                </div>
            </div>

        );
    }
}


export default Home;