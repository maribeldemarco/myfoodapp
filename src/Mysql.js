const express = require('express');
const app = express();
const mysql = require("mysql2");
const cors = require ("cors");


const db =mysql.createPool(
    {   host: "localhost",
        user: "root",
        password: "01478963.",
        database: "colaboradores_refugio"
        }
);

app.use(cors());

app.get('/myapp/prueba', (req, res)=>{



    console.log('Prueba');
});


app.get('/myapp/prueba', (req, res)=>{

 const q= "SELECT Nombre, Apellido FROM datos_colaboradores"
 db.query(q, (err,data)=> {

   if(err){return res.json(err);}
   else {
    console.log(data)}
 })    

});






app.get('/myapp/test/', (req, res)=>{
    const q= "SELECT * FROM datos_colaboradores"
 db.query(q, (err,data)=> {

   if(err) return res.json(err)
   return res.send(data);
 })    

});

app.listen(5000, () => console.log('Application is ok'));