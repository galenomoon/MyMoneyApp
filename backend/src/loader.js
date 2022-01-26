//loader.js is who will be called when my application is loaded
const server = require('./config/server') //Application Server
require('./config/database') //Application Database
require('./config/routes')(server)