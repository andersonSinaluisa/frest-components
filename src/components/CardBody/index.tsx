import React from "react";

interface CardBodyProps {
  children: React.ReactNode;
  classes?: string;
}

const CardBody = (props: CardBodyProps) => (
  <div className={"card-body" + (props.classes ? " " + props.classes : "")}>
    {props.children}
  </div>
)

export default CardBody;