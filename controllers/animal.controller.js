const db = require("../models");
const Animal = db.animales;
const Op = db.Sequelize.Op;

/**
 * Registrar un nuevo Animal
 * @param req
 * @param res
 */
exports.create = (req, res) => {
    // Validar la solicitud
    if (!req.body.title) {
        res.status(400).send({
            message: "El contenido no puede estar vacío."
        });
        return;
    }

    // Crear un objeto Animal
    const animal = {
        nombre: req.body.nombre,
        tipo: req.body.tipo,
        edad: req.body.edad,
    };

    // Guardando Animal en la base de datos
    Animal.create(animal)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            // Respuesta de error con status = 500
            res.status(500).send({
                message:
                    err.message || "Algún error ocurrió cuando se estaba guardando los datos del Animal."
            });
        });
};

/**
 * Obtener todos los Animales desde la base de datos
 * @param req
 * @param res
 */
exports.findAll = (req, res) => {
    const nombre = req.query.nombre;
    var condition = nombre ? { nombre: { [Op.like]: `%${nombre}%` } } : null;

    Animal.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Algún error ocurrió cuando se estaba obteniendo todos los datos de los Animal."
            });
        });
};

/**
 * Obtener un Animal pasando como parámetro el id
 * @param req
 * @param res
 */
exports.findOne = (req, res) => {
    const id = req.params.id;

    Animal.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error obteniendo Animal con el id=" + id
            });
        });
};

/**
 * Actualizando los datos de un Animal pasando como parámetro el id
 * @param req
 * @param res
 */
exports.update = (req, res) => {
    const id = req.params.id;

    Animal.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Los datos del Animal fueron actualizados correctamente."
                });
            } else {
                res.send({
                    message: `No se puede actualizar el Animal con id=${id}. Tal vez el Animal no fue encontrado o la solicitud estaba vacía!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error actualizando el Animal con id=" + id
            });
        });
};

/**
 * Eliminando los datos de un Animal pasando como parámetro el id
 * @param req
 * @param res
 */
exports.delete = (req, res) => {
    const id = req.params.id;

    Animal.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Los datos del Animal fueron eliminados correctamente!"
                });
            } else {
                res.send({
                    message: `No se puede eliminar el Animal con id=${id}. Tal vez el Animal no fue encontrado!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "No se pudo borrar el Animal con id=" + id
            });
        });
};

/**
 * Eliminando todos los registros de Animales
 * @param req
 * @param res
 */
exports.deleteAll = (req, res) => {
    Animal.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Todos los registros de Animales fueron eliminados correctamente!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Algún error ocurrió mientras se eliminaban todos los registros de Animales."
            });
        });
};