
const apiKey = '310f55bc3bc43f0ecc4acf75c1261ab1';
let movies = [];

fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=pt-br`)
    .then((response) => response.json())
    .then(data => console.log(data))
    .catch(error => {
        console.error('Ocorreu um erro ao obter os filmes populares', error);
    })