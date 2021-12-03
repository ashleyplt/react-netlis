import React from 'react' 

const resultadosData = () => {
    return (
        <div class="col-12">
 
        <div class="card shadow mb-4">
            <div class="card-header text-center">
                <img src="../../dist/img/laboratorioIcon.png" width="50px" height="50px"/>
                <div className="text-center">
                    <h6 class="font-weight-bold">Resultados de la orden de laboratorio</h6>
                </div>
            </div>
            <div class="card-body">
                <div class="text-center"> 
                    <form className="row container">
                        <label class="card-text">Examen: </label> <input className="form-control " type="text" placeholder="Examen de ejemplo"/>
                        <label class="card-text">Orden: </label> <input className="form-control " type="text" placeholder="Orden de ejemplo"/>
                        <label class="card-text">Resultado: </label> <input className="form-control " type="text" placeholder="Resultado"/>
                        <label class="card-text">Observaciones: </label> <input className="form-control " type="text" placeholder="Observaciones"/>

                        <button type="button" class="btn btn-dark mt-2"> Registrar</button>                        
                    </form>
                </div>
            </div>
        </div>
    </div>
    );
}
export default resultadosData;