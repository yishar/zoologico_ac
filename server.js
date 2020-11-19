/*
* Definición de todas las constantes que serán usadas
* */
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// Parsear el tipo de contenido de la solicitud como:
// application/json
app.use(bodyParser.json());

// Parsear el tipo de contenido de la solicitud como:
// application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// Llamar a sysc()
const db = require("./zoologico_ac/models");
db.sequelize.sync();

// Una Ruta simple para testear el API
app.get("/", (req, res) => {
    res.json({ message: "Bienvenido a Zoológico AC." });
});

// Configurar el puerto y y escuchar las solicitudes
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`El servidor está corriendo en el puerto: ${PORT}.`);
});
