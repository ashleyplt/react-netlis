import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const Navbar = () => {
    return (
        <nav class="main-header navbar navbar-expand navbar-white navbar-light"> 
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></a>
          </li>
          <li class="nav-item d-none d-sm-inline-block">
            <a href="/" class="nav-link"><i class="fas fa-home"></i> Home</a>
            
          </li>
        </ul>
      </nav>
    )
}