import React from 'react'
import { Link } from 'react-router-dom'
import Team from '../Component/Team';
import AboutHeader from '../Component/AboutHeader';

const About = () => {
    return (
        <div>
            <AboutHeader />
            {/* <!-- About Start --> */}
            <div className="container-fluid py-5">
                <div className="container py-5">
                    <div className="row justify-content-center">
                        <div className="col-lg-7">
                            <h1 className="section-title position-relative text-center mb-5">Traditional & Delicious Ice Cream Since 1950</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 py-5">
                            <h4 className="font-weight-bold mb-3">About Us</h4>
                            <h5 className="text-muted mb-3">Bringing smiles with every scoop, we’ve been your go-to ice cream shop for generations.</h5>
                            <p>Since 1950, our family-run ice cream parlor has been serving up happiness in a cone.
                                From timeless classics to innovative flavors, every bite is made with love, quality ingredients,
                                and a dash of nostalgia. Whether you're craving creamy chocolate, refreshing fruit sorbets,
                                or adventurous seasonal delights, we have something for everyone.</p>
                            <Link to="#" className="btn btn-secondary mt-2">Learn More</Link>
                        </div>
                        <div className="col-lg-4" style={{ minHeight: "400px" }}>
                            <div className="position-relative h-100 rounded overflow-hidden">
                                <img className="position-absolute w-100 h-100" src="../assets/img/about.jpg" style={{ objectFit: "cover" }} />
                            </div>
                        </div>
                        <div className="col-lg-4 py-5">
                            <h4 className="font-weight-bold mb-3">Why Choose Us?</h4>
                            <p>We believe ice cream is more than a treat—it's a way to create cherished memories.
                                Here’s what makes us special:</p>
                            <h5 className="text-muted mb-3" style={{ fontSize: '18px' }}><i className="fa fa-check text-secondary mr-3"></i>Fresh, locally sourced ingredients</h5>
                            <h5 className="text-muted mb-3" style={{ fontSize: '18px' }}><i className="fa fa-check text-secondary mr-3"></i>Over 50 flavors to explore</h5>
                            <h5 className="text-muted mb-3" style={{ fontSize: '18px' }}><i className="fa fa-check text-secondary mr-3"></i>Committed to quality </h5>
                            <Link to="#" className="btn btn-primary mt-2">Learn More</Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- About End --> */}
            <Team />



        </div>
    )
}

export default About
