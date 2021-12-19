/* export default heroes = [... De esta forma puedo exportarlo y poner el nombre que quiera cuando lo importo
en el otro archivo, pero es más difícil de leer si trabajás en equipo. */
const heroes = [
    {
        id: 1,
        name: 'Batman',
        owner: 'DC'
    },
    {
        id: 2,
        name: 'Spiderman',
        owner: 'Marvel'
    },
    {
        id: 3,
        name: 'Superman',
        owner: 'DC'
    },
    {
        id: 4,
        name: 'Flash',
        owner: 'DC'
    },
    {
        id: 5,
        name: 'Wolverine',
        owner: 'Marvel'
    },
];

export const owners = [ 'DC', 'Marvel'];

export default heroes;

// export {
//     heroes as default,
//     owners
// }