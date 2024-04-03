let container = document.getElementById('container')

function createCard(movies) {
    let template = document.createElement('template')
    
    for (const movie of movies) {
        
        let overview = movie.overview.slice(0, 50) + ' ...'
        
        template.innerHTML += `<div class = "rounded-md object-contain w-[50%] min-h-fit bg-[#D2CCFF] md:w-1/3 lg:w-1/4 p-3 lg:text-lg">
        <img class = "rounded-md h-50%"src="${movie.image}" alt="">
        <div class = "gap-2 p-1 flex flex-col">
        <h2 class ="text-center border-2 border-white">${movie.title}</h2>
        <p>${movie.tagline}</p>
        <p class = "text-justify">${overview}</p>
        </div>
        </div>`
    }
    return container.innerHTML = template.innerHTML
}

createCard(movies)