import React from 'react'

const CarouselCard = ({ item, postsPerSlide }) => {
  return (
    <div
      className="min-w-full p-2"
      style={{ minWidth: `calc(100% / ${postsPerSlide})` }}
    >
      <div className="flex h-[220px] items-center justify-center bg-light-neutral-50 rounded-lg shadow-button-lg">
        {item.name}
      </div>
    </div>
  )
}

export default CarouselCard
