import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Courses from './Components/Courses/Courses';
import CourseCart from './Components/Course-cart/CourseCart'
import courses from './Components/FakeData/FakeData'
import { useState } from 'react';
import CarouselData from './Components/CarouselData/CarouselData'

function App() {
  const [cart, setCart] = useState([]);

  const enrollButton = (course) => {
    const addedCourse = [...cart, course];
    setCart(addedCourse)
  }
  const carouselData = courses.slice(0, 4)
  return (
    <div className=" bg-secondary">
      <div className="header mb-5" id="home">
        <Header></Header>
      </div>
      <div className="carousel-data">
        <CarouselData carouselData={carouselData}></CarouselData>
      </div>
      <div id="courses">
        <h1 className="courses-heading text-light">All courses ({courses.length})</h1>
        <div className="row m-0 bg-secondary py-2">
          <div className="row col-lg-9 col-md-8  col-7 text-light">
            {
              courses.map(course => <Courses courseDetails={course} enrollButton={enrollButton} key={course.id}></Courses>)
            }
          </div>
          <div className=" col-lg-3 col-md-4 col-5">
            <CourseCart cart={cart}></CourseCart>
          </div>
        </div>
      </div>
    </div >
  );
}

export default App;
