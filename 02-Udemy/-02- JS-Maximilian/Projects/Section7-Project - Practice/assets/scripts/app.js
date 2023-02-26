const backDrop = document.getElementById("backdrop");
const addMovieModal = document.getElementById("add-modal");
const startAddMovieBtn = document.querySelector("header").lastElementChild;
const userInputs = document.querySelectorAll("input");
const cancelMovie = document.querySelector(".btn--passive");
const confirmMovie = document.querySelector(".btn--success");
const deleteModalAfterAddition = document.getElementById("delete-modal");
const entryText = document.getElementById("entry-text");

const movies = [];
// 12
const closeMovieModel = () => {
  addMovieModal.classList.remove("visible");
  dropBack();
};
// 11
function deleteMovie(movieId) {
  let movieIndex = 0;
  for (const movie of movies) {
    if (movie.Id === movieId) {
      break;
    }
    movieIndex++;
  }
  movies.splice(movieIndex, 1);
  const moviesList = document.getElementById("movie-list");
  moviesList.children[movieIndex].remove();
  // moviesList.removeChild(moviesList.children[movieIndex]);

  closeDeleteModal();
  updateUI();
}
// 10
function closeDeleteModal() {
  deleteModalAfterAddition.classList.remove("visible");
  dropBack();
}
// 9
function startDeleteMovieHandler(movieId) {
  deleteModalAfterAddition.classList.add("visible");
  dropBack();
  const cancelDeletion =
    deleteModalAfterAddition.querySelector(".btn--passive");
  const confirmDeletion =
    deleteModalAfterAddition.querySelector(".btn--danger");
  cancelDeletion.addEventListener("click", closeDeleteModal);
  confirmDeletion.addEventListener("click", deleteMovie.bind(null, movieId));
}
// 8
function updateUI() {
  if (movies.length === 0) {
    entryText.style.display = "block";
  } else entryText.style.display = "none";
}

// 7
function cancelMovieBeforeAddition() {
  // this function need to be a reasonable by making another name
  closeMovieModel();
  clearInputs();
}
// 6
function renderNewMovieElement(id, title, url, rating) {
  const newMovieElement = document.createElement("li");
  newMovieElement.className = "movie-element";
  newMovieElement.innerHTML = `
  <div class="movie-element__image">
      <img src="${url}" alt="${title}">
    </div>
    <div class="movie-element__info">
      <h2>${title}</h2>
      <p>${rating}/5 stars</p>
    </div>
  `;
  newMovieElement.addEventListener(
    "click",
    startDeleteMovieHandler.bind(null, id)
  );
  const moviesList = document.getElementById("movie-list");
  moviesList.append(newMovieElement);
}

// 5
function clearInputs() {
  for (const userInput of userInputs) {
    userInput.value = "";
  }
}
// 4
function addMovieHandler() {
  const movieTitle = userInputs[0].value;
  const movieURL = userInputs[1].value;
  const movieRating = userInputs[2].value;
  if (
    movieTitle.trim() === "" ||
    movieURL.trim() === "" ||
    movieRating.trim() === "" ||
    +movieRating < 1 ||
    +movieRating > 5
  ) {
    alert(
      "Please Enter a valid data, (Make sure the rating should be between 1 and 5)"
    );
    return;
  }
  const newMovie = {
    Id: Math.random().toString(),
    Title: movieTitle,
    URL: movieURL,
    Rating: movieRating,
  };
  movies.push(newMovie);
  // this function need to be a reasonable by making another name
  showMovieModel();
  clearInputs();
  renderNewMovieElement(
    newMovie.Id,
    newMovie.Title,
    newMovie.URL,
    newMovie.Rating
  );
  updateUI();
}

// 3
function backDropClick() {
  closeMovieModel();
  deleteModalAfterAddition.classList.remove("visible");
  clearInputs();
}
// 2
function dropBack() {
  backDrop.classList.toggle("visible");
}
// 1
function showMovieModel() {
  addMovieModal.classList.toggle("visible");
  dropBack();
}

startAddMovieBtn.addEventListener("click", showMovieModel);
backDrop.addEventListener("click", backDropClick);
confirmMovie.addEventListener("click", addMovieHandler);
cancelMovie.addEventListener("click", cancelMovieBeforeAddition);

// test function
