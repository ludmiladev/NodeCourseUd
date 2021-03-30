const fs = require('fs');
const path = require('path');

// fs.mkdir(path.join(__dirname, 'notes'), err =>{
//     if (err) throw new Error(err)
//     console.log('папка была создана');
// });

// fs.mkdir(path.join(__dirname, 'notes'), err =>{
//     if (err) throw err
//     console.log('папка была создана');
// });

// fs.writeFile(path.join(__dirname, 'notes', 'mynotes.txt'),
// 'Hello world',
// (err) => {
//     if (err) throw err
//     console.log('файл был создан');

//     fs.appendFile(
//         path.join(__dirname, 'notes', 'mynotes.txt'),
//         'From append file',
//         err => {
//             if (err) throw err
//             console.log('файл был изменен');
//         }
//     )
// }
// )

// метод 1
// fs.readFile(
//     path.join(__dirname, 'notes', 'mynotes.txt'),
//     (err, data) =>{
//     if (err) throw err
//     console.log(Buffer.from(data).toString());
//     }
// )

// метод 2
// fs.readFile(
//     path.join(__dirname, 'notes', 'mynotes.txt'),
//     'utf-8',
//     (err, data) =>{
//     if (err) throw err
//     console.log(data);
//     }
// )

// как получить весь контент 

fs.writeFile(path.join(__dirname, 'notes', 'mynotes.txt'),
'Hello world',
(err) => {
    if (err) throw err
    console.log('файл был создан');

    fs.appendFile(
        path.join(__dirname, 'notes', 'mynotes.txt'),
        'From append file',
        err => {
            if (err) throw err
            console.log('файл был изменен');

    fs.readFile(
    path.join(__dirname, 'notes', 'mynotes.txt'),
    'utf-8',
    (err, data) =>{
    if (err) throw err
    console.log(data);
    }
)
        }
    )
}
)