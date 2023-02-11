import { useEffect, useState } from 'react';
import misGatitos from './Gatitosinfo';
import Gatospropiedades from './Gatospropiedades';



function Api() {



   const [resultado, setResultado] = useState([]);
   const [spinner, setLoading] = useState(null);
   useEffect(() => {
      fetch('https://api.thecatapi.com/v1/images/search?limit=16&has_breeds=1&api_key=live_AQmTWV5XC1G94DkjqLm36jDoGVtRpRUiiIjXROjl3OE6lhD2oma6oRgbrpLLgVwg')
         .then(response => response.json())
         .then(response2 => {
            console.log(response2);

            console.log(response2)
            const { response3 } = response2
            setLoading(response3)
            setResultado(response2)


         })
         .catch(err => console.error(err));

   }, []);


   let Myarray = resultado.slice(0, 16)

   return (






      <div>
         <div className='margintop-api'></div>
         <img className='fondoapi' src="apifondo.png"></img>
         {
            spinner === null ? <div class="text-center spinnermargen">
               <div className="spinner-border m-5 spinnersize " role="status">

               </div>
            </div> :





               <div className=''>

                  <div className='catpics' >



                     {
                        resultado.slice(0, 16).map((elemento) => {


                           return (
                              <div className='imagesize ' key={elemento.id}>
                                 <div className="fotosgatos card ">
                                    <img className="image mt-4" src={elemento.url} ></img>
                                    <p className='datosanimales'> Nombre:{(elemento.breeds[0].id).toUpperCase()}</p>
                                    <p className='datosanimales'> Edad:{elemento.breeds[0].energy_level}</p>
                                    <Gatospropiedades index={Myarray.indexOf(elemento)} />

                                    <a href="#" className="boton btn btn-warning mt-3 btn-lg">Adoptame!</a>

                                 </div>
                              </div>



                           );


                        })}
                  </div>
               </div>
         }

      </div>


   )

}


export default Api;