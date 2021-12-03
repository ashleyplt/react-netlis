import React, { useEffect, useState } from "react";
//import { DataGrid } from '@mui/x-data-grid';

const OrdenTabla = () => {
    const querystring = window.location.search;
	const params = new URLSearchParams(querystring);
    const [tableData, setTableData] = useState([])

    useEffect(()=>{
        fetch("https://localhost:5001/api/Ordenes/"+params.get("id"))
        .then((data) => data.json())
        .then((data) => setTableData(data))
    })
    return (

        <div class="container-fluid mt-4">
        <div class="card shadow mb-4  ">
        <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">Orden</h6>
        </div>

        <div class="card-body mb-5">
		
		<table class="table table-success table-stripe">
			<thead>
				<tr>
				  <th scope="col">No. Orden</th>
                  <th scope="col">Asistencia</th>
				  <th scope="col">Observaciones</th>
				  <th scope="col">Fecha de cita</th>
				  <th scope="col">Fecha de orden</th>
				</tr>
			</thead>
			<tbody>
				{tableData.map((orden)=>(
					<tr>
					<td>{orden.nOrden}</td>
					<td>{orden.asistencia}</td>
					<td>{orden.observaciones}</td>
                    <td>{orden.fechaCita}</td>
                    <td>{orden.fechaOrden}</td>
					<td>
						<span title="Ver detalles">
							<a onclick="" >
								<i class="fas fa-eye"></i>
							</a>
						</span>
						<span title="Ver examenes">
							<a onclick="" >
								<i class="fas fa-list"></i>
							</a>
						</span>
					</td>
					</tr>
				))}
			</tbody>
			<tfoot>
				<tr>
				<th scope="col">No. Orden</th>
                  <th scope="col">Asistencia</th>
				  <th scope="col">Observaciones</th>
				  <th scope="col">Fecha de cita</th>
				  <th scope="col">Fecha de orden</th>
				</tr>
			</tfoot>
			
			
		</table>
		
        
            
        </div>
        <div class="card-footer"></div>
    </div>
    </div>
    );

  
}

export default OrdenTabla;