const apiKey = '7xri0jlrQGdtjz2GvNXHjQdlgauPsa0p';

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);

// peticion.then ( resp => {
//     resp.json().then( data => {
//         console.log( data )
//     })
// })

peticion
    .then( resp => resp.json() ) // retorna promesa. Promesas en cadena.
    .then( ({data}) => {
        const { url } = data.images.original;

        const img = document.createElement('img');
        img.src = url;

        document.body.append( img );

    })
    .catch( console.warn);