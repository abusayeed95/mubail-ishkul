import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-info ">
                <a className="navbar-brand" href="#home"><h1 className="display-3 ml-5 font-weight-bold font-italic border-bottom border-light">MuBail iShkul</h1></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto ">
                        <li className="nav-item">
                            <a className="nav-link " href="#home">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#courses">Courses</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#home">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " href="#courses">Blog</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Header;