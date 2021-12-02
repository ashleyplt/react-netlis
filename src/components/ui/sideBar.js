import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const Sidebar = () => {
    return ( 

        <aside class="main-sidebar sidebar-dark-primary elevation-4"> 
        <a href="index3.html" class="brand-link">
            <span class="brand-text font-weight-bold ml-5" > Net Lis</span>
        </a>
     
        <div class="sidebar"> 
          <div class="user-panel mt-3 pb-3 mb-3 d-flex">
          
            <div class="info">
              <a href="#" class="d-block">Adamary Rivas</a>
            </div>
          </div>
  
            <nav class="mt-2">
            <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="true">
                  <li class="nav-item menu-open">
                <a href="#" class="nav-link active">
                  <i class="nav-icon fas fa-tachometer-alt"></i>
                  <p>
                    Orden
                    <i class="right fas fa-angle-left"></i>
                  </p>
                </a>
                <ul class="nav nav-treeview">
                  <li class="nav-item">
                    <a href="./xd" class="nav-link active">
                      <i class="far fa-circle nav-icon"></i>
                      <p>Cita</p>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="./index2.html" class="nav-link">
                      <i class="far fa-circle nav-icon"></i>
                      <p>Emergencia</p>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="./index3.html" class="nav-link">
                      <i class="far fa-circle nav-icon"></i>
                      <p>Rutina</p>
                    </a>
                  </li>
                </ul>
              </li>
              <li>
              <a href="./Resultados" className="ml-4"><i class="fas fa-poll-h"></i> Resultados </a>  
              </li> 
              </ul>
          </nav> 
        </div> 
      </aside>
    )
}