import funciones from '../módulo/modulo.js'

let container = document.getElementById('container');

let select = document.querySelector('#buscadores select');

let inputText = document.querySelector('#buscadores input');

let selectedGenre = 'all genres';

let selectedTitle = '';

fetch('https://moviestack.onrender.com/api/movies',
    {
        headers: {
            'X-API-KEY' : '0ff70d54-dc0b-4262-9c3d-776cb0f34dbd'
        }
    })
    .then(response => response.json())
    .then(data => {

        let movies = data.movies
        funciones.renderCards(movies, container);
        funciones.createOptions(funciones.genres(movies, select));

        select.addEventListener('change', event => {
            selectedGenre = event.target.value;
            container.innerHTML = '';
            let filteredMovies = funciones.filterMovies(movies, selectedGenre, selectedTitle, container);
            if (filteredMovies.length > 0) {
                funciones.renderCards(filteredMovies, container);
            }
        });     
        
        inputText.addEventListener('input', event => {
            selectedTitle = event.target.value.toLowerCase().trim();
            container.innerHTML = '';
            let filteredMovies = funciones.filterMovies(movies, selectedGenre, selectedTitle, container);
            if (filteredMovies.length > 0) {
            funciones.renderCards(filteredMovies, container);
            }
        });

        let listFavorites = []
        let lsFavs = JSON.parse(localStorage.getItem('favs'))
        if(lsFavs) {
            listFavorites = lsFavs
        } 

        container.addEventListener ('click', event => {
            let dataId = event.target.dataset.id
            if(dataId) {
                if (!listFavorites.includes(dataId)) {
                    listFavorites.push(dataId)
                } else {
                    listFavorites = listFavorites.filter(id => id != dataId)
                }
            }
            localStorage.setItem('favs', JSON.stringify(listFavorites))    
        })
        // like.addEventListener('click', (event) =>{
        //     console.log(event.target.parentElement.dataset.id)
        //     if (event.target.parentElement.querySelector('#heart')) {
        //         event.target.parentElement.innerHTML = `<img id ="fillHeart" class ="h-[45px] -top-4 -right-2 absolute" src="./Recursos Moviestack/imagenes/corazon_relleno.png">`
        //     } else if (event.target.parentElement.querySelector('#fillHeart')) {
        //         event.target.parentElement.innerHTML = `<img id = "heart" class ="h-[30px] -top-2 -right-0.5 absolute" src="./Recursos Moviestack/imagenes/corazon_vacio.png">`
        //     }
        // })

        
    })
    .catch(error => console.log(error))

// let filteredMoviesByGenre = []
// select.addEventListener('change', event => {
//     filteredMoviesByGenre = movies.filter(movie => movie.genres.includes(event.target.value))   
//     container.innerHTML = ""
//     renderCards(filteredMoviesByGenre, container)
//     if (event.target.value === 'all genres') {
//         renderCards(movies, container)
//     }
// })

// let filteredMoviesByTitle = []

// inputText.addEventListener('input', event => {
//     filteredMoviesByTitle = movies.filter(movie => movie.title.toLowerCase().includes(event.target.value.toLowerCase().trim()))
//     container.innerHTML = ""
//     renderCards(filteredMoviesByTitle, container)
// })
// select.addEventListener('change', event =>{
//     for (const movie of movies) {
//         if (movie.genres.includes(event.target.value)) {
//             filteredMovies.push(movie)
//         }
//     }
// })
