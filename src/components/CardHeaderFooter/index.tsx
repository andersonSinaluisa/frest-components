import React from "react";


interface CardHeaderFooterProps {
  src: string;
  title: string;
  alt: string;
  subtitle: string;
  footerText: string;
  actions: {
    text: string;
    onClick: () => void;
    color: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
    isOutline: boolean;
  }[]
}
const CardHeaderFooter = (props: CardHeaderFooterProps) => {

  return (
    <div className="col-md-6 col-lg-4 mb-3">
      <div className="card h-100">
        <div className="card-body">
          <h5 className="card-title">
            {props.title}
          </h5>
          <h6 className="card-subtitle text-muted">
            {props.subtitle}
          </h6>
        </div>
        <img className="img-fluid" src={props.src} alt={props.alt} />
        <div className="card-body">
          <p className="card-text">
            {props.footerText}
          </p>
          <div className="d-flex  justify-content-between">
            {
              props.actions.map((action, index) => (
                <a key={index} href="javascript:void(0)" className={`btn ${action.isOutline ? `btn-outline-${action.color}` : `btn-${action.color}`}`}
                  onClick={action.onClick}>
                  {action.text}
                </a>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )

}

export default CardHeaderFooter;