import {renderCards, createCard} from '../módulo/modulo.js'

let arrayFavs = JSON.parse(localStorage.getItem('favs'))
let containerFavs = document.getElementById('favs')

fetch('https://moviestack.onrender.com/api/movies',
    {
        headers: {
            'X-API-KEY' : '0ff70d54-dc0b-4262-9c3d-776cb0f34dbd'
        }
    })
    .then (response => response.json())
    .then (data => {
        let movies = data.movies
        let favsMovies = []
        for (const id of arrayFavs) {
            (movies.forEach(movie => {
                if (movie.id === id) {
                    favsMovies.push(movie)
                }    
            })) 
        }        
        renderCards(favsMovies, containerFavs)
    })
        
