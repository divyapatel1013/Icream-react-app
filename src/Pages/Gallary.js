import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import GallaryHeader from '../Component/GallaryHeader';

const portfolioItems = [
  { id: 1, src: '../assets/img/portfolio-1.jpg', category: 'first' },
  { id: 2, src: '../assets/img/portfolio-2.jpg', category: 'second' },
  { id: 3, src: '../assets/img/portfolio-3.jpg', category: 'third' },
  { id: 4, src: '../assets/img/portfolio-4.jpg', category: 'first' },
  { id: 5, src: '../assets/img/portfolio-5.jpg', category: 'second' },
  { id: 6, src: '../assets/img/portfolio-6.jpg', category: 'third' },
];

const categories = [
  { name: 'All', filter: '*' },
  { name: 'Cone', filter: 'first' },
  { name: 'Vanilla', filter: 'second' },
  { name: 'Chocolate', filter: 'third' },
];

const Gallary = () => {
  const [activeFilter, setActiveFilter] = useState('*');

  const filteredItems =
    activeFilter === '*'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

  return (
    <div>
      <GallaryHeader />
      {/* <!-- Gallary Start --> */}
      <div className="container-fluid py-5 px-0">
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-lg-5">
              <h1 className="section-title position-relative text-center mb-5">
                Delicious Ice Cream Made From Our Very Own Organic Milk
              </h1>
            </div>
          </div>
          <div className="row">
            <div className="col-12 text-center">
              <ul className="list-inline mb-4 pb-2" id="portfolio-flters">
                {categories.map((category, index) => (
                  <li
                    key={index}
                    className={`btn btn-sm btn-outline-primary m-1 ${
                      activeFilter === category.filter ? 'active' : ''
                    }`}
                    onClick={() => setActiveFilter(category.filter)}
                    style={{ cursor: 'pointer' }}
                  >
                    {category.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="row m-0 portfolio-container">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className={`col-lg-4 col-md-6 p-0 portfolio-item ${item.category}`}
              >
                <div className="position-relative overflow-hidden">
                  <img className="img-fluid w-100" src={item.src} alt="" />
                  <Link
                    className="portfolio-btn"
                    to={item.src}
                    data-lightbox="portfolio"
                  >
                    <i
                      className="fa fa-plus text-primary"
                      style={{ fontSize: '60px' }}
                    ></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* <!-- Gallary End --> */}
    </div>
  );
};

export default Gallary;
