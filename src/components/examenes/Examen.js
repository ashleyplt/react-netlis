import React, { useEffect, useState } from "react";
//import ima from './img/undraw_posting_photo.svg'
const Examen = () => {
    const [tableData, setTableData] = useState([])

    const querystring = window.location.search;
	const params = new URLSearchParams(querystring);

    useEffect(()=>{
        fetch("https://localhost:5001/api/examen/"+params.get("id"))
        .then((data) => data.json())
        .then((data) => setTableData(data))
    })
    return (
        <div class="col-12">
 
        <div class="card shadow ">
            <div class="card-header "> 


                <h1 className="text-center mt-2 mb-2"><i class="fas fa-notes-medical ml-5"></i> Exámenes del área de laboratorio</h1>
            </div>
            <div class="card-body">
                


            <table  class="table table-bordered table-striped  ">
                  <thead>
                    <tr>
                        <th>Descripción</th>
                        <th>Descripción Corta</th>
                        <th>Confidencial</th>
                        <th>Acciones</th>
                    </tr>
                    </thead>

                    <tbody>
                    {tableData.map((ordendetalle)=>(
					<tr>
					<td>{ordendetalle.descripcion}</td>
					<td>{ordendetalle.descripcionCorta}</td>
                    <td>{ordendetalle.confidencial}</td>
                    <td><i class="fas fa-clipboard-list"></i></td>
					</tr>
				    ))}
                    </tbody>

                    <tfoot>
                    <tr>
                        <th>Descripción</th>
                        <th>Descripción Corta</th>
                        <th>Confidencial</th>
                        <th>Acciones</th>
                    </tr>
                    </tfoot>

                    </table>
            </div>
        </div>
    </div>
    );
}
export default Examen;