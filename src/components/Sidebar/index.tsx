import React from 'react';


interface SidebarProps{
  icon:React.ReactNode;
  appName:string;
  items:{
    title:string;
    icon?:React.ReactNode;
    onClick:()=>void
  }[]
}


const Sidebar = (props: SidebarProps)=>{
  return(
      <aside id="layout-menu" className="layout-menu menu-vertical menu bg-menu-theme">
          <div className="app-brand demo">
            <a href="index.html" className="app-brand-link">
              <span className="app-brand-logo demo">
                {props.icon}
              </span>
              <span className="app-brand-text demo menu-text fw-bold ms-2">{props.appName}</span>
            </a>

            <a href="javascript:void(0);" className="layout-menu-toggle menu-link text-large ms-auto">
              <i className="bx menu-toggle-icon d-none d-xl-block fs-4 align-middle"></i>
              <i className="bx bx-x d-block d-xl-none bx-sm align-middle"></i>
            </a>
          </div>

          <div className="menu-divider mt-0"></div>

          <div className="menu-inner-shadow"></div>

          <ul className="menu-inner py-1">
            {
              props.items.map(e=>(
                <li className="menu-item active">
                  <a href="#" className="menu-link" onClick={e.onClick}>
                    {e.icon && e.icon}
                    <div data-i18n="Page 1">{e.title}</div>
                  </a>
                </li>
              ))
            }
            
          </ul>
        </aside>
  )
}

export default Sidebar;