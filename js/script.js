
const apiKey = '310f55bc3bc43f0ecc4acf75c1261ab1';
let movies = [];

fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=pt-br`)
    .then((response) => response.json())
    .then(data => {
        const movies = data.results;
        const $movieContainer = document.getElementById('movie-container');

        movies.forEach((movie) => {
            const {id, title, poster_path, overview} = movie;
            const movieElement = document.createElement('div');
            movieElement.classList.add('movie');
            movieElement.innerHTML = `
            
            <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal-${id}">
                    <img src="https://image.tmdb.org/t/p/w500/${poster_path}" alt="${title} Poster">
                </button>

                <div class="modal fade modal-lg my-modal" id="exampleModal-${id}" tabindex="-1" aria-labelledby="exampleModalLabel-${id}" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content bg-meu">
                            <div class="modal-header d-flex align-items-center justify-content-center">
                                <h1 class="modal-title fs-5 w-100" id="exampleModalLabel-${id}">${title}</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <img src="https://image.tmdb.org/t/p/w500/${poster_path}" alt="${title} Poster">
                                <p>${overview}</p>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            `;

            $movieContainer.appendChild(movieElement);
        });
    })
    .catch(error => {
        console.error('Ocorreu um erro ao obter os filmes populares', error);
    })