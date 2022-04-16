const logger = require('./logger');
const EventEmitter = require('events');

var emitter = new EventEmitter();
emitter.on('messageLogged', function() {
    logger.log("Event has been logged");
});
emitter.emit('messageLogged');
