// Forma 1
// const getImagenPromesa = () => {
//     const promesa = new Promise ( (resolve, reject) => {
//         resolve('https=//asdasdasd.com')
//     })
//     return promesa;
// }

// Forma 2
// const getImagenPromesa = () => new Promise( resolve => resolve('https=//asdasdasd.com') )

// getImagenPromesa().then( console.log )

// Forma 3 con async
// const getImagen = async() => {
//     return 'https=//asdasdasd.com';
// }
// getImagen().then(console.log);

const getImagen = async() => {

  try {

        const apiKey = '7xri0jlrQGdtjz2GvNXHjQdlgauPsa0p';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json();

        const { url } = data.images.original;

        const img = document.createElement('img');
        img.src = url;
        document.body.append( img );
    
    } catch (error) {
        console.error(error);
    }
}

getImagen();

