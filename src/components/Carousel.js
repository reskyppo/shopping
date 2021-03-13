import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
};

const handleDragStart = (e) => e.preventDefault();

const items = [
  <img
    src="/images/banner1.jpg"
    onDragStart={handleDragStart}
    height="250px"
  />,
  <img
    src="/images/banner2.jpg"
    onDragStart={handleDragStart}
    height="250px"
  />,
  <img
    src="/images/banner3.jpg"
    onDragStart={handleDragStart}
    height="250px"
  />,
];

const Carousel = () => {
  return (
    <AliceCarousel
      autoPlay
      infinite
      animationDuration={800}
      disableButtonsControls
      disableDotsControls
      items={items}
      mouseTracking
      responsive={responsive}
    />
  );
};

export default Carousel;
