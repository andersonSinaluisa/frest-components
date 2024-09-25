import React from "react";

interface CardTitleProps {
  children: React.ReactNode;
  classes?: string;
}

const CardTitle = (props: CardTitleProps) => {
  return (
    <div className={"card-title" + (props.classes ? " " + props.classes : "")}>
      {props.children}
    </div>
  )
}

export default CardTitle;