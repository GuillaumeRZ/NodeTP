/**
* Connect to the database.
*/
const database = require('../../database');

/**
* Sync the database.
*/
database.instance.sync()
  .then((){
    console.log('Sincing database ...');
  })
  .catch(err=> {
    throw new Error(err);
  })
