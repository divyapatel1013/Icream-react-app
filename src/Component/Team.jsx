import React from 'react';
import { Link } from 'react-router-dom';

const Team = () => {
  const teamDetails = [
    {
      img: '../assets/img/team-1.jpg',
      name: 'Emily Frost',
      role: 'Head Chef',
    },
    {
      img: '../assets/img/team-2.jpg',
      name: 'Liam Berry',
      role: 'Flavor Specialist',
    },
    {
      img: '../assets/img/team-3.jpg',
      name: 'Sophia Sund',
      role: 'Dessert Designer',
    },
    {
      img: '../assets/img/team-4.jpg',
      name: 'James Creabr',
      role: 'Operations Manager',
    },
  ];

  return (
    <div>
      {/* <!-- Team Start --> */}
      <div className="container-fluid py-5">
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-6">
              <h1 className="section-title position-relative mb-5">
                Meet Our Expert Ice Cream Team
              </h1>
              <p className="text-muted">
                Our team of passionate professionals is dedicated to crafting the most delightful ice cream experience. From innovative flavors to exceptional service, they bring joy to every scoop.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="owl-carousel team-carousel row gy-5">
                {teamDetails.map((detail, index) => (
                  <div
                    className="team-item col-sm-12 col-md-6 col-lg-3"
                    key={index}
                  >
                    <div className="team-img mx-auto">
                      <img
                        className="rounded-circle w-100 h-100"
                        src={detail.img}
                        style={{ objectFit: 'cover' }}
                        alt={detail.name}
                      />
                    </div>
                    <div
                      className="position-relative text-center bg-light rounded px-4 py-5"
                      style={{ marginTop: '-100px'}}
                    >
                      <h3 className="font-weight-bold mt-5 mb-3 pt-5 ">
                        {detail.name}
                      </h3>
                      <h6 className="text-uppercase text-muted mb-4">
                        {detail.role}
                      </h6>
                      <div className="d-flex justify-content-center pt-1">
                        <a
                          className="btn btn-outline-secondary btn-social mr-2"
                          href="#"
                        >
                          <i className="fab fa-twitter"></i>
                        </a>
                        <a
                          className="btn btn-outline-secondary btn-social mr-2"
                          href="#"
                        >
                          <i className="fab fa-facebook-f"></i>
                        </a>
                        <a
                          className="btn btn-outline-secondary btn-social mr-2"
                          href="#"
                        >
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Team End --> */}
    </div>
  );
};

export default Team;
