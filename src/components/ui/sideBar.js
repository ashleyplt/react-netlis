import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Link, NavLink } from 'react-router-dom'

export const Sidebar = () => {
  const [tipoorden, setMenu] = useState([])
  const [area, setArea] = useState([])

  const [resp, setGitData] = useState({ tipo: [], area: [] });

  useEffect(() => {
    const fetchData = async () => {
      const respTipo = await axios(
        `https://localhost:5001/api/tipoorden`
      );
      const respArea = await axios(
        `https://localhost:5001/api/arealabservicio`
      );

      setGitData({ tipo: respTipo.data, area: respArea.data });
    };

    fetchData();
  }, []);

  function toOrden(e, idtipo){
    e.preventDefault();
    window.open('/ordenes?id='+idtipo, '_parent');
  }
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
                <a href="#" class="nav-link">
                  <i class="nav-icon fas fa-tachometer-alt"></i>
                  <p>
                    Orden
                    <i class="right fas fa-angle-left"></i>
                  </p>
                </a>
                <ul class="nav nav-treeview">
                {resp.tipo.map((orden)=>(
                    <li class="nav-item">
                    <a href="#" onClick={e => toOrden(e, orden.idTipoOrden)} class="nav-link">
                      <i class="far fa-circle nav-icon"></i>
                      <p>{orden.descripcion}</p>
                    </a>
                  </li>
                  ))}
                </ul>
              </li> 
            </ul>
            <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="true">
              <li class="nav-item menu-open">
                <a href="#" class="nav-link">
                  <i class="nav-icon fas fa-tachometer-alt"></i>
                  <p>
                    Área de laboratorio
                    <i class="right fas fa-angle-left"></i>
                  </p>
                </a>
                <ul class="nav nav-treeview">
                {resp.area.map((orden)=>(
                    <li class="nav-item">
                    <a href="#" class="nav-link">
                      <i class="far fa-circle nav-icon"></i>
                      <p>{orden.idTipoOrden}</p>
                    </a>
                  </li>
                  ))}
                </ul>
              </li> 
            </ul>
          </nav> 
          
        </div> 
      </aside>
    )
}