/* requireds */
const argv = require('./config/yargs').argv;
const colors = require('colors/safe');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

/* para pasar parametors node app base=5 */
/* devuelve la arquitectura */
/* console.log(process.arch); */

/* let argv2 = process.argv; */
/* console.log(argv.base); */
/* console.log('limite', argv.limite); */


let comando = argv._[0];

switch (comando) {

    case 'listar':
        //console.log('listar');
        listarTabla(argv.base, argv.limite);
        break;

    case 'crear':
        //        console.log('crear');
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: `, colors.green(archivo)))
            .catch(e => console.log(e));
        break;

    default:
        console.log('comando no reconocido');

}

/* let parametro = argv[2];
let base = parametro.split('=')[1]; */

/* console.log(base); */

/* crearArchivo(base)
    .then(archivo => console.log(`Archivo creado: ${archivo}`))
    .catch(e => console.log(e));
 */