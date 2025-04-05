import React from "react";
import Slider from "react-slick";
import Footer from "./Footer";
import "../styles/specialSection.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SpecialSection = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const specialImages = ["/images/1.jpg", "/images/2.jpg", "/images/3.jpg"];
  const chooseImages = ["/images/4.jpg", "/images/5.jpg", "/images/1.jpg"];
  const testimonialImages = ["/images/2.jpg", "/images/3.jpg", "/images/4.jpg"];

  return (
    <div className="special-wrapper">
      {/* What’s Special Section */}
      <section className="special-section">
        <h2>What’s Special?</h2>
        <div className="special-cards">
          {specialImages.map((img, index) => (
            <img key={index} src={img} alt={`Special ${index + 1}`} className="special-img" />
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="choose-section">
        <h2>Why Choose Us?</h2>
        <div className="choose-cards">
          {chooseImages.map((img, index) => (
            <img key={index} src={img} alt={`Choose ${index + 1}`} className="choose-img" />
          ))}
        </div>
      </section>

      {/* ✅ White space between sections */}
      <div className="white-gap"></div>

      {/* Testimonials Carousel */}
      <section className="testimonial-section">
        <h2>What Our Foodies Say About Us?</h2>
        <div className="testimonial-carousel">
          <Slider {...sliderSettings}>
            {testimonialImages.map((img, index) => (
              <div key={index} className="testimonial-slide">
                <img src={img} alt={`Review ${index + 1}`} className="testimonial-img" />
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </div>
  );
};

export default SpecialSection;
