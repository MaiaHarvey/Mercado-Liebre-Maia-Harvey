const express = require ('express');
const app = express();
const path = require('path');
const dotenv = require('dotenv').config();

const publicPath = path.resolve (__dirname, './public');
app.use (express.static(publicPath));
const indexPath = path.join (__dirname, './views/home.html');

app.get ('/', (req , res) => {
    res.sendFile (indexPath);

    console.log ('Hicieron un get request en '/'');
});


app.listen (process.env. PORT,() => {
    console.log ('Servidor escuchando en el puerto' + process.env.PORT);
});





