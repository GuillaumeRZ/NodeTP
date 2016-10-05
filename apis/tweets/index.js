/**
* Define the tweet model.
*/
const User = require('./model');

/**
* Exports the user API with its own routes.
*/
exports.register = function (server, options, next) {
  // Add the route
  server.route({
  	method: 'POST',
  	path: '/user',
  	handler: (request, reply) => {
      const data =
        request.payload ||
        request.params ||
        request.query;
        console.log(data);

  		User.create(data)
  			.then(result => {
  				return reply.view('index', result.dataValues);
  		});
  	}
  });

  server.route({
    method: 'GET',
    path: '/user',
    handler: (request, reply) => {
      User.findAll()
      .then(result => {
          return reply(result);
      })
    }
  })

  next();
};

exports.register.attributes = {
  name: 'myPlugin',
  version: '1.0.0'
};
