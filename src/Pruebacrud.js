import Prueba from "./Prueba";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import { useEffect } from "react";


function Pruebacrud() {

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


    /* agregar funcionalidad de borrar y editar
    
        const funcionActualizar = (e) => {
    
            if (id !== 1 && id !== 2 && id !== 0) {
                alert(idnuevo)
    
            }
        }
    
    
        const funcionEditar = (id, nombre, comentario) => {
    
    
        }
    
        useEffect(() => {
    
    
        }, [])
    
    
                     <button type="submit" className='boton' mx-auto onClick={funcionEditar(arrayCrud.idnuevo, arrayCrud.nombre, arrayCrud.comentario)}>
                            Editar
                        </button>
    
                        <button type="submit" className='boton' mx-auto onClick={(e) => funcionActualizar(e)}>
                            Actualizar
                        </button>
    
    
    */


    return (

        <div className="formulario">

            <form >
            <h4 class="card-title text-center display-3 text-muted fs-1" > Dejanos tus comentarios</h4>
                <div className=" formulario form-row" >
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

    )


}

export default Pruebacrud;
