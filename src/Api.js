import {useEffect, useState} from 'react';

function Api ()
{
 const [ resultado, setResultado]= useState([]);
    
 useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
        .then(response => response.json())
        .then(response => { console.log(response);

            console.log(response.results)
            setResultado(response.results)
            
 })
        .catch(err => console.error(err));
        
    }, []);
    return (

   <div>
    {resultado.map((post) => {
         return (
            <div className="post-card" key={post.id}>
               <h2 className="post-title">{post.name}</h2>
               <p className="post-body"><img src={post.image}></img></p>
            </div>
         );
      })}
   </div>
    )
}


export default Api;