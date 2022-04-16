const EventEmitter = require('events');

class Logger extends EventEmitter {
log(message){
    // TODO: Send an HTTP request to the log server
    console.log(message);
    this.emit('messageLogged', {id: 1, url: 'http://'});
}
}
module.exports= Logger;