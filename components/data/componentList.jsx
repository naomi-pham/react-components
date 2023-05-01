import { AccordionComponent } from "../accordion";
import AccordionMenu from "../accordion/AccordionMenu";
import { Carousel, CarouselWithText, FramerCarousel } from "../carousel";
import { Select } from "../select";
import { Stepper } from "../stepper";
import { slides } from "./carouselData";

const componentList = [
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
    label: "Framer carousel",
    component: <FramerCarousel />,
  },
  {
    id: 3,
    label: "Stepper",
    component: <Stepper />,
  },
  {
    id: 4,
    label: "Select",
    component: <Select />,
  },
  {
    id: 5,
    label: "Accordion",
    component: <AccordionComponent />,
  },
  {
    id: 6,
    label: "Accordion menu",
    component: <AccordionMenu />,
  },
];

export default componentList;
