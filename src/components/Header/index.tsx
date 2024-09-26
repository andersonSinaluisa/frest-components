

const Header = () => {
  return(
    <nav className="layout-navbar shadow-none py-0 navbar-active">
      <div className="container">
        <div className="navbar navbar-expand-lg landing-navbar px-3 px-md-4">
          {/* Menu logo wrapper: Start */}
          <div className="navbar-brand app-brand demo d-flex py-0 me-4">
            {/* Mobile menu toggle: Start*/}
            <button className="navbar-toggler border-0 px-0 me-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <i className="tf-icons bx bx-menu bx-sm align-middle"></i>
            </button>
            {/* Mobile menu toggle: End*/}
            <a href="landing-page.html" className="app-brand-link">
              <span className="app-brand-logo demo">
                <svg width="26px" height="26px" viewBox="0 0 26 26" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                  <title>icon</title>
                  <defs>
                    <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-1">
                      <stop stop-color="#5A8DEE" offset="0%"></stop>
                      <stop stop-color="#699AF9" offset="100%"></stop>
                    </linearGradient>
                    <linearGradient x1="0%" y1="0%" x2="100%" y2="100%" id="linearGradient-2">
                      <stop stop-color="#FDAC41" offset="0%"></stop>
                      <stop stop-color="#E38100" offset="100%"></stop>
                    </linearGradient>
                  </defs>
                  <g id="Pages" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g id="Login---V2" transform="translate(-667.000000, -290.000000)">
                      <g id="Login" transform="translate(519.000000, 244.000000)">
                        <g id="Logo" transform="translate(148.000000, 42.000000)">
                          <g id="icon" transform="translate(0.000000, 4.000000)">
                            <path d="M13.8863636,4.72727273 C18.9447899,4.72727273 23.0454545,8.82793741 23.0454545,13.8863636 C23.0454545,18.9447899 18.9447899,23.0454545 13.8863636,23.0454545 C8.82793741,23.0454545 4.72727273,18.9447899 4.72727273,13.8863636 C4.72727273,13.5423509 4.74623858,13.2027679 4.78318172,12.8686032 L8.54810407,12.8689442 C8.48567157,13.19852 8.45300462,13.5386269 8.45300462,13.8863636 C8.45300462,16.887125 10.8856023,19.3197227 13.8863636,19.3197227 C16.887125,19.3197227 19.3197227,16.887125 19.3197227,13.8863636 C19.3197227,10.8856023 16.887125,8.45300462 13.8863636,8.45300462 C13.5386269,8.45300462 13.19852,8.48567157 12.8689442,8.54810407 L12.8686032,4.78318172 C13.2027679,4.74623858 13.5423509,4.72727273 13.8863636,4.72727273 Z" id="Combined-Shape" fill="#4880EA"></path>
                            <path d="M13.5909091,1.77272727 C20.4442608,1.77272727 26,7.19618701 26,13.8863636 C26,20.5765403 20.4442608,26 13.5909091,26 C6.73755742,26 1.18181818,20.5765403 1.18181818,13.8863636 C1.18181818,13.540626 1.19665566,13.1982714 1.22574292,12.8598734 L6.30410592,12.859962 C6.25499466,13.1951893 6.22958398,13.5378796 6.22958398,13.8863636 C6.22958398,17.8551125 9.52536149,21.0724191 13.5909091,21.0724191 C17.6564567,21.0724191 20.9522342,17.8551125 20.9522342,13.8863636 C20.9522342,9.91761479 17.6564567,6.70030817 13.5909091,6.70030817 C13.2336969,6.70030817 12.8824272,6.72514561 12.5388136,6.77314791 L12.5392575,1.81561642 C12.8859498,1.78721495 13.2366963,1.77272727 13.5909091,1.77272727 Z" id="Combined-Shape2" fill="url(#linearGradient-1)"></path>
                            <rect id="Rectangle" fill="url(#linearGradient-2)" x="0" y="0" width="7.68181818" height="7.68181818"></rect>
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
              </span>
              <span className="app-brand-text demo menu-text fw-bold ms-2 ps-1">Frest</span>
            </a>
          </div>
          {/* Menu logo wrapper: End */}
          {/* Menu wrapper: Start */}
          <div className="collapse navbar-collapse landing-nav-menu" id="navbarSupportedContent">
            <button className="navbar-toggler border-0 text-heading position-absolute end-0 top-0 scaleX-n1-rtl" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <i className="tf-icons bx bx-x bx-sm"></i>
            </button>
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <a className="nav-link fw-medium active" aria-current="page" href="landing-page.html#landingHero">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-medium" href="landing-page.html#landingFeatures">Features</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-medium" href="landing-page.html#landingTeam">Team</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-medium" href="landing-page.html#landingFAQ">FAQ</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-medium" href="landing-page.html#landingContact">Contact us</a>
              </li>
              <li className="nav-item mega-dropdown">
                <a href="javascript:void(0);" className="nav-link dropdown-toggle navbar-ex-14-mega-dropdown mega-dropdown fw-medium" aria-expanded="false" data-bs-toggle="mega-dropdown" data-trigger="hover">
                  <span data-i18n="Pages">Pages</span>
                </a>
                <div className="dropdown-menu p-4">
                  <div className="row gy-4">
                    <div className="col-12 col-lg">
                      <div className="h6 d-flex align-items-center mb-2 mb-lg-3">
                        <div className="avatar avatar-sm flex-shrink-0 me-2">
                          <span className="avatar-initial rounded bg-label-primary"><i className="bx bx-grid-alt"></i></span>
                        </div>
                        <span className="ps-1">Other</span>
                      </div>
                      <ul className="nav flex-column">
                        <li className="nav-item">
                          <a className="nav-link mega-dropdown-link" href="pricing-page.html">
                            <i className="bx bx-radio-circle me-2"></i>
                            <span data-i18n="Pricing">Pricing</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link mega-dropdown-link" href="payment-page.html">
                            <i className="bx bx-radio-circle me-2"></i>
                            <span data-i18n="Payment">Payment</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link mega-dropdown-link" href="checkout-page.html">
                            <i className="bx bx-radio-circle me-2"></i>
                            <span data-i18n="Checkout">Checkout</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link mega-dropdown-link" href="help-center-landing.html">
                            <i className="bx bx-radio-circle me-2"></i>
                            <span data-i18n="Help Center">Help Center</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-12 col-lg">
                      <div className="h6 d-flex align-items-center mb-2 mb-lg-3">
                        <div className="avatar avatar-sm flex-shrink-0 me-2">
                          <span className="avatar-initial rounded bg-label-primary"><i className="bx bx-lock-open"></i></span>
                        </div>
                        <span className="ps-1">Auth Demo</span>
                      </div>
                      <ul className="nav flex-column">
                        <li className="nav-item">
                          <a className="nav-link mega-dropdown-link" href="../vertical-menu-template/auth-login-basic.html" target="_blank">
                            <i className="bx bx-radio-circle me-2"></i>
                            Login (Basic)
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link mega-dropdown-link" href="../vertical-menu-template/auth-login-cover.html" target="_blank">
                            <i className="bx bx-radio-circle me-2"></i>
                            Login (Cover)
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link mega-dropdown-link" href="../vertical-menu-template/auth-register-basic.html" target="_blank">
                            <i className="bx bx-radio-circle me-2"></i>
                            Register (Basic)
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link mega-dropdown-link" href="../vertical-menu-template/auth-register-cover.html" target="_blank">
                            <i className="bx bx-radio-circle me-2"></i>
                            Register (Cover)
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link mega-dropdown-link" href="../vertical-menu-template/auth-register-multisteps.html" target="_blank">
                            <i className="bx bx-radio-circle me-2"></i>
                            Register (Multi-steps)
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link mega-dropdown-link" href="../vertical-menu-template/auth-forgot-password-basic.html" target="_blank">
                            <i className="bx bx-radio-circle me-2"></i>
                            Forgot Password (Basic)
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link mega-dropdown-link" href="../vertical-menu-template/auth-forgot-password-cover.html" target="_blank">
                            <i className="bx bx-radio-circle me-2"></i>
                            Forgot Password (Cover)
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link mega-dropdown-link" href="../vertical-menu-template/auth-reset-password-basic.html" target="_blank">
                            <i className="bx bx-radio-circle me-2"></i>
                            Reset Password (Basic)
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link mega-dropdown-link" href="../vertical-menu-template/auth-reset-password-cover.html" target="_blank">
                            <i className="bx bx-radio-circle me-2"></i>
                            Reset Password (Cover)
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-12 col-lg">
                      <div className="h6 d-flex align-items-center mb-2 mb-lg-3">
                        <div className="avatar avatar-sm flex-shrink-0 me-2">
                          <span className="avatar-initial rounded bg-label-primary"><i className="bx bx-image-alt"></i></span>
                        </div>
                        <span className="ps-1">Other</span>
                      </div>
                      <ul className="nav flex-column">
                        <li className="nav-item">
                          <a className="nav-link mega-dropdown-link" href="../vertical-menu-template/pages-misc-error.html" target="_blank">
                            <i className="bx bx-radio-circle me-2"></i>
                            Error
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link mega-dropdown-link" href="../vertical-menu-template/pages-misc-under-maintenance.html" target="_blank">
                            <i className="bx bx-radio-circle me-2"></i>
                            Under Maintenance
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link mega-dropdown-link" href="../vertical-menu-template/pages-misc-comingsoon.html" target="_blank">
                            <i className="bx bx-radio-circle me-2"></i>
                            Coming Soon
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link mega-dropdown-link" href="../vertical-menu-template/pages-misc-not-authorized.html" target="_blank">
                            <i className="bx bx-radio-circle me-2"></i>
                            Not Authorized
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link mega-dropdown-link" href="../vertical-menu-template/auth-verify-email-basic.html" target="_blank">
                            <i className="bx bx-radio-circle me-2"></i>
                            Verify Email (Basic)
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link mega-dropdown-link" href="../vertical-menu-template/auth-verify-email-cover.html" target="_blank">
                            <i className="bx bx-radio-circle me-2"></i>
                            Verify Email (Cover)
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link mega-dropdown-link" href="../vertical-menu-template/auth-two-steps-basic.html" target="_blank">
                            <i className="bx bx-radio-circle me-2"></i>
                            Two Steps (Basic)
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link mega-dropdown-link" href="../vertical-menu-template/auth-two-steps-cover.html" target="_blank">
                            <i className="bx bx-radio-circle me-2"></i>
                            Two Steps (Cover)
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-4 d-none d-lg-block">
                      <div className="bg-body nav-img-col p-2">
                        <img src="../../assets/img/front-pages/misc/nav-item-col-img.png" alt="nav item col image" className="w-100"/>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-medium" href="../vertical-menu-template/index.html" target="_blank">Admin</a>
              </li>
            </ul>
          </div>
          <div className="landing-menu-overlay d-lg-none"></div>
          {/* Menu wrapper: End */}
          {/* Toolbar: Start */}
          <ul className="navbar-nav flex-row align-items-center ms-auto">
            {/* Style Switcher */}
            <li className="nav-item dropdown-style-switcher dropdown me-2 me-xl-0">
              <a className="nav-link dropdown-toggle hide-arrow" href="javascript:void(0);" data-bs-toggle="dropdown">
                <i className="bx bx-sm bx-sun"></i>
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
            {/* / Style Switcher*/}

            {/* navbar button: Start */}
            <li>
              <a href="../vertical-menu-template/auth-login-cover.html" className="btn btn-primary" target="_blank"><span className="tf-icons bx bx-user me-md-1"></span><span className="d-none d-md-block">Login/Register</span></a>
            </li>
            {/* navbar button: End */}
          </ul>
          {/* Toolbar: End */}
        </div>
      </div>
    </nav>
  )
}

export default Header;