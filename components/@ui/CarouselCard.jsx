import React from "react";

const CarouselCard = ({ item, postsPerSlide }) => {
  return (
    <div
      className="min-w-full p-4 first:pl-0 last:pr-0"
      style={{ minWidth: `calc(100% / ${postsPerSlide})` }}
    >
      <div className="flex h-[220px] items-center justify-center bg-slate-100 border border-slate-300">
        {item.name}
      </div>
    </div>
  );
};

export default CarouselCard;
