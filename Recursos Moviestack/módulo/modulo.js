function createCard(movie) {
    
    let template = document.createElement('template');
    
    let overview = movie.overview.slice(0, 50) + ' ...';
    template.innerHTML += `<div class = "flex flex-col justify-start rounded-md w-[70%] bg-[#D2CCFF] md:w-1/3 lg:w-1/4 p-3 lg:text-lg relative">
    <div>
    <img class = "rounded-md h-[150px] object-cover" src="https://moviestack.onrender.com/static/${movie.image}" alt="${movie.title}">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-[30px] absolute -top-2 right-1" viewBox="0 0 24 24">
      <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z"></path>
    </svg>
    <!-- <svg xmlns="http://www.w3.org/2000/svg" class="filled" viewBox="0 0 24 24">
       <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z"></path>
     </svg> -->
     </div>
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