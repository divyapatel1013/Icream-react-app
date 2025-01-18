import React from 'react'

const Header = () => {
  return (
    <div>
      {/* <!-- Header Start --> */}
    <div className="jumbotron jumbotron-fluid page-header" style={{ marginBottom: "90px"}}>
        <div className="container text-center py-5">
            <h1 className="text-white display-3 mt-lg-5">About</h1>
            <div className="d-inline-flex align-items-center text-white">
                <p className="m-0"><Link className="text-white" to="#">Home</Link></p>
                <i className="fa fa-circle px-3"></i>
                <p className="m-0">About</p>
            </div>
        </div>
    </div>
    {/* <!-- Header End --> */}
    </div>
  )
}

export default Header
