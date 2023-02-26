const userInputs = document.querySelectorAll("input");
const addMovieBtn = document.getElementById("add-movie-btn");
const searchMovieBtn = document.getElementById("search-btn");

const movies = [];

// 3
const searchMovieHandler = () => {
  const filterItemSearch = userInputs[3].value;
  renderMovies(filterItemSearch);
};
// 2
const renderMovies = (filterItemSearch = "") => {
  const movieList = document.getElementById("movie-list");
  if (movies.length === 0) {
    movieList.classList.remove("visible");
  } else {
    movieList.classList.add("visible");
  }
  movieList.innerHTML = "";
  const filteredMovieAfterSearch = !filterItemSearch
    ? movies
    : movies.filter((movie) => movie.info.title.includes(filterItemSearch));
  filteredMovieAfterSearch.forEach((movie) => {
    const movieEl = document.createElement("li");
    const { info, ...otherPtops } = movie;
    // we can call the element formatted by three way
    // 1
    //  let text = movie.getTitleFormatted();
    // or
    // let { getTitleFormatted } = movie;
    // getTitleFormatted = getTitleFormatted.bind(movie) + "- ";
    // or
    let { getTitleFormatted } = movie;
    
    let text = getTitleFormatted.apply(movie);
    for (const key in info) {
      if (key !== "title") {
        text = text + `${key}: ${info[key]}`;
      }
    }
    movieEl.textContent = text;
    movieList.append(movieEl);
  });
};

// 1
function addMovieHandler() {
  const title = userInputs[0].value;
  const extraName = userInputs[1].value;
  const rate = userInputs[2].value;
  if (title.trim() === "" || extraName.trim() === "" || rate.trim() === "") {
    alert("Please enter valid data");
    return;
  }
  const newMovie = {
    info: {
      title: title,

      [extraName]: rate,
    },
    // we can use get and set
    // info: {
    //   set title(val){
    //     if (val.trim() ==='') {
    //       this._title = 'DEFAULT';
    //       return;
    //     }
    //     this._title = val;
    //   },
    //   get title(){
    //     return this._title;
    //   },
    //   [extraName]: rate
    // },

    id: Math.random().toString(),

    getTitleFormatted() {
      return this.info.title.toUpperCase();
    },
  };
  // newMovie.info.title = title;

  movies.push(newMovie);
  renderMovies();
}
addMovieBtn.addEventListener("click", addMovieHandler);
searchMovieBtn.addEventListener("click", searchMovieHandler);
