import React from 'react'
import { Link } from 'react-router-dom'

const GallaryHeader = () => {
  const headerStyle = {
    background: 'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url("../assets/img/header.jpg") no-repeat center center',
    backgroundSize: 'cover'
};
  return (
    <div>
      <div className="jumbotron jumbotron-fluid page-header bg-img " style={headerStyle}>
        <div className="container text-center py-5">
          <h1 className=" display-3 mt-lg-5 text-white ">Gallary</h1>
          <div className="d-inline-flex align-items-center text-white">
            <p className="m-0"><Link className="text-white" to="/">Home</Link></p>
            <i className="fa fa-circle px-3"></i>
            <p className="m-0">Gallary</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GallaryHeader
