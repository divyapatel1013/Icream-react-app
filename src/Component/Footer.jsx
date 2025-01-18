import React from 'react'
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <div>
            {/* <!-- Footer Start --> */}
            <div className="container-fluid footer bg-light py-5" style={{ marginTop: '90px' }}>
                <div className="container text-center py-5">
                    <div className="row">
                        <div className="col-12 mb-4">
                            <Link to="#" className="navbar-brand m-0">
                                <h1 className="m-0 mt-n2 display-4 text-primary"><span className="text-secondary">i</span>CREAM</h1>
                            </Link>
                        </div>
                        <div className="col-12 mb-4">
                            <Link className="btn btn-outline-secondary btn-social mr-2" to="#"><i className="fab fa-twitter"></i></Link>
                            <Link className="btn btn-outline-secondary btn-social mr-2" to="#"><i className="fab fa-facebook-f"></i></Link>
                            <Link className="btn btn-outline-secondary btn-social mr-2" to="#"><i className="fab fa-linkedin-in"></i></Link>
                            <Link className="btn btn-outline-secondary btn-social" to="#"><i className="fab fa-instagram"></i></Link>
                        </div>
                        <div className="col-12 mt-2 mb-4">
                            <div className="row">
                                <div className="col-sm-6 text-center text-sm-right border-right mb-3 mb-sm-0">
                                    <h5 className="font-weight-bold mb-2">Get In Touch</h5>
                                    <p className="mb-2">123 Street, New York, USA</p>
                                    <p className="mb-0">+012 345 67890</p>
                                </div>
                                <div className="col-sm-6 text-center text-sm-left">
                                    <h5 className="font-weight-bold mb-2">Opening Hours</h5>
                                    <p className="mb-2">Mon – Sat, 8AM – 5PM</p>
                                    <p className="mb-0">Sunday: Closed</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <p className="m-0">&copy; <Link to="#">Domain</Link>. All Rights Reserved. Designed by Divya Patel
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Footer End --> */}

        </div>
    )
}

export default Footer
