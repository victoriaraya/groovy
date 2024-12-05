"use client";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ImageCarousel = ({ imagePaths }) => {
  return (
    <Carousel showThumbs={false} showStatus={false}>
      {imagePaths.map((imagePath, index) => (
        <div key={index}>
          <img
            src={imagePath}
            alt={`Image ${index}`}
            className="h-[500px] sm:h-[750px]"
          />
        </div>
      ))}
    </Carousel>
  );
};

export default ImageCarousel;
