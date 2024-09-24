
import React from 'react';
interface AccordionProps {
  items: {
    title: string,
    icon?: () => React.ReactNode,
    render: () => React.ReactNode
  }[]
  id?: string
}
const Accordion = (props: AccordionProps) => {

  const [active, setActive] = React.useState(0);
  return (
    <div className="accordion mt-3 accordion-header-primary" id={props.id || "accordionWithIcon"}>
      {
        props.items.map((e, index) => (
          <div className={`card accordion-item ${active === index ? 'active' : ''}`} key={index}>
            <h2 className="accordion-header d-flex align-items-center">
              <button
                type="button"
                className="accordion-button"
                onClick={() => setActive(index)}
              >
                {e.icon && e.icon()}
                {e.title}
              </button>
            </h2>
            <div id="accordionWithIcon-1" className={`accordion-collapse collapse 
            ${active === index ? 'show' : ''}`} data-bs-parent="#accordionWithIcon">
              <div className="accordion-body">
                {e.render()}
              </div>
            </div>
          </div>
        ))
      }

    </div>
  )
}
export default Accordion;