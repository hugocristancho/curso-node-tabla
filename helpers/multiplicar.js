const fs = require('fs');
require('colors');

// const crearArchivo = (base = 5) => {
//     console.log('=================================');
//     console.log('           TABLA DEL', base);
//     console.log('=================================');
//     let salida = '';
//     for (let index = 0; index < 10; index++) {
//         salida += `${base} x ${index + 1} = ${(index + 1) * base}\n`;
//     }
//     console.log(salida);
//     fs.writeFileSync('tabla-' + base + '.txt', salida);
//     console.log('tabla-' + base + '.txt', 'creado');
// }

const crearArchivo = async (base = 5, listar, hasta = 10) => {
    try {

        let salida = '';
        let consola = '';
        for (let index = 0; index < hasta; index++) {
            salida += `${base} ` + 'x'.green + ` ${index + 1} ` + '='.red + ` ${(index + 1) * base}\n`;
            consola += `${base} x ${index + 1} = ${(index + 1) * base}\n`;
        }
        if (listar) {
            console.log('================================='.blue);
            console.log('           TABLA DEL', base);
            console.log('================================='.blue);
            console.log(salida);

        }
        fs.writeFileSync('./salida/tabla-' + base + '.txt', consola);
        return `tabla-${base}.txt creado`;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    crearArchivo
}