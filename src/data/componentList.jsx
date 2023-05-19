import {
  Carousel,
  CarouselWithText,
  FramerCarousel,
  FramerImageCarousel,
} from 'components/carousel'
import { slides } from './carouselData'
import {
  ExitAnimation,
  FollowPointer,
  Gestures,
  StaggerChildren,
} from 'components/framer'
import { Stepper } from 'components/stepper'
import { Select } from 'components/select'
import { AccordionComponent, AccordionMenu } from 'components/accordion'
import { Toggle } from 'components/toggle'

const componentList = [
  {
    id: 12,
    label: 'Toggle',
    component: <Toggle />,
  },
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
    label: 'Framer carousel',
    component: <FramerCarousel />,
  },
  {
    id: 3,
    label: 'Framer carousel',
    component: <FollowPointer />,
  },
  {
    id: 4,
    label: 'Framer carousel',
    component: <Gestures />,
  },
  {
    id: 5,
    label: 'Framer carousel',
    component: <StaggerChildren />,
  },
  {
    id: 6,
    label: 'Framer carousel',
    component: <ExitAnimation />,
  },
  {
    id: 7,
    label: 'Framer image carousel',
    component: <FramerImageCarousel />,
  },
  {
    id: 8,
    label: 'Stepper',
    component: <Stepper />,
  },
  {
    id: 9,
    label: 'Select',
    component: <Select />,
  },
  {
    id: 10,
    label: 'Accordion',
    component: <AccordionComponent />,
  },
  {
    id: 11,
    label: 'Accordion menu',
    component: <AccordionMenu />,
  },
]

export default componentList
