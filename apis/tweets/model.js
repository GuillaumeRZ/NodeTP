/**
* Connect to the database.js
*/
const database = require('../../database');

/**
* Define the tweet model.
*/
module.exports = database.instance.define('user', {
    content: {
        type: database.types.TEXT,
        allowNull: false,
        validate: {
          min: 1,
          max: 140
        }
    }
}, {
  underscored: true,
  classMethods: {
    associate: models => {
      models.tweet.belongsTo(models.user);
    }
  }
});
