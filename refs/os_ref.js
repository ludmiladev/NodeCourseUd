const os = require('os');
// платформа
console.log(os.platform());

// выясним архитектуру определенных процессоров
console.log(os.arch());

// Информация по общему состоянию данного ПК по процессорам
console.log(os.cpus());

// Узнать сколько есть свободной памяти 
console.log(os.freemem());

// Узнать сколько памяти есть вообще
console.log(os.totalmem());