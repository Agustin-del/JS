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
    for (const movie of movies) {
        container.innerHTML += createCard(movie);
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

function filterMovies(movies, selectedGenre, selectedTitle) {
    return movies.filter(movie => 
        (selectedGenre === 'all genres' || movie.genres.includes(selectedGenre)) &&
        movie.title.toLowerCase().includes(selectedTitle.toLowerCase().trim())
    );
}

export default {
    createCard,
    renderCards,
    genres,   
    createOptions,
    filterMovies   
}