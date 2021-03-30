// console.log('Hello', __dirname);
// console.log('Hello', __filename);

// const userObj = require('./user');
// console.log(userObj);

// const obj = require('./user');
// console.log(obj.user);
// obj.sayHello();



// console.log('Hello');

// require('./user');



// подключим HTTP сервер
const http = require('http');

const server = http.createServer((req, res) =>{
console.log(req.url)

res.write('<h1>Hello from NodeJS</h1>')
res.write('<h2>Hello from NodeJS</h2>')
res.write('<h3>Hello from NodeJS</h3>')
res.end(
    // <div style="background: red; width: 200px; height: 200px;">
    //     <h1>Test </h1>
    // </div>
    `<div style="background: red; width: 200px; height: 200px;">
    <h1>Test 5</h1>
    </div>`
)
})
//  теперь нужно этот сервер запустить
server.listen(3000, () =>{
console.log('Server is running...');

})