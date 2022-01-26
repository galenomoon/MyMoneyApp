const port = 3003; //port of backend
const bodyParser = require("body-parser"); //Middleware - request handling chain
const express = require("express");
const server = express(); //Method creating a new server with express
const allowCors = require("./cors");

// For every incoming request USE the bodyParser to interpret when it arrives urlencoded
server.use(bodyParser.urlencoded({ extended: true }));
//For every incoming request USE the bodyParser to interpret when it arrives as a json
server.use(bodyParser.json());
server.use(allowCors);

//stay listening the port 3003 and if its done.. () => {}
server.listen(port, function () {
  console.log(`BACKEND is running on port ${port}
  ~ Sucesso meu Consagrado :D `);
});

module.exports = server;
