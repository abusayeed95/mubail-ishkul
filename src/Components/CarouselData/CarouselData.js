import React from 'react';
import { Carousel } from 'react-bootstrap';
import './CarouselData.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight, faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';

const CarouselData = (props) => {
    const carouselData = props.carouselData;
    const nextIcon = <FontAwesomeIcon icon={faArrowAltCircleRight} />
    const prevIcon = <FontAwesomeIcon icon={faArrowAltCircleLeft} />
    return (
        <div className="container text-light">
            <Carousel nextIcon={nextIcon} prevIcon={prevIcon}>
                <Carousel.Item>
                    <div className="offer">
                        <ul className="list-item">
                            <h1>Why MuBail iShkul?</h1>
                            <li>Covid Friendly</li>
                            <li>LifeTime Access</li>
                            <li>Full online</li>
                            <li>1 Year support</li>
                            <li>Special trained instructors</li>
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
                                <h1>Introducing Latest {carouselData.name} course for you By {carouselData.instructor} only for ${carouselData.price}</h1>
                            </div>
                        </div>
                    </Carousel.Item>)
                }
            </Carousel>
        </div>
    );
};

export default CarouselData;