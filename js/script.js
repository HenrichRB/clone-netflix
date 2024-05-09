
const apiKey = '310f55bc3bc43f0ecc4acf75c1261ab1';
let movies = [];

fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=pt-br`)
    .then((response) => response.json())
    .then(data => {
        const movies = data.results;
        const $movieContainer = document.getElementById('movie-container');

        movies.forEach((movie) => {
            const {title, poster_path, overview} = movie;
            const movieElement = document.createElement('div');
            movieElement.classList.add('movie');
            movieElement.innerHTML = `
            <h2>${title}</h2>
            <img src="https://image.tmdb.org/t/p/w500/${poster_path}" alt="${title} Poster">
            <p>${overview}</p>
            `;

            $movieContainer.appendChild(movieElement);
        });
    })
    .catch(error => {
        console.error('Ocorreu um erro ao obter os filmes populares', error);
    })