/**
* Connect to the database.js
*/
const database = require('../../database');

/**
* Define the user model.
*/
module.exports = database.instance.define('user', {
    username: {
        type: database.types.STRING,
        allowNull: false,
        unique: true,
        validate: {
            min: 1,
            max: 30,
            is: ['^[a-z0-9]+$', 'i']
        }
    },
    first_name: {
        type: database.types.STRING
    },
    last_name: {
        type: database.types.STRING
    },
    password: {
        type: database.types.STRING,
        allowNull: false
    },
    email: {
        type: database.types.STRING,
        allowNull: false,
        validate: {
            isEmail: true
        }
    },
    biography: {
			type: database.types.TEXT
		}
}, {underscored: true});
