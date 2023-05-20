import React from 'react'
import Carousel from './Carousel'
import CarouselWithText from './CarouselWithText'
import FramerCarousel from './FramerCarousel'
import { slides } from 'src/data/carouselData'
import FramerImageCarousel from './FramerImageCarousel'

const CarouselList = () => {
  const list = [
    {
      id: 0,
      label: 'Carousel',
      component: <Carousel slides={slides} />,
    },
    {
      id: 1,
      label: 'Carousel with text',
      component: <CarouselWithText slides={slides} />,
    },
    {
      id: 2,
      label: 'Framer Carousel',
      component: <FramerCarousel slides={slides} />,
    },
    {
      id: 3,
      label: 'Framer Image Carousel',
      component: <FramerImageCarousel slides={slides} />,
    },
  ]

  return (
    <div className="space-y-10">
      {list.map((item) => (
        <div key={item.id} className="space-y-6">
          <p className="text-title-2 font-semibold text-branding-secondary-500">
            {item.label}
          </p>
          <div>{item.component}</div>
        </div>
      ))}
    </div>
  )
}

export default CarouselList
