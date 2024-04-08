import funciones from '../módulo/modulo.js'

let container = document.getElementById('container');

let movies = data.map(movie => movie);

funciones.renderCards(movies, container)

let select = document.querySelector('#buscadores select');

funciones.createOptions(funciones.genres(movies, select));

let inputText = document.querySelector('#buscadores input')

export let selectedGenre = 'all genres';
export let selectedTitle = '';

select.addEventListener('change', event => {
    selectedGenre = event.target.value;
    container.innerHTML = ''
    funciones.renderCards(funciones.filterMovies(movies), container);
    console.log(funciones.filterMovies(movies))
});     

inputText.addEventListener('input', event => {
    selectedTitle = event.target.value.toLowerCase().trim();
    container.innerHTML = ''
    let filteredMovies = funciones.filterMovies(movies) 
    if (filteredMovies.length === 0) {
    container.innerText = 'No one of our movies match your search criteria, sorry.'
    } else {
    funciones.renderCards(filteredMovies, container)
    }
});


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
