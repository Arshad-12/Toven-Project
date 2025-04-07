import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import '../styles/ImageSlider.css';

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
};

const items = [
  <img src="/images/1.jpg" alt="Slide 1" className="slider-image" />,
  <img src="/images/2.jpg" alt="Slide 2" className="slider-image" />,
  <img src="/images/3.jpg" alt="Slide 3" className="slider-image" />,
  <img src="/images/4.jpg" alt="Slide 4" className="slider-image" />,
  <img src="/images/5.jpg" alt="Slide 5" className="slider-image" />,
];

const ImageSlider = () => (
  <div className="image-slider-container">
    <AliceCarousel
      mouseTracking
      items={items}
      responsive={responsive}
      controlsStrategy="alternate"
      autoPlay
      infinite
      disableDotsControls={false}
      disableButtonsControls={false}
    />
  </div>
);

export default ImageSlider;
