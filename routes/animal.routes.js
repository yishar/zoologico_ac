module.exports = app => {
    const animales = require("../controllers/animal.controller.js");

    var router = require("express").Router();

    // Registrar un nuevo Animal para el zoológico
    router.post("/", animales.create);

    // Obtener todos los registros de los Animales
    router.get("/", animales.findAll);

    // Obtener los datos de un Animal con el id
    router.get("/:id", animales.findOne);

    // Actualizar los datos de un Animal con el id
    router.put("/:id", animales.update);

    // Eliminar un Animal de la base de datos
    router.delete("/:id", animales.delete);

    // Eliminar todos los registro de Animales
    router.delete("/", animales.deleteAll);

    app.use('/api/animales', router);
};
