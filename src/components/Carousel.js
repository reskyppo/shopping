import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const Carousel = ({ banner, datas }) => {
  const responsive = {
    0: { items: banner ? 1 : 2 },
    568: { items: 2 },
    1024: { items: 3 },
  };

  const handleDragStart = (e) => e.preventDefault();
  const items = datas?.map((data) => (
    <img src={data} onDragStart={handleDragStart} height="250px" />
  ));

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
