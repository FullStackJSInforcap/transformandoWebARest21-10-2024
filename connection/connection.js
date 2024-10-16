const { Sequelize } = require("sequelize");

const sequelize = new Sequelize('postgres://postgres:root@localhost:5432/repertorio');

module.exports = sequelize;