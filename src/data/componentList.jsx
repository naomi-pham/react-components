import AccordionList from 'components/accordion'
import CarouselList from 'components/carousel'
import FramerList from 'components/framer'
import Select from 'components/select'
import Stepper from 'components/stepper'
import Toggle from 'components/toggle'

const componentList = [
  {
    id: 0,
    label: 'Toggle',
    component: <Toggle />,
  },
  {
    id: 1,
    label: 'Carousel',
    component: <CarouselList />,
  },

  {
    id: 2,
    label: 'Framer motion',
    component: <FramerList />,
  },
  {
    id: 3,
    label: 'Stepper',
    component: <Stepper />,
  },
  {
    id: 4,
    label: 'Select',
    component: <Select />,
  },
  {
    id: 5,
    label: 'Accordion',
    component: <AccordionList />,
  },
]

export default componentList
