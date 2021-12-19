const activo = true;

// let mensaje = '';

// if (!activo) {
//     mensaje = 'Activo';
// } else {
//     mensaje = 'Inactivo';
// }

/* ------------------------------------- */
// const mensaje = (activo) ? 'Activo' : 'Inactivo';
// const mensaje = (activo) ? 'Activo' : null;


/* ------------------------------------- */

const mensaje1 = activo && 'Activo'; // Respuesta en consola: Activo.
const mensaje2 = !activo && 'Activo'; // Respuesta en consola: false.

console.log(mensaje1);
console.log(mensaje2);