let id = new URLSearchParams(location.search);

let movie = data.find(movie => movie.id == id.get('id'));

let text = document.getElementById('contenidoTextual');

text.innerHTML = `<img class = "w-[70%] lg:w-[49%]" src="${movie.image}" alt="">
<div class = "flex flex-col items-center gap-2 lg:items-start lg:w-[49%]">      
<h2>${movie.title}</h2>
<h3>${movie.tagline}</h3>
<h4>${movie.genres}</h4>
<p class = "md:pt-10">${movie.overview}</p>
</div>`;

let table1 = document.getElementById('table1');

table1.innerHTML = `<tr class ="border-2 border-white">
        <th class ="border-2 border-white p-2">Original language</th>
        <td class ="border-2 border-white p-2">${movie.original_language}</td>
    </tr>
    <tr class ="border-2 border-white">
        <th class ="border-2 border-white p-2">Release date</th>
        <td class ="border-2 border-white p-2">${movie.releases_date}</td>
    </tr>
    <tr class ="border-2 border-white">
        <th class ="border-2 border-white p-2">Runtime</th>
        <td class ="p-2">${movie.runtime}</td>
    </tr>
    <tr class ="border-2 border-white ">
        <th class ="border-2 border-white p-2">Status</th>
        <td class ="border-2 border-white p-2">${movie.status}</td>
    </tr>`;

let table2 = document.getElementById('table2')

table2.innerHTML = `<tr class ="border-2 border-white">
        <th class ="border-2 border-white p-2">Vote average</th>
        <td class ="p-2">${movie.vote_average}</td>
    </tr>
    <tr class ="border-2 border-white">
        <th class ="border-2 border-white p-2">Budget</th>
        <td class ="p-2">${movie.budget}</td>
    </tr>
    <tr class ="border-2 border-white">
        <th class ="border-2 border-white p-2">Revenue</th>
        <td class ="border-2 border-white p-2">${movie.revenue}</td>
    </tr>`