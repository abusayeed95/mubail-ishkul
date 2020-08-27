import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './CourseCart.css'

const CourseCart = (props) => {
    const cart = props.cart;
    let totalPrice = cart.reduce((sum, cart) => sum + cart.price, 0)
    const addedCourses = cart.reduce((added, cart) => added + cart.name + ", ", [])
    let discount = 0;
    let discountedPrice = totalPrice;
    let grandTotal = totalPrice;

    if (totalPrice > 500) {
        discount = Math.round(totalPrice * 0.1);
        discountedPrice = totalPrice - discount;
        grandTotal = discountedPrice;
    }

    return (
        <div className="sticky-top">
            <h1 className="text-center text-light display-2 font-weight-bolder">
                <FontAwesomeIcon icon={faShoppingCart} /> {cart.length}
            </h1>
            <div>
                <div className="text-light">
                    <div className="row">
                        <div className="row col-12 border border-light rounded my-1">
                            <h4 className="col-4">Added Courses</h4>
                            <small className="col-8">: {addedCourses}</small>
                        </div>
                        <div className="row col-12 border border-light rounded my-1">
                            <h4 className="col-8">Total Price before discount</h4>
                            <h4 className="col-4">: {totalPrice}</h4>
                        </div>
                        <div className="row col-12 border border-light rounded my-1">
                            <h4 className="col-8">Discounts</h4>
                            <h4 className="col-4">: {discount}</h4>
                        </div>
                        <div className="row col-12 border border-light rounded my-1">
                            <h2 className="col-8">Grand Total</h2>
                            <h2 className="col-4">: {grandTotal}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseCart;