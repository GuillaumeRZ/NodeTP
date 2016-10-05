/**
* Require module dependiences.
* We just need the Sequelize constructor.
*/
const Sequelize = require('sequelize');

/**
* Get environment config.
*/
const environment = process.env.NODE_ENV || 'development';
const config = require('./config')[environment];

/**
* Export the ORM instance and
* the ORM types.
* They both will be available under the
* same object when we require this file.
*/
module.exports = {
  instance: new Sequelize(config),
  types: Sequelize
};
