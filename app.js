const http = require('http');
const Logger = require('./logger');

const logger = new Logger();

const server = http.createServer();
server.listen(3000);
logger.log("Server running at port 3000")
