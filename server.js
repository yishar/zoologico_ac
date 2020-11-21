/*
* Definición de todas las constantes que serán usadas
* */
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
    origin: "http://localhost:3000"
};

app.use(cors(corsOptions));

// Parsear el tipo de contenido de la solicitud como:
// application/json
app.use(bodyParser.json());

// Parsear el tipo de contenido de la solicitud como:
// application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// Llamar a sysc()
const db = require("../zoologico_ac/models");
db.sequelize.sync();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

// Una Ruta simple para testear el API
app.get("/", (req, res) => {
    res.json({ message: "Bienvenido a Zoológico AC." });
});

// Agregar las rutas para el servidor
require("../zoologico_ac/routes/animal.routes.js")(app);

// Configurar el puerto y y escuchar las solicitudes
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`El servidor está corriendo en el puerto: ${PORT}.`);
});
