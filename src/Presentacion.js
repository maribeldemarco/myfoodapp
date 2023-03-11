

import { Link } from "react-router-dom";

function Presentacion() {

 

  
  const cardsPpal = [


    {
      id: 1,
      titulo: 'Adopciones',
      subtitulo: 'Conocé a todos nuestros michis en adopción. Ellos necesitan de un hogar lleno de cariño donde vivan felices!',
      imagen:
        'cat1.jpg',
      button: 'Quiero adoptar!',
    },
    {
      id: 2,
      titulo: 'Voluntariado',
      subtitulo: 'Colaborá con el refugio de distintas formas: alimentando, aseando y dando mucho cariño. No olvides que ellos te necesitan!',
      imagen:
        'cat2.jpg',
      button: 'Quiero ser voluntario!',

    },
    {
      id: 3,
      titulo: 'Donaciones',
      subtitulo: 'Podés ayudarnos para que continuemos nuestra tarea salvando vidas donando mensualmente o por única vez',
      imagen:
        'cat3.jpg',
      button: 'Quiero donar!',
    },

  ];





  return (
    <div>


      <img className="presentacion fondopantallagrande" src="presentacion.png" />
      <img className="presentacion fondopantallachica" src="presentacionchica.png" />

      <div className="cards row row-cols-1 row-cols-lg-3 g-4 mt-4">
        {


          cardsPpal.map((elemento) => {



            return (
              <div className=' ' key={elemento.id}>



                <div class="col">
                  <div class="card p-4" >
                    <img src={elemento.imagen} class="card-img-top" alt="..." />
                    <div class="card-body">
                      <h4 class="card-title text-center display-3 text-muted fs-1" ><strong>{elemento.titulo} </strong></h4>
                      <p class="card-text fs-4 mt-4 mb-4 text-center"> {elemento.subtitulo}</p>
                      <div class="text-center">
                      <Link to="/contactanos" className=" boton btn btn-warning btn-lg mt-2">{elemento.button}</Link>                      </div>
                    </div>
                  </div>
                </div>




              </div>



            );


          })}





      </div>





    </div>


  )
}



export default Presentacion;