const express = require("express");
const app = express();
const port = 3000;

app.get('/', (req, res)=>{
    res.send('HELLO PROFESOR')
})

app.listen(port, ()=>{
    console.log("Conexion Es de lo mejor"+ "http://localhost:"+ port);
})