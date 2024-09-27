import React from 'react';


interface SidebarProps{
  icon:React.ReactNode;
  appName:string;
  
}


const Sidebar = ()=>{
  return(
      <aside id="layout-menu" class="layout-menu menu-vertical menu bg-menu-theme">
          <div class="app-brand demo">
            <a href="index.html" class="app-brand-link">
              <span class="app-brand-logo demo">
                
              </span>
              <span class="app-brand-text demo menu-text fw-bold ms-2">Frest</span>
            </a>

            <a href="javascript:void(0);" class="layout-menu-toggle menu-link text-large ms-auto">
              <i class="bx menu-toggle-icon d-none d-xl-block fs-4 align-middle"></i>
              <i class="bx bx-x d-block d-xl-none bx-sm align-middle"></i>
            </a>
          </div>

          <div class="menu-divider mt-0"></div>

          <div class="menu-inner-shadow"></div>

          <ul class="menu-inner py-1">
            <!-- Page -->
            <li class="menu-item active">
              <a href="index.html" class="menu-link">
                <i class="menu-icon tf-icons bx bx-home-circle"></i>
                <div data-i18n="Page 1">Page 1</div>
              </a>
            </li>
            <li class="menu-item">
              <a href="page-2.html" class="menu-link">
                <i class="menu-icon tf-icons bx bx-detail"></i>
                <div data-i18n="Page 2">Page 2</div>
              </a>
            </li>
          </ul>
        </aside>
  )
}