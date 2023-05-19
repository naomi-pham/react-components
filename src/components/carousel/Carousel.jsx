import { IconChevron } from 'components/common/Icons'
import { useEffect, useState } from 'react'
import useWindowResize from 'src/@hooks/useWindowResize'
import { throttle } from 'src/utils/throttle'
import CarouselCard from './CarouselCard'

const Carousel = ({ slides }) => {
  const totalSlides = slides.length
  const [postsPerSlide, setPostsPerSlide] = useState(null)
  const [slidePosition, setSlidePosition] = useState(0)

  const windowSize = useWindowResize()

  useEffect(() => {
    if (windowSize.width > 1440) {
      return setPostsPerSlide(4)
    }
    if (windowSize.width > 1024) {
      return setPostsPerSlide(3)
    }
    if (windowSize.width > 640) {
      return setPostsPerSlide(2)
    }
    return setPostsPerSlide(1)
  }, [windowSize])

  const moveToRight = () => {
    setSlidePosition((prevSlidePosition) => prevSlidePosition + 1)
  }

  const moveToLeft = () => {
    setSlidePosition((prevSlidePosition) => prevSlidePosition - 1)
  }

  return (
    <div className="relative">
      <button
        type="button"
        className="absolute top-1/2 left-0 z-10 h-full w-10 -translate-y-1/2 rotate-180 px-2 text-slate-700 disabled:cursor-not-allowed disabled:opacity-50"
        onClick={throttle(() => moveToLeft(), 200)}
        disabled={slidePosition === 0}
      >
        <IconChevron />
      </button>

      <div className="mx-auto w-[calc(100%-80px)] overflow-hidden">
        <div
          className="flex transition duration-500"
          style={{
            transform: `translateX(-${slidePosition * (100 / postsPerSlide)}%)`,
          }}
        >
          {slides.map((item) => (
            <CarouselCard
              key={item.id}
              item={item}
              postsPerSlide={postsPerSlide}
            />
          ))}
        </div>
      </div>

      <button
        type="button"
        className="absolute top-1/2 right-0 z-10 h-full w-10 -translate-y-1/2 px-2 text-slate-700 disabled:cursor-not-allowed disabled:opacity-50"
        onClick={throttle(() => moveToRight(), 200)}
        disabled={slidePosition === totalSlides - postsPerSlide}
      >
        <IconChevron />
      </button>
    </div>
  )
}

export default Carousel
