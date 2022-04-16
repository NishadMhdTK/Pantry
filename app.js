const http = require('http');
const Logger = require('./logger');

const logger = new Logger();

const server = http.createServer();
server.on('connection', (socket) => {
    console.log('New connection');
});    
server.listen(5000);
logger.log("Server running at port 3000")
