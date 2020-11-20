module.exports = (sequelize, Sequelize) => {
    const Animal = sequelize.define("animal", {
        nombre: {
            type: Sequelize.STRING
        },
        tipo: {
            type: Sequelize.STRING
        },
        edad: {
            type: Sequelize.STRING
        }
    });

    return Animal;
};