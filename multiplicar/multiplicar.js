const fs = require('fs');
let colors = require('colors');

let listarTabla = (base, limite = 10) => {

    console.log('================'.green)
    console.log(`tabla de ${ base }`.green)
    console.log('================'.green)

    for (let i = 1; i <= limite; i++) {
        console.log(`${ base } * ${ i } = ${base * i}`);

    }

}


let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        let data = '';

        if (!Number(base)) {
            reject('No es un número');
            return;
        }

        for (let i = 1; i <= limite; i++) {
            /*  console.log(`${ base } * ${ i } = ${base * i}`);*/
            data += `${ base } * ${ i } = ${base * i}  \n`;
        }

        fs.writeFile(`tablas/tabla ${base} al-${limite}.txt`, data, (err) => {
            if (err) reject(err);
            /* console.log(`The file tabla ${base} has been saved!`);*/
            else resolve(`tabla ${base} al-${limite}.txt`);
        });
    });

}

module.exports = {
    crearArchivo,
    listarTabla
}