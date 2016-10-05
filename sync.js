/**
* Connect to the database.
*/
const database = require('../../database');

/**
* Add models
*/
const models = {
  User: require('./apis/users/model'),
  Tweet: require('./apis/tweet/model')
}

/**
* Make associations if any.
*/
Object.keys(models).forEach(modelName => {
  if (models[modelName].associate) {
    models[modelName].associate(models);
  }
});

/**
* Sync the database.
*/
database.instance.sync()
  .then(){
    console.log('Sincing database ...');
  })
  .catch(err=> {
    throw new Error(err);
  })
