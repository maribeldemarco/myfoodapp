import Header from "./Header";

function Presentacion ()
{


    return (



<div>

<img className="presentacion" src ="presentacion.png"/>

<div className="cards row row-cols-1 row-cols-lg-3 g-4 mt-4">
  
  

  <div class="col">
    <div class="card p-4" >
      <img src="cat1.jpg" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h4 class="card-title text-center display-3 text-muted fs-1" ><strong>Adopciones </strong></h4>
        <p class="card-text fs-4 mt-4 mb-4 text-center">Podes conocer nuestros michis en adopcion.Ellos necesitan de un hogar lleno de cariño y comodidades!</p>
        <div class="text-center">
        <button type="button" className=" boton btn btn-warning btn-lg mt-2">Quiero adoptar!</button>
      </div>
      </div>
    </div>
  </div>
  




  <div class="col">
    <div class="card p-4" style={{height: 650}}>
      <img src="cat3.jpg" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title text-center  display-4 h1 text-muted fs-1"><strong>Voluntariado</strong></h5>
        <p class="card-text fs-4 mt-4 mb-4 text-center">Podes ayudarnos en el refugio de distintas formas: alimentando, aseando y dando cariño. No olvides que ellos te necesitan!</p>
        <div class="text-center">
        <button type="button" className=" boton btn btn-warning btn-lg mt-2">Quiero ser voluntario!</button>
      </div>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card p-4" style={{height: 650}}>
      <img src="cat2.jpg" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title text-center h1  display-4 text-muted fs-1"><strong>Donaciones </strong></h5>
        <p class="card-text fs-4 mt-4 mb-4 text-center">Podés ayudarnos para que continuemos nuestra tarea donando mensualmente o por única vez.
        Ellos te lo van a agradecer! </p>
        <div class="text-center">
        <button type="button" className="boton btn btn-warning btn-lg mt-2">Quiero donar!</button>
      </div>
      </div>
    </div>
  </div>

</div>





</div>

    )
}



export default Presentacion;