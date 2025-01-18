import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            {/* <!-- Topbar Start --> */}
            <div className="container-fluid bg-primary py-3 d-none d-md-block">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 text-center text-lg-left mb-2 mb-lg-0">
                            <div className="d-inline-flex align-items-center">
                                <Link className="text-white pr-3" to="">FAQs</Link>
                                <span className="text-white">|</span>
                                <Link className="text-white px-3" to="">Help</Link>
                                <span className="text-white">|</span>
                                <Link className="text-white pl-3" to="">Support</Link>
                            </div>
                        </div>
                        <div className="col-md-6 text-center text-lg-right">
                            <div className="d-inline-flex align-items-center">
                                <Link className="text-white px-3" to="">
                                    <i className="fab fa-facebook-f"></i>
                                </Link>
                                <Link className="text-white px-3" to="#">
                                    <i className="fab fa-twitter"></i>
                                </Link>
                                <Link className="text-white px-3" to="#">
                                    <i className="fab fa-linkedin-in"></i>
                                </Link>
                                <Link className="text-white px-3" to="#">
                                    <i className="fab fa-instagram"></i>
                                </Link>
                                <Link className="text-white pl-3" to="#">
                                    <i className="fab fa-youtube"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Topbar End --> */}


            {/* <!-- Navbar Start --> */}
            <div className="container-fluid position-relative nav-bar p-0">
                <div className="container-lg position-relative p-0 px-lg-3" style={{ zIndex: "9" }}>
                    <nav className="navbar navbar-expand-lg bg-white navbar-light shadow p-lg-0">
                        <Link to="/" className="navbar-brand d-block d-lg-none">
                            <h1 className="m-0 display-4 text-primary"><span className="text-secondary">i</span>CREAM</h1>
                        </Link>
                        <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                            <div className="navbar-nav ml-auto py-0">
                                <Link to="/" className="nav-item nav-link">Home</Link>
                                <Link to="/about" className="nav-item nav-link">About</Link>
                                <Link to="/product" className="nav-item nav-link">Product</Link>
                            </div>
                            <Link to="/" className="navbar-brand mx-5 d-none d-lg-block">
                                <h1 className="m-0 display-4 text-primary"><span className="text-secondary">i</span>CREAM</h1>
                            </Link>
                            <div className="navbar-nav mr-auto py-0">
                                <Link to="/service" className="nav-item nav-link">Service</Link>
                                <Link to="/gallary" className="nav-item nav-link">Gallery</Link>
                                <Link to="/contact" className="nav-item nav-link">Contact</Link>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
            {/* <!-- Navbar End --> */}


        </div>
    )
}

export default Navbar
