import funciones from '../módulo/modulo.js';

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

        let movies = data.movies;
        
        let listFavorites = [];
        let lsFavs = JSON.parse(localStorage.getItem('favs'));
        
        if(lsFavs) {
            listFavorites = lsFavs;
        } 
        
        funciones.renderCards(movies, container, listFavorites);
        funciones.createOptions(funciones.genres(movies, select));
        
        container.addEventListener ('click', event => {
            let dataId = event.target.dataset.id;
            if(dataId) {
                if (!listFavorites.includes(dataId)) {
                    listFavorites.push(dataId);
                    event.target.parentElement.innerHTML = `<img id ="fillHeart" data-id="${dataId}" class ="h-[45px] -top-4 -right-2 absolute" src="./Recursos Moviestack/imagenes/corazon_relleno.png">`;
                } else {
                    listFavorites = listFavorites.filter(id => id != dataId);
                    event.target.parentElement.innerHTML = `<img id = "heart" data-id="${dataId}" class ="h-[30px] -top-2 -right-0.5 absolute" src="./Recursos Moviestack/imagenes/corazon_vacio.png">`;
                }
            }
            localStorage.setItem('favs', JSON.stringify(listFavorites));
        })
        select.addEventListener('change', event => {
            selectedGenre = event.target.value;
            container.innerHTML = '';
            let filteredMovies = funciones.filterMovies(movies, selectedGenre, selectedTitle, container);
            if (filteredMovies.length > 0) {
            funciones.renderCards(filteredMovies, container,listFavorites);
            }
        });     
            
        inputText.addEventListener('input', event => {
            selectedTitle = event.target.value.toLowerCase().trim();
            container.innerHTML = '';
            let filteredMovies = funciones.filterMovies(movies, selectedGenre, selectedTitle, container);
            if (filteredMovies.length > 0) {
            funciones.renderCards(filteredMovies, container, listFavorites);
            }
        });
    })
.catch(error => console.log(error))