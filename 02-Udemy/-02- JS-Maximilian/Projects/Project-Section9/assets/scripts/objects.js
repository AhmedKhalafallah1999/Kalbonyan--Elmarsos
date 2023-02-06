const addMovieBtn = document.getElementById("add-movie-btn");
const searchMovieBtn = document.getElementById("search-btn");
// array to store the movies into;
const Movies = [];

// a method for pull the inputs from user and make validation on them;
const addMovieHandler = () => {
  const title = document.getElementById("title").value;
  const extraName = document.getElementById("extra-name").value;
  const extraValue = document.getElementById("extra-value").value;
  if (
    // title.trim() === "" ||
    extraName.trim() === "" ||
    extraValue.trim() === ""
  )
    return;
  const newMovie = {
    info: {
      set title(value) {
        if (value.trim() === "") {
          this._title = "Default";
          return;
        }
        this._title = value;
      },
      get title() {
        return this._title;
      },
      [extraName]: extraValue,
    },
    id: Math.random(),
  };
  newMovie.info.title = title;
  Movies.push(newMovie);
  renderMovies();
};

addMovieBtn.addEventListener("click", addMovieHandler);

// function to prepare the screen to show the array of movies
const renderMovies = (filter = "") => {
  const movieList = document.getElementById("movie-list");

  if (Movies.length === 0) {
    movieList.classList.remove("visible");
    return;
  } else {
    movieList.classList.add("visible");
  }
  movieList.innerHTML = "";

  // For search by title

  const filterElement = !filter
    ? Movies
    : Movies.filter((movie) => movie.info.title.includes(filter));

  // to make the list of unordered list for the movies
  filterElement.forEach((movie) => {
    const movieEl = document.createElement("li");
    let text = movie.info.title + " - ";
    for (const key in movie.info) {
      if (key !== "title" && key !== "_title") {
        text = text + ` ${key}: ${movie.info[key]}`;
      }
    }
    movieEl.textContent = text;

    movieList.append(movieEl);
  });
};

// to prepare the function to give the renderMovies an argument to filter
const searchMovieHandler = () => {
  const filterTerm = document.getElementById("filter-title").value;
  renderMovies(filterTerm);
};

searchMovieBtn.addEventListener("click", searchMovieHandler);
