// import { heroes } from './data/heroes';
import heroes, { owners } from '../data/heroes';

// console.log(owners);

/*const getHeroesById = (id) => {
    return heroes.find(heroe => heroes[id]);
}*/

export const getHeroeById = (id) => heroes.find ( heroe => heroe.id === id );

// console.log(getHeroeById(2));

export const getElementByOwner = (owner) => heroes.filter ( heroe => heroe.owner === owner);

// console.log(getElementByOwner('DC'));
