module.exports = {
    HOST: "zoologico_ac_anthony_db_1",
    USER: "root",
    PASSWORD: "123.anthony.123",
    DB: "zoologico_db",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};
