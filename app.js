const express = require ('express');
const app = express();
const path = require('path');

const publicPath = path.resolve (__dirname, './public');
app.use (express.static(publicPath));
const indexPath = path.join (__dirname, './views/home.html');

app.get ('/', (req , res) => {
    res.sendFile (indexPath);

    console.log ('Hicieron un get request en '/'');
});




app.listen (3001,() => {
    console.log ('Servidor escuchando en el puerto 3001')
});

const port = process.env.PORT || 3001;
app.listen(port,()=> console.log('servidor corriendo en el puerto ${port}'));