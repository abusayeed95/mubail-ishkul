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
                <h2 className="course-name">{name}</h2>
                <p className="text-muted display-5">Instructor: {instructor}</p>
                <h4 className="my-4">Price: $ {price}</h4>
                <button className="btn btn-info" onClick={() => enrollButton(selectedCourse)}> Enroll Now <FontAwesomeIcon icon={faUserPlus} /></button>
            </div>
        </div>
    );
};

export default Courses;