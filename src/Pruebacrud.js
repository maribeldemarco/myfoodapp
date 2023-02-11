import Prueba from "./Prueba";
import { useState } from "react";
import { v4 as uuid } from "uuid";


function Pruebacrud() {


    const [arrayCrud, setBorrar] = useState(Prueba)
    const [nombre, setNombre] = useState()
    const [comentario, setComentario] = useState()
    const [comentarios, setNuevosComentarios] = useState()


    const funcionBorrar = (id) => {



        let newData = arrayCrud.filter((elemento) => elemento.id !== id);
        console.log(newData)
        setBorrar(newData)

    }


    const funcionEnviar = (e) => {

        e.preventDefault();

        let id = uuid();
        let a = nombre;
        let b = comentario;

        setNuevosComentarios(arrayCrud.push({ nombre: a, comentario: b, id: id }))
    }


    return (

        <div>





            <form>
                <div className=" formulario form-row" >
                    <div class="col">
                        <input type="text" class="form-control" placeholder="Nombre y apellido"
                            onChange={(e) => setNombre(e.target.value)} />
                    </div>
                    <div class="col">
                        <input type="text" class="form-control" placeholder="Comentario"
                            onChange={(e) => setComentario(e.target.value)} />
                    </div>
                    <button type="submit" className='boton' mx-auto onClick={(e) => funcionEnviar(e)}>
                        Enviar
                    </button>


                </div>
            </form>



            {Prueba && Prueba.length > 0
                ?

                arrayCrud.map((elemento) => {


                    return (
                        <div className='formulario ' key={elemento.id}>
                            <div className="fotosgatos card ">

                                <p className='datosanimales'> Nombre:{elemento.nombre}</p>
                                <p className='datosanimales'> Comentario:{elemento.comentario}</p>

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

    )


}

export default Pruebacrud;
