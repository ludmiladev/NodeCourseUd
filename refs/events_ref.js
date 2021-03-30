// Додає функціонал емітити чи прослуховувати події
const EventEmitter =  require('events');

// создадим класс и будем наследоваться от EventEmitter
class Logger extends EventEmitter {  
    //теперь в данном классе  Logger нам лоступны 2 метода, которые мы можем использовать , это метод онн и метод эмит
log (message){
this.emit('message', `${message} ${Date.now()}`)
}

}

const logger = new Logger()

//  Дальше проставим прослушку  события

logger.on('message', data => {
    console.log(data);
})
logger.log('Hello');