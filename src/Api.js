import {useEffect, useState} from 'react';
import misGatitos from './Gatitosinfo';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import {render} from 'react-dom';
import Gatospropiedades from './Gatospropiedades';



function Api ()
{
   


 const [ resultado, setResultado]= useState([]);
 const [ spinner, setLoading]= useState(null);
 useEffect(() => {
    fetch('https://api.thecatapi.com/v1/images/search?limit=16&has_breeds=1&api_key=live_AQmTWV5XC1G94DkjqLm36jDoGVtRpRUiiIjXROjl3OE6lhD2oma6oRgbrpLLgVwg')
        .then(response => response.json())
        .then(response2 => { console.log(response2);

            console.log(response2)
            const {response3}=response2
           setLoading(response3)  
            setResultado(response2)

          
 })
        .catch(err => console.error(err));
        
    }, []);

   


    return (

    

   <div>

{
            spinner===null ? <div class="text-center spinnermargen">
            <div className="spinner-border m-5 spinnersize " role="status">
              
            </div>
          </div> : 
        


      <div className=''>
      
      <div className='catpics' >
      
    
    {
    resultado.slice(0,16).map((elemento) => {
      console.log (elemento.breeds[0].name)

         return (
            <div className='imagesize' key={elemento.id}>   
            <div className="fotosgatos card">
               <img className="image" src={elemento.url} ></img>
            <p> Nombre:{(elemento.breeds[0].id).toUpperCase()}</p>
            <p> Edad:{elemento.breeds[0].energy_level}</p>
            <Gatospropiedades/>
            
            <a href="#" className=" botones btn btn-primary mt-3">Adoptame!</a>
      
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