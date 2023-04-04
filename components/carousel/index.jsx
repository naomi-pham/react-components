import { useEffect, useState } from "react";
import { throttle } from "../utils/throttle";
import useWindowResize from "../@hooks/useWindowResize";
import { IconChevron } from "../icons";
import CarouselCard from "../@ui/CarouselCard";

const Carousel = ({ slides }) => {
  const totalSlides = slides.length;
  const [postsPerSlide, setPostsPerSlide] = useState(null);
  const [slidePosition, setSlidePosition] = useState(0);

  const windowSize = useWindowResize();

  useEffect(() => {
    if (windowSize.width > 1440) {
      setPostsPerSlide(4);
    } else if (windowSize.width > 1024) {
      setPostsPerSlide(3);
    } else if (windowSize.width > 640) {
      setPostsPerSlide(2);
    } else {
      setPostsPerSlide(1);
    }
  }, [windowSize]);

  const moveToRight = () => {
    setSlidePosition((prevSlidePosition) => prevSlidePosition + 1);
  };

  const moveToLeft = () => {
    setSlidePosition((prevSlidePosition) => prevSlidePosition - 1);
  };

  return (
    <div className="flex">
      <button
        className="rotate-180 px-1 text-slate-700 disabled:cursor-not-allowed disabled:opacity-50"
        onClick={throttle(() => moveToLeft(), 200)}
        disabled={slidePosition === 0}
      >
        <div className="rounded-full border border-slate-600 p-2">
          <IconChevron />
        </div>
      </button>

      <div className="mx-4 flex-1 overflow-hidden">
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
        className="px-1 text-slate-700 disabled:cursor-not-allowed disabled:opacity-50"
        onClick={throttle(() => moveToRight(), 200)}
        disabled={slidePosition === totalSlides - postsPerSlide}
      >
        <div className="rounded-full border border-slate-600 p-2">
          <IconChevron />
        </div>
      </button>
    </div>
  );
};

export default Carousel;
