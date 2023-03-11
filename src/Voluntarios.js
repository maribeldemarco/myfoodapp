import Prueba from "./Prueba";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import { useEffect } from "react";


function Voluntarios() {


    const cardsPpal = [


        {
          id: 1,
          nombre: 'Elvira Montañez',
          imagen:'fotovoluntario1.jpg',
       
        },
        {
          id: 2,
          nombre: 'Maria Perez',
          imagen:
            'fotovoluntario2.jpg',
         
    
        },
        {
          id: 3,
          nombre: 'Nicolás Dominguez',
          imagen:
            'fotovoluntario3.jpg',
         
        },
    

        {
            id: 4,
            nombre: 'Miriam Dominguez',
            imagen:
              'fotovoluntario4.jpg',
           
          },

          {
            id: 5,
            nombre: 'Cesar Rossi',
            imagen:
              'fotovoluntario5.jpg',
           
          },
      
          {
            id: 6,
            nombre: 'Sebastián Suarez',
            imagen:'fotovoluntario6.jpg',
           
          },
      
        ];
    



    let id = "";

    const [arrayCrud, setBorrar] = useState(Prueba)
    const [nombre, setNombre] = useState()
    const [comentario, setComentario] = useState()
    const [idnuevo, setNuevoid] = useState()


    const funcionBorrar = (id) => {

        console.log(id)
        if (id == 2 || id == 1 || id == 0) {
            return

        }
        else {
            let newData = arrayCrud.filter((elemento) => elemento.id !== id);
            console.log(newData)
            setBorrar(newData)
        }

    }


    const funcionEnviar = (e) => {

        e.preventDefault();

        let id = uuid();
        let a = nombre;
        let b = comentario;
        setNuevoid(id)

        let newArray = [...arrayCrud, { nombre: a, comentario: b, id: id }];

        setBorrar(newArray);

        console.log(arrayCrud)


    }




    return (

<div>


<div>





<div className="cards row row-cols-1 row-cols-lg-3 g-4 mt-4">
  {


    cardsPpal.map((elemento) => {



      return (
        <div className=' ' key={elemento.id}>

          <div class="col">
            <div class="card p-4 voluntariosCard" >
              <img src={elemento.imagen} class="card-img-top cover" alt="..." />
              <div class="card-body">
                <h4 class="card-title text-center display-3 text-muted fs-1" ><strong>{elemento.nombre} </strong></h4>
                
              </div>
            </div>
          </div>




        </div>



      );


    })}





</div>





</div>
<div class ="contenedorformularioycrud">
        
        <div className="formulario">

            <form >
            <h4 class="card-title text-center display-3 text-muted fs-1" > Dejanos tus comentarios</h4>
                
                <div className="form-row" >
                    <div class="col">
                        <input type="text" class="form-control" placeholder="Nombre y apellido"
                            onChange={(e) => setNombre(e.target.value)} />
                    </div>
                    <div class="col">
                        <textarea type="text" class="form-control" placeholder="Comentario"
                            onChange={(e) => setComentario(e.target.value)} ></textarea>
                    </div>
                    <button type="submit" className=' centrado boton' onClick={(e) => funcionEnviar(e)}>
                        Enviar
                    </button>


                </div>
                
            </form>



            {Prueba && Prueba.length > 0
                ?

                arrayCrud.map((elemento) => {


                    return (
                        <div className='formulario ' key={elemento.id}>
                            <div className="fotosgatos card comentarios">

                                <p className='datosanimales'> Nombre:{elemento.nombre}</p>
                                <p className='datosanimales centrado'> Comentario:{elemento.comentario}</p>

                                <button className='boton' mx-auto onClick={() => funcionBorrar(elemento.id)}>
                                    Borrar
                                </button>

                            </div>





                        </div>



                    );


                })

                : "no data avaliable"
            }






        </div>
        
        
        
        
        </div> 
        </div>

    )


}

export default Voluntarios;
