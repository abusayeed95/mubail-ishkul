import React from 'react';
import './Courses.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';

const Courses = (props) => {
    const { name, price, instructor, img } = props.courseDetails;
    const enrollButton = props.enrollButton;
    const selectedCourse = props.courseDetails;

    return (
        <div className="col-12 col-md-6 col-lg-4 w-100 text-center">
            <div className="course-container text-center bg-dark">
                <div className="img-container"><img src={img} className="img-fluid rounded" /></div>
                <h4 className="course-name">{name}</h4>
                <small className="text-muted display-5">Instructor: <strong>{instructor}</strong></small>
                <h6 className="">Price: $ {price}</h6>
                <button className="btn btn-info" onClick={() => enrollButton(selectedCourse)}> Enroll Now <FontAwesomeIcon icon={faUserPlus} /></button>
            </div>
        </div>
    );
};

export default Courses;