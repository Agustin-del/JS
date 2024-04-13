import {renderCards} from '../módulo/modulo.js';

let arrayFavs = JSON.parse(localStorage.getItem('favs'));
let containerFavs = document.getElementById('favs');

if (arrayFavs.length === 0) {
    containerFavs.innerText = "Looks like you haven't selected a movie yet. Take your time exploring our collection of films and find the perfect one to enjoy. Happy browsing!"
}
fetch('https://moviestack.onrender.com/api/movies',
    {
        headers: {
            'X-API-KEY' : '0ff70d54-dc0b-4262-9c3d-776cb0f34dbd'
        }
    })
    .then (response => response.json())
    .then (data => {
        let movies = data.movies;
        let favsMovies = [];
        for (const id of arrayFavs) {
            (movies.forEach(movie => {
                if (movie.id === id) {
                    favsMovies.push(movie);
                }    
            })) 
        }        
        renderCards(favsMovies, containerFavs, arrayFavs);
        
        containerFavs.addEventListener('click', event => {
            let dataId = event.target.dataset.id;

            if (dataId) {
                if(!arrayFavs.includes(dataId)) {
                    arrayFavs.push(dataId);
                    event.target.parentElement.innerHTML = `<img id ="fillHeart" data-id="${dataId}" class ="h-[45px] -top-4 -right-2 absolute" src="./Recursos Moviestack/imagenes/corazon_relleno.png">`;
                } else {
                    arrayFavs = arrayFavs.filter (id => id != dataId);
                    event.target.parentElement.innerHTML = `<img id = "heart" data-id="${dataId}" class ="h-[30px] -top-2 -right-0.5 absolute" src="./Recursos Moviestack/imagenes/corazon_vacio.png">`;
                }
            }
            localStorage.setItem('favs', JSON.stringify(arrayFavs));
        })
    })
        
