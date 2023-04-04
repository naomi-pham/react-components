import React from "react";
import Carousel from "./index";

const CarouselWithText = ({ slides }) => {
  return (
    <div className="flex flex-col gap-x-6 sm:flex-row">
      <div className="mx-auto flex max-w-xs flex-col items-center justify-center gap-4 p-6 text-center">
        <h1 className="text-3xl font-medium">Title</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
      </div>
      <div className="flex-1">
        <Carousel slides={slides} />
      </div>
    </div>
  );
};

export default CarouselWithText;
