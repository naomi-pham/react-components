import { Carousel, CarouselWithText } from "../carousel";
import { slides } from "./slides";

const UiList = [
  {
    id: 0,
    label: "Carousel",
    component: <Carousel slides={slides} />,
  },
  {
    id: 1,
    label: "Carousel with text",
    component: <CarouselWithText slides={slides} />,
  },
];

export default UiList;
