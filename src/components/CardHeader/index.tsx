import React from "react";

interface CardHeaderProps {
  children: React.ReactNode;
}
const CardHeader = (props: CardHeaderProps) => {
  return (
    <div className="card-header">
      {props.children}
    </div>
  )
}

export default CardHeader;