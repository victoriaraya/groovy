"use client";

import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import CustomIndicator from "./CustomIndicator";

const ImageCarousel = ({ imagePaths }) => {
  return (
    <Carousel showThumbs={false} showStatus={false} showArrows={false}>
      {imagePaths.map((imagePath, index) => (
        <div key={index}>
          <img src={imagePath} alt={`Image ${index}`} className="h-[750px]" />
        </div>
      ))}
    </Carousel>
  );
};

export default ImageCarousel;

// renderIndicator={(onClickHandler, isSelected, index, label) => (
//   <CustomIndicator
//     onClickHandler={onClickHandler}
//     isSelected={isSelected}
//     index={index}
//     key={index}
//   />
// )}
