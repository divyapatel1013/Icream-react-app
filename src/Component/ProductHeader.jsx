import React from 'react'
import { Link } from 'react-router-dom'


const ProductHeader = () => {
    const headerStyle = {
        background: 'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url("../assets/img/header.jpg") no-repeat center center',
        backgroundSize: 'cover'
      };
      
    return (
        <div>
            <div className="jumbotron jumbotron-fluid page-header bg-img "  style={headerStyle}>
                <div className="container text-center py-5">
                    <h1 className=" display-3 mt-lg-5 text-light">Product</h1>
                    <div className="d-inline-flex align-items-center text-light" >
                        <p className="m-0"><Link className="text-light" to="/" >Home</Link></p>
                        <i className="fa fa-circle px-3"></i>
                        <p className="m-0">Product</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductHeader
