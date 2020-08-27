import React from 'react';
import { Carousel } from 'react-bootstrap';
import './CarouselData.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight, faArrowAltCircleLeft, faAtom } from '@fortawesome/free-solid-svg-icons';

const CarouselData = (props) => {
    const carouselData = props.carouselData;
    const nextIcon = <FontAwesomeIcon icon={faArrowAltCircleRight} />
    const prevIcon = <FontAwesomeIcon icon={faArrowAltCircleLeft} />
    const faCircle = <FontAwesomeIcon icon={faAtom} />
    return (
        <div className=" mx-5 text-light">
            <Carousel nextIcon={nextIcon} prevIcon={prevIcon} direction={faCircle} interval={3000} indicators={false} index={0}>
                <Carousel.Item>
                    <div className="offer text-center text-primary">
                        <h2>
                            10% off for purchasing more than $500. <br />
                            So, don't miss this chance.. <br />
                            Grab courses for you and for FNF....
                            <br /> <br />
                            <a href="#courses" className="btn btn-danger mb-3">Grab Now</a>
                        </h2>
                        <ul className="list-item text-info">
                            <h1 className="text-success">Why MuBail iShkul?</h1>
                            <li className="h2 "> {faCircle} Covid Friendly {faCircle}</li>
                            <li className="h2"> {faCircle} LifeTime Access {faCircle}</li>
                            <li className="h2"> {faCircle} Full online {faCircle}</li>
                            <li className="h2"> {faCircle} 1 Year support {faCircle}</li>
                            <li className="h2"> {faCircle} Special trained instructors {faCircle}</li>
                        </ul>
                    </div>
                </Carousel.Item>
                {
                    carouselData.map(carouselData => <Carousel.Item>
                        <div className="carousel-area d-flex align-items-center justify-content-center">
                            <div className="carousel-img w-50">
                                <img src={carouselData.img} className="rounded" alt="course-img" />
                            </div>
                            <div className="w-50 carousel-text">
                                <h3>Introducing our <br />
                                    <span className="h1 font-bolder text-warning">Latest {carouselData.name} course</span>
                                    <br />
                                    for you
                                    <br /> <span className="h2 text-primary">By {carouselData.instructor}</span>
                                    <br />
                                    <br /> only for <span className="h2 text-info">${carouselData.price}</span> </h3>
                                <br />
                                <a href="#courses" className="btn btn-dark">See Courses</a>
                            </div>
                        </div>
                    </Carousel.Item>)
                }
            </Carousel>
        </div>
    );
};

export default CarouselData;