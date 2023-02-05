const addMovieModelElement = document.getElementById("add-modal");
// const addMovieModel = document.querySelector('#add-modal');
// const addMovieModel = document.body.children[1];
const startAddMovieButton = document.querySelector("header button");
// const startAddMovieButton = document.querySelector('header').lastElementChild();
const backdrop = document.getElementById("backdrop");
// const backdrop = document.body.firstElementChild;
const cancelAddMovieButton =
  addMovieModelElement.querySelector(".btn--passive");
const confirmAddMovieButton = cancelAddMovieButton.nextElementSibling;
const userInputs = addMovieModelElement.querySelectorAll("input");
// const userInputs = addMovieModelElement.getElementsByTagName('input');
const entryText = document.getElementById("entry-text");


const deleteMovieModel = document.getElementById("delete-modal");

// done
const deleteMovie = (movieId) => {
  let indexIdMovie = 0;
  for (const movie of movies) {
    if (movie.id === movieId) {
      break;
    }
    indexIdMovie++;
   
  }
  movies.splice(indexIdMovie, 1);
  const listRoot = document.getElementById("movie-list");
  // listRoot.children[indexIdMovie].remove();
  listRoot.removeChild(listRoot.children[indexIdMovie]);
  cancelMovieDeletion();
  updateUl();
};

// done
const cancelMovieDeletion = () => {
  toggleBackdrop();
  deleteMovieHandler.classList.remove("visible");
};
// done
const updateUl = () => {
  if (movies.length === 0) {
    entryText.style.display = "block";
  } else {
    entryText.style.display = "none";
  }
};



// done
const renderNewMovieElement = (id, title, imgUrl, rating) => {
  const newMovieElement = document.createElement("li");
  newMovieElement.className = "movie-element";
  newMovieElement.innerHTML = `
  <div class=".movie-element__image">
  <img src="${imgUrl}" alt="${title}">
  </div>
  <div class=".movie-element__info">
  <h2>${title}</h2>
  <p>${rating}/5 stars</p>
  </div>
  `;
  newMovieElement.addEventListener("click", deleteMovieHandler.bind(null, id));
  const listRoot = document.getElementById("movie-list");
  listRoot.append(newMovieElement);
};

const deleteMovieHandler = (movieId) => {
  deleteMovieModel.classList.add("visible");
  toggleBackdrop();
  // deleteMovie(movieId);
  const cancelDeletionButton = deleteMovieModel.querySelector(".btn--passive");
  let confirmationDeletionButton =
    deleteMovieModel.querySelector(".btn--danger");
    confirmationDeletionButton.replaceWith(confirmationDeletionButton.cloneNode(true));
    confirmationDeletionButton = deleteMovieModal.querySelector('.btn--danger');

  cancelDeletionButton.addEventListener("click", cancelMovieDeletion);
 confirmationDeletionButton .addEventListener('click',deleteMovie.bind(null,movieId));

};


// done
const movies = [];

// done
const toggleBackdrop = () => {
  backdrop.classList.toggle("visible");
  
  // cancelMovieDeletion.classList.toggle("visible");
};


//done
const closeMovieModel = () => {
  addMovieModelElement.classList.remove("visible");
};

// done
const showMovieButton = () => {
  addMovieModelElement.classList.add("visible");
  toggleBackdrop();
};

// done
const backDropOnClickHandler = () => {
  closeMovieModel();
  cancelMovieDeletion();
  clearInputs();
};
// done
const cancelAddModelHandler = () => {
  closeMovieModel();
  toggleBackdrop();
  clearInputs();
};
// done
const clearInputs = () => {
  for (const userInput of userInputs) {
    userInput.value = "";
  }
};
// done
const addMovieHandler = () => {
  const textValue = userInputs[0].value;
  const urlValue = userInputs[1].value;
  const ratingValue = userInputs[2].value;
  if (
    textValue.trim() === "" ||
    urlValue.trim() === "" ||
    ratingValue.trim() === "" ||
    +ratingValue < 1 ||
    +ratingValue > 5
  ) {
    alert("Please enter a valid value (rating bertween 1 and 5)");
    return;
  }
  const newMovie = {
    id: Math.random().toString(),
    title: textValue,
    url: urlValue,
    rating: ratingValue,
  };
  movies.push(newMovie);
  console.log(movies);
  closeMovieModel();
  toggleBackdrop();
  clearInputs();
  renderNewMovieElement(
    newMovie.id,
    newMovie.title,
    newMovie.url,
    newMovie.rating
  );
  updateUl();
};
startAddMovieButton.addEventListener("click", showMovieButton);
backdrop.addEventListener("click", backDropOnClickHandler);
cancelAddMovieButton.addEventListener("click", cancelAddModelHandler);
confirmAddMovieButton.addEventListener("click", addMovieHandler);
