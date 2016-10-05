/**
* New Hapi server.
*/
const Hapi = require('hapi');
const server = new Hapi.Server();

/**
* External dependencies.
* We just need the template engine (for now).
*/
const ejs = require('ejs');

/**
* Register inside a constant
* external plugins and
* our custom APIs.
*/
const plugins = [
	require('vision'),
  require('./apis/users')
  require('./apis/tweets')
];

/**
* Create a new Hapi connection
* Use process environment variables
* If present. If not, define them.
*/server.connection({
	host: process.env.HOST || process.env.HOTSNAME || 'localhost',
	port: process.env.PORT || 1337
});

/**
* Register our plugins.
* When this is done,
* configure the views engines
* and start the server.
*/
server.register(plugins, err => {
	if (err) {
		throw new Error(err);
	}

  // Configure views
	server.views({
		engines: {
			ejs: ejs
		},
		relativeTo: __dirname,
		path: 'views'
	});

  // Start the server
  server.start(err => {
  	if (err) {
  		throw new Error(err);
  	}
  	console.log('Server running at:', server.info.uri);
  });
});
