import React from "react";

function Formulario() {

    return ( 

        <div>
<div className="margengeneralformulario">


<div className="card text-bg-dark  mb-3 cuadroformulario" style={{ marginTop: "100px" }} >
      <div className="card-header ">
        <span style={{ "--i": 1 }}>C</span>
        <span style={{ "--i": 2 }}>o</span>
        <span style={{ "--i": 3 }}>n</span>
        <span style={{ "--i": 4 }}>t</span>
        <span style={{ "--i": 5 }}>a</span>
        <span style={{ "--i": 6 }}>c</span>
        <span style={{ "--i": 7 }}>t</span>
        <span style={{ "--i": 8 }}>o</span>
      </div>

      <div className="formulariodecontacto ">
        <div className="">
          <form action="https://formsubmit.co/maribeldemarco@gmail.com" method="POST" className="needs-validation " noValidate>
            <div className="mb-3 text-center">
              <label htmlFor="validationCustom01" className=" ">
                <p className="">Nombre</p>
              </label>
              <input type="text" name="nombre" className="form-control" id="validationCustom01" placeholder="Escribe tu nombre" required />
              <div className="invalid-feedback"> <p>Por favor escribe tu nombre</p></div>
            </div>

            <div className="mb-3  text-center">
              <label htmlFor="validationCustom02" className="form-label letrascel">
                Apellido
              </label>
              <input type="text" name="apellido" className="form-control" id="validationCustom02" placeholder="Escribe tu apellido" required />
              <div className="invalid-feedback"><p>Por favor escribe tu apellido</p></div>
            </div>

            <div className="mb-3  text-center">
              <label htmlFor="validationCustom03" className="form-label letrascel">
                Email
              </label>
              <input type="email" name="email" className="form-control" id="validationCustom03" placeholder="Escribe tu mail" required />
              <input type="hidden" name="_autoresponse" value="Copia de envío de su formulario en https://lmdemarco.netlify.app/" />

              <div className="invalid-feedback"><p>Por favor escribe tu mail</p></div>
            </div>

            <div className="mb-3  text-center">
              <label htmlFor="validationTextarea" className="form-label letrascel">
                Consulta/Comentarios
              </label>
              <textarea className="form-control" name="comentarios" id="validationTextarea" rows="3" placeholder="Escribe tus comentarios" required></textarea>
              <div className="invalid-feedback"><p>Por favor escribe tus comentarios</p></div>
            </div>

            <div className="col-auto d-flex justify-content-center">
              <button type="submit" className="btn btn-warning   mb-3 mt-2 ">
                Enviar
              </button>
            </div>
          </form>
        </div>

</div>

</div></div>

</div>
            )

}

export default Formulario;