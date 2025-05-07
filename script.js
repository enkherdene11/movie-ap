const searchForm = document.querySelector("form");
const movieContainer = document.querySelector(".movie-container");
const moviePoster = document.querySelector(".movie-poster");
const movieDetails = document.querySelector(".movie-details");

const inputBox = document.querySelector(".inputBox");

const getMovieInfo = async (movie) => {
  const myAPIKey = "f354af57";
  const url = `http://www.omdbapi.com/?apikey=${myAPIKey}&t=${movie}`;

  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  showMovieData(data)

}

const showMovieData = (data) => {
  movieContainer.innerHTML = ""
  const { Title, imdbRating, Genre, Released, Actors, Plot, Poster, Runtime } = data

  const movieElemant = document.createElement('div')




  movieElemant.innerHTML = `<h2>${Title}</h2>
<p><strong>released Date: </strong>${imdbRating}</p>
<p><strong>rating Date: </strong>${Released}</p>
<p><strong>cast Date: </strong>${Actors}</p>
<p><strong>description Date: </strong>${Plot}</p>
<p><strong>duration Date: </strong>${Runtime}</p>
`;



  const movieGenreElement = document.createElement('div')
  movieGenreElement.classList.add('movie-genre')
  Genre.split(",").forEach(Element => {
    const p = document.createElement("p")
    p.innerText = Element
    movieGenreElement.appendChild(p)
  })
  // kimomii poster zurag gargaj ireh hesgiin code
  const moviePosterElemeet = document.createElement('div')
  moviePosterElemeet.classList.add('movin-poster')
  moviePosterElemeet.innerHTML = `<img src="${Poster}"/>`
  movieContainer.appendChild(moviePosterElemeet)

  movieContainer.appendChild(movieElemant)
}



searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const movieName = inputBox.value.trim();
  if (movieName !== '') {
    getMovieInfo(movieName)
  }
});
