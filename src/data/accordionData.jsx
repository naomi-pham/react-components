import { IconMail, IconSettings, IconUser } from 'components/common/Icons'

const accordionData = [
  {
    id: 0,
    title: 'Title 1',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, possimus necessitatibus reiciendis qui laudantium voluptatum sit vel saepe nesciunt enim porro dolor assumenda eligendi eveniet commodi velit aperiam debitis eius',
  },
  {
    id: 1,
    title: 'Title 2',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, possimus necessitatibus reiciendis qui laudantium voluptatum sit vel saepe nesciunt enim porro dolor assumenda eligendi eveniet commodi velit aperiam debitis eius',
  },
  {
    id: 2,
    title: 'Title 3',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, possimus necessitatibus reiciendis qui laudantium voluptatum sit vel saepe nesciunt enim porro dolor assumenda eligendi eveniet commodi velit aperiam debitis eius',
  },
]

export const flatAccordionData = [
  {
    id: 0,
    icon: <IconUser />,
    label: 'Introduction',
    dropdown: ['Overview', 'Installation'],
  },
  {
    id: 1,
    icon: <IconMail />,
    label: 'Messages',
    dropdown: ['Inbox'],
  },
  {
    id: 2,
    icon: <IconSettings />,
    label: 'Settings',
    dropdown: ['Profile', 'Pro account', 'Billing'],
  },
]

export default accordionData
