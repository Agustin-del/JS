let container = document.getElementById('container');

let movies = data.map(movie => movie);

function createCard(movie) {
    
    let template = document.createElement('template');
    
    let overview = movie.overview.slice(0, 50) + ' ...';
        
    template.innerHTML += `<div class = "flex flex-col justify-start rounded-md w-[70%] bg-[#D2CCFF] md:w-1/3 lg:w-1/4 p-3 lg:text-lg">
    <img class = "rounded-md h-[150px] object-cover" src="${movie.image}" alt="">
    <div class = "gap-2 p-1 h-[180px] flex flex-col justify-between lg:h-[220px]">
    <h2 class ="text-center border-2 border-white">${movie.title}</h2>
    <p>${movie.tagline}</p>
    <p class = "text-justify text-xs">${overview}</p>
    <a class = "border-2 text-center" href="./details.html?id=${movie.id}">Ver más</a>
    </div>
    </div>`;

    return template.innerHTML;
}

function renderCards (movies, container) {
    for (movie of movies) {
        container.innerHTML += createCard(movie);
    }
    return container;
}

renderCards(movies, container);

function genres(movies){
    let genres = new Set();

    movies.forEach(movie => {
        movie.genres.forEach(genre => {
            genres.add(genre);
        });
    });
    return [...genres]
}

let select = document.querySelector('#buscadores select');

function createOptions(genres, contenedor) {

    for (const genre of genres) {
        select.innerHTML += `<option value="${genre}">${genre}</option>`;
    }
}

createOptions(genres(movies, select));

let inputText = document.querySelector('#buscadores input')

let selectedGenre = 'all genres';
let selectedTitle = '';

function filterMovies(movies) {
    return movies.filter(movie => 
        (selectedGenre === 'all genres' || movie.genres.includes(selectedGenre)) &&
        movie.title.toLowerCase().includes(selectedTitle.toLowerCase())
    );
}

select.addEventListener('change', event => {
    selectedGenre = event.target.value;
    container.innerHTML = ''
    renderCards(filterMovies(movies), container);
});


inputText.addEventListener('input', event => {
    selectedTitle = event.target.value;
    container.innerHTML = ''
    let filteredMovies = filterMovies(movies) 
    if (filteredMovies.length === 0) {
    container.innerText = 'No one of our movies match your search criteria, sorry.'
    } else {
    renderCards(filteredMovies, container)
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


// console.log(filteredMovies)