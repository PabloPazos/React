//Arreglos en JS

/*Se suele hacer así un arreglo si solamente necesito uno con un tamaño específico.*/
// const arreglo = new Array(100);
// arreglo.push(1);

const arreglo = [1,2,3,4];
// arreglo.push(1);
// arreglo.push(2);
// arreglo.push(3);
// arreglo.push(4); Conviene no usar el push porque modifica el objeto princial.

let arreglo2 = [...arreglo, 5]
// arreglo2.push(5);
const arreglo3 = arreglo2.map( function (numero) {
	return numero * 2;
});

console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);