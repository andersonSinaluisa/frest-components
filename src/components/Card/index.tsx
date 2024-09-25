import React from "react";


interface CardProps {
  children: React.ReactNode;
  classes?: string;
}
const Card = (props: CardProps) => {
  return <div className={"card mb-4" + (props.classes ? " " + props.classes : "")}>
    {props.children}

  </div>
}

export default Card;