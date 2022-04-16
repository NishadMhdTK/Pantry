const Logger = require('./logger');
const logger = new Logger();

logger.on('messageLogged', (arg) => {
    console.log("Event has been logged",arg);
});
logger.log('message');
