import {useEffect, useState} from 'react';

function Api ()
{
 const [ resultado, setResultado]= useState([]);
    
 useEffect(() => {
    fetch('https://api.thecatapi.com/v1/images/search?limit=10&has_breeds=1&api_key=live_AQmTWV5XC1G94DkjqLm36jDoGVtRpRUiiIjXROjl3OE6lhD2oma6oRgbrpLLgVwg')
        .then(response => response.json())
        .then(response2 => { console.log(response2);

            console.log(response2)
            setResultado(response2)
            
 })
        .catch(err => console.error(err));
        
    }, []);



    return (

   <div>
      <div className=''>
      <div className='catpics' >
    {
    resultado.slice(0,8).map((elemento) => {
      console.log (elemento.breeds[0].name)

         return (

            <div className='imagesize' key={elemento.id}>   
            <div><img className="image" src={elemento.url} ></img>
            <p> Nombre:{(elemento.breeds[0].id).toUpperCase()}</p>
            <p> Edad:{elemento.breeds[0].energy_level}</p>


                        </div>
            </div>
    
            
         );
      })}
   </div>
   </div>
</div>    )
}


export default Api;