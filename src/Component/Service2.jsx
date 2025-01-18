import React from 'react'
import { Link } from 'react-router-dom'

const Service2 = () => {

    const serviceDetails = [
        {
            img: "../assets/img/service-1.jpg",
            serviceName: "Batter Quality Maintain",
            serviceDescription: "Premium ingredients for perfect taste and texture.",
            more: "Learn More",
        },
        {
            img: "../assets/img/service-2.jpg",
            serviceName: "Individual Approach",
            serviceDescription: "Customized flavors to match your preferences.", 
            more: "Learn More",
        },
        {
            img: "../assets/img/service-3.jpg",
            serviceName: "Celebration Ice Cream",
            serviceDescription: "Celebrations with exclusive treats.",
            more: "Learn More",
        },
        {
            img: "../assets/img/service-4.jpg",
            serviceName: "Delivery To Any Point",
            serviceDescription: "Fresh ice cream delivered to your doorstep.",
            more: "Learn More",
        },


    ]
    return (
        <div>
            {/* <!-- Services Start --> */}
            <div className="container-fluid py-5">
                <div className="container py-5">
                    <div className="row ">
                        <div className="col-lg-6">
                            <h1 className="section-title position-relative mb-5" >Best Services We Provide For Our Clients</h1>
                        </div>
                        {/* <div className="col-lg-6 mb-5 mb-lg-0 pb-5 pb-lg-0"></div> */}
                    </div>

                    <div className="row gy-4">
                        <div className="col-12" >
                            <div className="owl-carousel service-carousel row gy-5">
                                {serviceDetails.map((detail, index) => (
                                    <div className='col-sm-12 col-md-6 col-lg-3' key={index}>
                                        <div className="service-item">
                                            <div className="service-img mx-auto">
                                                <img className="rounded-circle w-100 h-100 bg-light p-3" src={detail.img} style={{ objectFit: "cover" }} />
                                            </div>
                                            <div className="position-relative text-center bg-light rounded p-4 pb-5" style={{ marginTop: "-75px" ,height:'368px'}}>
                                                <h5 className="font-weight-semi-bold mt-5 mb-3 pt-5">{detail.serviceName}</h5>
                                                <p>{detail.serviceDescription}</p>
                                                <Link to="#" className="btn btn-primary mt-2" style={{padding:'9px  18px',fontSize:'14px'}}>{detail.more}</Link>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Service2
