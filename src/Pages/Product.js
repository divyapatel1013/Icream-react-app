import React from 'react'
import { Link } from 'react-router-dom'
import ProductHeader from '../Component/ProductHeader'

const Product = () => {

    const productDetails = [
        {
            price: "$99",
            image: "../assets/img/product-1.jpg",
            productName: "Rainbow Delight",
            button: "Order Now",
        },
        {
            price: "$99",
            image: "../assets/img/product-2.jpg",
            productName: "Vanilla Sundae",
            button: "Order Now",
        },
        {
            price: "$99",
            image: "../assets/img/product-3.jpg",
            productName: "Vanilla Waffle Cone",
            button: "Order Now",
        },
        {
            price: "$99",
            image: "../assets/img/product-4.jpg",
            productName: "Berry Vanilla Bowl",
            button: "Order Now",
        },
        {
            price: "$99",
            image: "../assets/img/product-5.jpg",
            productName: "Pink Swirl Delight",
            button: "Order Now",
        },
        {
            price: "$99",
            image: "../assets/img/product-6.jpg",
            productName: "Rainbow Sundae",
            button: "Order Now",
        },
        {
            price: "$99",
            image: "../assets/img/product-7.jpg",
            productName: "Parfait Perfection",
            button: "Order Now",
        },
        {
            price: "$99",
            image: "../assets/img/product-8.jpg",
            productName: "Golden Waffle Cone",
            button: "Order Now",
        },

    ]

    return (
        <div>
            <ProductHeader />
            {/* <!-- Products Start --> */}
            <div className="container-fluid py-5">
                <div className="container py-5">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <h1 className="section-title position-relative text-center mb-5">Best Prices We Offer For Ice Cream Lovers</h1>
                        </div>
                    </div>
                    <div className="row">
                        {productDetails.map((detail, index) => (
                            <div className="col-lg-3 col-md-6 mb-4 pb-2" key={index}>
                                <div className="product-item d-flex flex-column align-items-center text-center bg-light rounded py-5 px-3">
                                    <div className="bg-primary mt-n5 py-3" style={{ width: "80px" }}>
                                        <h4 className="font-weight-bold text-white mb-0">{detail.price}</h4>
                                    </div>
                                    <div className="position-relative bg-primary rounded-circle mt-n3 mb-4 p-3" style={{ width: "150px", height: "150px" }}>
                                        <img className="rounded-circle w-100 h-100" src={detail.image} style={{ objectFit: "cover" }} />
                                    </div>
                                    <h5 className="font-weight-bold mb-4">{detail.productName}</h5>
                                    <Link to="#" className="btn btn-sm btn-secondary">{detail.button}</Link>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Product
