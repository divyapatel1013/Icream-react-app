import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import Team from '../Component/Team';
import Service2 from '../Component/Service2';
import Client from '../Component/Client';
import Gallary2 from '../Component/Gallary2';
import Product2 from '../Component/Product2';
import About2 from '../Component/About2';

const Home = () => {
    const slides = [
        {
            id: 1,
            image: "../assets/img/carousel-1.jpg",
            title: "Traditional & Delicious",
            subtitle: "Traditional Ice Cream Since 1950",
            link: "#"
        },
        {
            id: 2,
            image: "../assets/img/carousel-2.jpg",
            title: "Traditional & Delicious",
            subtitle: "Made From Our Own Organic Milk",
            link: "#"
        },
    ];

    return (
        <div>
            {/* Swiper Slider */}
            <div className="container-fluid p-0  d-sm-block d-md-block d-lg-none">
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    loop={true}
                    className="mySwiper"
                >
                    {slides.map(slide => (
                        <SwiperSlide key={slide.id}>
                            <img
                                src={slide.image}
                                alt={slide.title}
                                className="w-100"
                            />
                            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                <div className="p-3" style={{ maxWidth: "900px" }}>
                                    <h4 className="text-white text-uppercase mb-md-3" style={{ fontSize: '18px' }}>
                                        {slide.title}
                                    </h4>
                                    <h1 className="display-3 text-white mb-md-4" style={{ fontSize: '18px' }}>
                                        {slide.subtitle}
                                    </h1>
                                    <Link
                                        to={slide.link}
                                        className="btn-sm btn-primary py-md-3 px-md-5 mt-2"
                                        style={{ borderRadius: '20px', fontSize: '10px' }}
                                    >
                                        Learn More
                                    </Link>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <div className="container-fluid p-0 d-none  d-sm-none d-md-none d-lg-block" style={{marginTop:'-43px'}}>
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    loop={true}
                    className="mySwiper"
                >
                    {slides.map(slide => (
                        <SwiperSlide key={slide.id}>
                            <img
                                src={slide.image}
                                alt={slide.title}
                                className="w-100"
                            />
                            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                <div className="p-3" style={{ maxWidth: "900px" }}>
                                    <h4 className="text-white text-uppercase mb-md-3">
                                        {slide.title}
                                    </h4>
                                    <h1 className="display-3 text-white mb-md-4">
                                        {slide.subtitle}
                                    </h1>
                                    <Link to="#" class="btn btn-primary py-md-3 px-md-5 mt-2">Learn More</Link>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <About2/>
            <Service2 />
            <Gallary2 />
            <Product2 />
            <Team />
            <Client />
        </div>
    );
};

export default Home;
