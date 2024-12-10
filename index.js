const express = require('express');
const cors = require('cors');


require('dotenv').config();

const app = express();

//Cors
app.use(cors());



//Escuchar
app.listen(process.env.PORT, () => {
    console.log('Server is running on http://localhost:4000');
});

//Middlewares
app.use(express.static('public'));

//Lectura y parseo del body
app.use(express.json());

//Rutas
app.use('/api/algolia', require('./routes/algoliaRoute'));

