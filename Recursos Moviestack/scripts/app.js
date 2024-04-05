let container = document.getElementById('container')

let movies = data.map(movie => movie)

function createCard(movie) {
    
    let template = document.createElement('template')
    
    let overview = movie.overview.slice(0, 50) + ' ...'
        
    template.innerHTML += `<div class = "rounded-md object-contain w-[70%] h-[320px] bg-[#D2CCFF] md:w-1/3 lg:w-1/4 p-3 lg:text-lg lg:h-[350px]">
    <img class = "rounded-md h-[50%]"src="${movie.image}" alt="">
    <div class = "gap-2 p-1 flex flex-col">
    <h2 class ="text-center border-2 border-white">${movie.title}</h2>
    <p>${movie.tagline}</p>
    <p class = "text-justify text-xs">${overview}</p>
    </div>
    </div>`

    return template.innerHTML
}

function renderCards (movies, container) {
    for (movie of movies) {
        container.innerHTML += createCard(movie)
    }
    return container   
}

renderCards(movies, container)