export function createCard(movie, listFavorites) {
    
    let template = document.createElement('template');
    
    let overview = movie.overview.slice(0, 50) + ' ...';
    let tagline = movie.tagline.slice(0, 20) + '...';
    
    template.innerHTML += `<div class = "flex flex-col justify-start rounded-md w-[70%] bg-[#D2CCFF] md:w-1/3 lg:w-1/4 p-3 lg:text-lg   ">
    <button data-id ="${movie.id}" class = "relative">
    
    </button>    
    <img class = "rounded-md h-[150px] object-cover" src="https://moviestack.onrender.com/static/${movie.image}" alt="${movie.title}"> 
    <div class = "gap-2 p-1 h-[180px] flex flex-col justify-between lg:h-[220px]">
    <h2 class ="text-center border-2 border-white">${movie.title}</h2>
    <p>${tagline}</p>
    <p class = "text-justify text-xs">${overview}</p>
    <a class = "border-2 text-center" href="./details.html?id=${movie.id}">Ver más</a>
    </div>
    </div>`;

    let button = template.content.querySelector('button');
    
    if(listFavorites.includes(movie.id)) {
        button.innerHTML = `<img id ="fillHeart" data-id="${movie.id}" class ="h-[45px] -top-4 -right-2 absolute" src="./Recursos Moviestack/imagenes/corazon_relleno.png">`;
    } else {
        button.innerHTML = `<img data-id = "${movie.id}" id = "heart" class ="h-[30px] -top-2 -right-0.5 absolute" src="./Recursos Moviestack/imagenes/corazon_vacio.png"></img>`;
    }
    return template.innerHTML;
}

export function renderCards (movies, container, listFavorites) {
    for (const movie of movies) {
        container.innerHTML += createCard(movie, listFavorites);
    }
    return container;
}

function genres(movies){
    let genres = new Set();

    movies.forEach(movie => {
        movie.genres.forEach(genre => {
            genres.add(genre);
        });
    });
    return [...genres];
}

function createOptions(genres, contenedor) {

    for (const genre of genres) {
        select.innerHTML += `<option value="${genre}">${genre}</option>`;
    }
}

function filterMovies(movies, selectedGenre, selectedTitle,container) {
    
    let filteredMovies = movies.filter(movie => 
        (selectedGenre === 'all genres' || movie.genres.includes(selectedGenre)) &&
        movie.title.toLowerCase().includes(selectedTitle.toLowerCase().trim())
    );
    if (filteredMovies.length === 0) {
        container.innerText = 'No one of our movies match your search criteria, sorry.'
    }
        
    return filteredMovies
}

export default {
    createCard,
    renderCards,
    genres,   
    createOptions,
    filterMovies   
}