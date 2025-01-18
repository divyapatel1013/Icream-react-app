import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const Client = () => {
  const testimonials = [
    {
      text: "The ice cream flavors are simply amazing! The freshness and quality are unmatched. I can't wait to try more flavors.",
      img: "../assets/img/testimonial-1.jpg", 
      name: "Sophia Turner",
      profession: "Food Blogger",
    },
    {
      text: "I love the personalized flavors! The team really understands how to make each celebration special. Highly recommended!",
      img: "../assets/img/testimonial-2.jpg", 
      name: "James Smith",
      profession: "Event Planner",
    },
    {
      text: "From delivery to taste, everything is perfect. The service is top-notch, and the ice cream is absolutely delicious.",
      img: "../assets/img/testimonial-3.jpg", 
      name: "Liam Johnson",
      profession: "Marketing Specialist",
    }
  ];

  return (
    <div>
      {/* Testimonial Start */}
      <div className="container-fluid py-5">
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <h1 className="section-title position-relative text-center mb-5">
                Clients Say About Our Famous Ice Cream
              </h1>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <Swiper
                modules={[ Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                autoplay={{ delay: 3000 }}
                pagination={{ clickable: true }}
              >
                {testimonials.map((testimonial, index) => (
                  <SwiperSlide key={index}>
                    <div className="text-center">
                      <i className="fa fa-3x fa-quote-left text-primary mb-4"></i>
                      <h4 className="font-weight-light mb-4">{testimonial.text}</h4>
                      <img
                        className="img-fluid mx-auto mb-3"
                        src={testimonial.img}
                        alt={`Picture of ${testimonial.name}`}
                      />
                      <h5 className="font-weight-bold m-0">{testimonial.name}</h5>
                      <span>{testimonial.profession}</span>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
      {/* Testimonial End */}
    </div>
  );
};

export default Client;
