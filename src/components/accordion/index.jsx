import AccordionComponent from './AccordionComponent'
import AccordionMenu from './AccordionMenu'

const AccordionList = () => {
  const list = [
    {
      id: 0,
      label: 'Accordion with space',
      component: <AccordionComponent />,
    },
    {
      id: 1,
      label: 'Accordion without space',
      component: <AccordionMenu />,
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

export default AccordionList
