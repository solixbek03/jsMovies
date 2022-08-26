let normalizedMovies = [];

movies.forEach((movie) => {
  normalizedMovies.push({
    title: movie.Title,
    fullTitle: movie.fulltitle,
    // movieYear: movie.movieYear,
    categories: movie.Categories,
    summary: movie.summary,
    // movieRating: movie.imdbRating,
    language: movie.language,
    youtube: `https://www.youtube.com/embed/${movie.ytid}`,
    imgHD: `https://i3.ytimg.com/vi/${movie.ytid}/maxresdefault.jpg`,
  })
})

console.log(normalizedMovies);


let elMoviesList = $(".js-movies-list");
let elNormalizedMoviesTemplate = $("#template-movies-element").content;

let createMovieElement = (normalizedMovie) => {
  let elNewNormalizedMovies = elNormalizedMoviesTemplate.cloneNode(true);



  elNewNormalizedMovies.querySelector(".card-link").href = normalizedMovie.youtube;
  elNewNormalizedMovies.querySelector(".card-img").alt = normalizedMovie.title;
  elNewNormalizedMovies.querySelector(".card-img").src = normalizedMovie.imgHD;

  elNewNormalizedMovies.querySelector(".card-title").textContent = normalizedMovie.fullTitle;

  // elNewNormalizedMovies.querySelector(".card-text").textContent = normalizedMovie.categories.join(", ");

  return elNewNormalizedMovies;
}

let renderPokemons = (normalizedMovies) => {
  let elnormalizedMoviesWrapperFragment = document.createDocumentFragment();

  normalizedMovies.forEach((normalizedMovie) => {
    elnormalizedMoviesWrapperFragment.appendChild(createMovieElement(normalizedMovie));
  })

  elMoviesList.appendChild(elnormalizedMoviesWrapperFragment);
}

renderPokemons(normalizedMovies);




























// pokemons.forEach(pokemon => {
//   let elNewItem = createElement("li", "card mb-3 text-center pb-2 card-item");

//   let elNewImg = createElement("img", "card-img-top card-img");
//   elNewImg.src = pokemon.img;
//   elNewImg.alt = pokemon.name;
//   elNewImg.width = 250;
//   elNewImg.height = 200;

//   let elNewTitle = createElement("h5", "card-title", pokemon.name);

//   let elNewText = createElement("p", "card-text", pokemon.weaknesses.join(", "));

//   elNewItem.append(elNewImg, elNewTitle, elNewText);

//   elList.appendChild(elNewItem);
// });













// let createPokemonElement = (pokemon) => {
//   let elNewElement = elPokemonTemplate.cloneNode(true);

//   elNewElement.querySelector(".card-img").src = pokemon.img;
//   elNewElement.querySelector(".card-img").alt = pokemon.name;

//   elNewElement.querySelector(".card-title").textContent = pokemon.name;
//   elNewElement.querySelector(".card-text").textContent = pokemon.weaknesses.join(", ");

//   return elNewElement;
// }

// let renderPokemons = (pokemons) => {
//   elList.innerHTML = "";

//   let elPokemonsWrapperFragment = document.createDocumentFragment();

//   pokemons.forEach(pokemon => {
//     elPokemonsWrapperFragment.appendChild(createPokemonElement(pokemon));
//   });
//   elList.appendChild(elPokemonsWrapperFragment);
// }

// renderPokemons(pokemons);








