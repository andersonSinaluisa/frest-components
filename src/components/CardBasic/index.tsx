import React from "react";



interface CardBasicProps {
  src: string;
  title: string;
  text: string;
  haveAction: boolean;
  actionText: string;
  onClick: () => void;
  colorAction: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
  isOutline: boolean;
}
const CardBasic = (props: CardBasicProps) => {
  return (
    <div className="col-md-6 col-lg-4 mb-3">
      <div className="card h-100">
        <img className="card-img-top" src={props.src} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">
            {props.title}
          </h5>
          <p className="card-text">
            {props.text}
          </p>
          {
            props.haveAction && (
              <a href="javascript:void(0)" className={`btn ${props.isOutline ? `btn-outline-${props.colorAction}` : `btn-${props.colorAction}`}`}
                onClick={props.onClick}>
                {props.actionText}
              </a>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default CardBasic;