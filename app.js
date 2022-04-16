const http = require('http');
const Logger = require('./logger');

const logger = new Logger();

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        logger.on('messageLogged', (event) => {
            res.write(`Hello World`);
            res.end();
        });
    }
});
server.listen(8069);
logger.log("Server running at port 8069")
