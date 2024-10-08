import React from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar'
import 'react-perfect-scrollbar/dist/css/styles.css';

export interface NavbarProps{
  isSearchable:boolean;
  onSearch?: (text:string)=>void;
  optionsMenuProfile:{
      children: React.ReactNode
      onClick: () => void
      isDivider?: boolean
  }[];
  notification: ItemsNotification[];
  title:string;
  viewMoreText:string
  color: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
  avatar:string;
}

export interface ItemsNotification{
  leftIcon: React.ReactNode;
  title: string;
  subtitle:string;
  time:string;
  isNew:boolean;
}
const Navbar = (props:NavbarProps)=>{

  const [openNotification,setOpenNotification] = React.useState(false)
  const [openProfileMenu,setOpenProfileMenu] = React.useState(false)
  const [openSearch,setOpenSearch]= React.useState(false)

  return(
    <nav className={`layout-navbar navbar navbar-expand-xl align-items-center ${props.color?"bg-"+props.color:"bg-navbar-theme"}`}
     id="layout-navbar">
      <div className="container-xxl">
        <div className="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none">
          <a className="nav-item nav-link px-0 me-xl-4" href="javascript:void(0)">
            <i className="bx bx-menu bx-sm"></i>
          </a>
        </div>

        <div className="navbar-nav-right d-flex align-items-center" id="navbar-collapse">
          <div className="navbar-nav align-items-center">
            <div className="nav-item navbar-search-wrapper mb-0">
              <a className="nav-item nav-link search-toggler px-0" href="javascript:void(0);"
              onClick={()=>setOpenSearch(!openSearch)}
              >
                <i className="bx bx-search-alt bx-sm"></i>
                <span className="d-none d-md-inline-block">Search (Ctrl+/)</span>
              </a>
            </div>
          </div>

          <ul className="navbar-nav flex-row align-items-center ms-auto">
            <li className="nav-item dropdown-language dropdown me-2 me-xl-0">
              <a className="nav-link dropdown-toggle hide-arrow" href="javascript:void(0);" 
              data-bs-toggle="dropdown">
                <i className="bx bx-globe bx-sm"></i>
              </a>
              <ul className="dropdown-menu dropdown-menu-end">
                <li>
                  <a
                    className="dropdown-item"
                    href="javascript:void(0);"
                    data-language="en"
                    data-text-direction="ltr">
                    <span className="align-middle">English</span>
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="javascript:void(0);"
                    data-language="fr"
                    data-text-direction="ltr">
                    <span className="align-middle">French</span>
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="javascript:void(0);"
                    data-language="ar"
                    data-text-direction="rtl">
                    <span className="align-middle">Arabic</span>
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="javascript:void(0);"
                    data-language="de"
                    data-text-direction="ltr">
                    <span className="align-middle">German</span>
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown-style-switcher dropdown me-2 me-xl-0">
              <a className="nav-link dropdown-toggle hide-arrow" href="javascript:void(0);" data-bs-toggle="dropdown">
                <i className="bx bx-sm"></i>
              </a>
              <ul className="dropdown-menu dropdown-menu-end dropdown-styles">
                <li>
                  <a className="dropdown-item" href="javascript:void(0);" data-theme="light">
                    <span className="align-middle"><i className="bx bx-sun me-2"></i>Light</span>
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="javascript:void(0);" data-theme="dark">
                    <span className="align-middle"><i className="bx bx-moon me-2"></i>Dark</span>
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="javascript:void(0);" data-theme="system">
                    <span className="align-middle"><i className="bx bx-desktop me-2"></i>System</span>
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown-shortcuts navbar-dropdown dropdown me-2 me-xl-0">
              <a
                className="nav-link dropdown-toggle hide-arrow"
                href="javascript:void(0);"
                data-bs-toggle="dropdown"
                data-bs-auto-close="outside"
                aria-expanded="false">
                <i className="bx bx-grid-alt bx-sm"></i>
              </a>
              <div className="dropdown-menu dropdown-menu-end py-0">
                <div className="dropdown-menu-header border-bottom">
                  <div className="dropdown-header d-flex align-items-center py-3">
                    <h5 className="text-body mb-0 me-auto">Shortcuts</h5>
                    <a
                      href="javascript:void(0)"
                      className="dropdown-shortcuts-add text-body"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Add shortcuts"
                      ><i className="bx bx-sm bx-plus-circle"></i></a>
                  </div>
                </div>
                <div className="dropdown-shortcuts-list scrollable-container">
                  <div className="row row-bordered overflow-visible g-0">
                    <div className="dropdown-shortcuts-item col">
                      <span className="dropdown-shortcuts-icon bg-label-secondary rounded-circle mb-2">
                        <i className="bx bx-calendar fs-4"></i>
                      </span>
                      <a href="app-calendar.html" className="stretched-link">Calendar</a>
                      <small className="text-muted mb-0">Appointments</small>
                    </div>
                    <div className="dropdown-shortcuts-item col">
                      <span className="dropdown-shortcuts-icon bg-label-secondary rounded-circle mb-2">
                        <i className="bx bx-food-menu fs-4"></i>
                      </span>
                      <a href="app-invoice-list.html" className="stretched-link">Invoice App</a>
                      <small className="text-muted mb-0">Manage Accounts</small>
                    </div>
                  </div>
                  <div className="row row-bordered overflow-visible g-0">
                    <div className="dropdown-shortcuts-item col">
                      <span className="dropdown-shortcuts-icon bg-label-secondary rounded-circle mb-2">
                        <i className="bx bx-user fs-4"></i>
                      </span>
                      <a href="app-user-list.html" className="stretched-link">User App</a>
                      <small className="text-muted mb-0">Manage Users</small>
                    </div>
                    <div className="dropdown-shortcuts-item col">
                      <span className="dropdown-shortcuts-icon bg-label-secondary rounded-circle mb-2">
                        <i className="bx bx-check-shield fs-4"></i>
                      </span>
                      <a href="app-access-roles.html" className="stretched-link">Role Management</a>
                      <small className="text-muted mb-0">Permission</small>
                    </div>
                  </div>
                  <div className="row row-bordered overflow-visible g-0">
                    <div className="dropdown-shortcuts-item col">
                      <span className="dropdown-shortcuts-icon bg-label-secondary rounded-circle mb-2">
                        <i className="bx bx-pie-chart-alt-2 fs-4"></i>
                      </span>
                      <a href="index.html" className="stretched-link">Dashboard</a>
                      <small className="text-muted mb-0">User Profile</small>
                    </div>
                    <div className="dropdown-shortcuts-item col">
                      <span className="dropdown-shortcuts-icon bg-label-secondary rounded-circle mb-2">
                        <i className="bx bx-cog fs-4"></i>
                      </span>
                      <a href="pages-account-settings-account.html" className="stretched-link">Setting</a>
                      <small className="text-muted mb-0">Account Settings</small>
                    </div>
                  </div>
                  <div className="row row-bordered overflow-visible g-0">
                    <div className="dropdown-shortcuts-item col">
                      <span className="dropdown-shortcuts-icon bg-label-secondary rounded-circle mb-2">
                        <i className="bx bx-help-circle fs-4"></i>
                      </span>
                      <a href="pages-faq.html" className="stretched-link">FAQs</a>
                      <small className="text-muted mb-0">FAQs & Articles</small>
                    </div>
                    <div className="dropdown-shortcuts-item col">
                      <span className="dropdown-shortcuts-icon bg-label-secondary rounded-circle mb-2">
                        <i className="bx bx-window-open fs-4"></i>
                      </span>
                      <a href="modal-examples.html" className="stretched-link">Modals</a>
                      <small className="text-muted mb-0">Useful Popups</small>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            {/* Quick links */}

            {/* Notification */}
            <li className="nav-item dropdown-notifications navbar-dropdown dropdown me-3 me-xl-2">
              <a
                className="nav-link dropdown-toggle hide-arrow"
                href="javascript:void(0);"
                data-bs-toggle="dropdown"
                data-bs-auto-close="outside"
                  onClick={()=>setOpenNotification(!openNotification)}
                aria-expanded="false">
                <i className="bx bx-bell bx-sm"></i>
                <span className="badge bg-danger rounded-pill badge-notifications">5</span>
              </a>
              <ul className={`dropdown-menu  dropdown-menu-end py-0 ${openNotification?'show':''}`}
              data-bs-popper
              >
                <li className="dropdown-menu-header border-bottom">
                  <div className="dropdown-header d-flex align-items-center py-3">
                    <h5 className="text-body mb-0 me-auto">{props.title}</h5>
                    <a
                      href="javascript:void(0)"
                      className="dropdown-notifications-all text-body"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Mark all as read"
                      ><i className="bx fs-4 bx-envelope-open"></i></a>
                  </div>
                </li>
                <li className="dropdown-notifications-list scrollable-container ">
                     <PerfectScrollbar>
                  <ul className="list-group list-group-flush">
                   
                    {
                      props.notification.map(e=>(
                        <li className="list-group-item list-group-item-action dropdown-notifications-item marked-as-read">
                          <div className="d-flex">
                            <div className="flex-shrink-0 me-3">
                              <div className="avatar">
                                {e.leftIcon}
                              </div>
                            </div>
                            <div className="flex-grow-1">
                              <h6 className="mb-1">{e.title}</h6>
                              <p className="mb-0">{e.subtitle}</p>
                              <small className="text-muted">{e.time}</small>
                            </div>
                            <div className="flex-shrink-0 dropdown-notifications-actions">
                             
                                {
                                  e.isNew && <a href="javascript:void(0)" className="dropdown-notifications-read"
                                ><span className="badge badge-dot"></span></a>
                                }
                              <a href="javascript:void(0)" className="dropdown-notifications-archive"
                                ><span className="bx bx-x"></span></a>
                            </div>
                          </div>
                        </li>
                      ))
                    }
                    
                  </ul>
                </PerfectScrollbar>

                </li>
                <li className="dropdown-menu-footer border-top">
                  <a href="javascript:void(0);" className="dropdown-item d-flex justify-content-center p-3">
                    {props.viewMoreText}
                  </a>
                </li>
              </ul>
            </li>
            {/*/ Notification */}

            {/* User */}
            <li className="nav-item navbar-dropdown dropdown-user dropdown">
              <a className="nav-link dropdown-toggle hide-arrow"
              onClick={()=>setOpenProfileMenu(!openProfileMenu)}
              href="javascript:void(0);" data-bs-toggle="dropdown">
                <div className="avatar avatar-online">
                  <img src={props.avatar}  className="rounded-circle" />
                </div>
              </a>
              <ul className={`dropdown-menu dropdown-menu-end ${openProfileMenu?"show":""}`}
              data-bs-popper
              >
                {
                  props.optionsMenuProfile.map((option,index)=>{
                    if(option.isDivider){
                      return <div className="dropdown-divider"></div>
                    }
                    return(
                      <li>
                        <a className="dropdown-item" href="javascript:void(0)"
                        onClick={option.onClick}
                        >
                          {option.children}
                        </a>
                      </li>
                    )
                  })
                }
                
              </ul>
            </li>
            {/*/ User */}
          </ul>
        </div>

        {/* Search Small Screens */}
        <div className={`navbar-search-wrapper search-input-wrapper container-xxl ${!openSearch?"d-none":""}`}>
          <input
            type="text"
            className="form-control search-input border-0"
            placeholder="Search..."
            aria-label="Search..." />
          <i className="bx bx-x bx-sm search-toggler cursor-pointer"
          onClick={()=>setOpenSearch(!openSearch)}
          ></i>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;