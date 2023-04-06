import { Carousel, CarouselWithText } from "../carousel";
import { Filter } from "../filter";
import { Stepper } from "../stepper";
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
  {
    id: 2,
    label: "Stepper",
    component: <Stepper />,
  },
  {
    id: 3,
    label: "Filter",
    component: <Filter />,
  },
];

export default UiList;
