import {useEffect, useState} from 'react';

function Api ()
{
 const [ resultado, setResultado]= useState([]);
    
 useEffect(() => {
    fetch('https://api.thecatapi.com/v1/images/search?limit=10')
        .then(response => response.json())
        .then(response2 => { console.log(response2);

            console.log(response2.results)
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
         return (

            <div className='imagesize' key={elemento.id}>   
            <div><img className="image" src={elemento.url} ></img>
            </div>
            </div>
    
            
         );
      })}
   </div>
   </div>
</div>    )
}


export default Api;