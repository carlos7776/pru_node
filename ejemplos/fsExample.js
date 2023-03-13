const fs = require('fs')

function read(route , callBack) {
    fs.readFile(route,(err, data) => {
       // console.log(data);
       callBack(data.toString())
    })
    
}

function white(route, content, callBack) {
    fs.writeFile(route, content, (err) =>{
        if(err)
            console.error(`Error al whiting file: ${err}`)
        else
            console.log('exitoso')    
    })    
}
//white(`${__dirname}/myfile.txt`, `hola es mi contenido`) //escribir crea el archivo
read(`${__dirname}/myfile.txt`, console.log) // lee el archivo