const container = document.querySelector(".container");
const seats = document.querySelectorAll(".row .seat:not(.occupied)");
const count = document.getElementById("count");
const total = document.getElementById("total");
const movieSelect = document.getElementById("movie");







// Get data from local storage and populate UI
function populateUI(){
  const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));
  seats.forEach((seat ,index)=>{
    if (selectedSeats.indexOf(index)>-1 && selectedSeats!==null){
      seat.classList.add('selected');

    }
  });
  const selectedMovieIndex = localStorage.getItem("selectedMovieIndex");
  if (selectedMovieIndex !==null){
    movieSelect.selectedIndex = selectedMovieIndex; 
  }
}

// function to save selected movei index and price
function selectedMovieData(movieIndex, moviePrice) {
  localStorage.setItem("selectedMovieIndex", movieIndex);
  localStorage.setItem("selectedMoviePrice", moviePrice);
}

// to pull the price chosen  or movie select event
let ticketPrice = parseInt(movieSelect.value);
populateUI();




// update total and count
movieSelect.addEventListener("change", (e) => {
  ticketPrice = parseInt(e.target.value);
  // to store the selected data
  selectedMovieData(e.target.selectedIndex, e.target.value);
  updateSelectedCount();
});






















// to screen the number and total price
function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll(".row .seat.selected");
  count.innerText = selectedSeats.length;
  total.innerText = selectedSeats.length * ticketPrice;

  // for local storage to prepare the selected index of seats
  const seatsIndex = [...selectedSeats].map((seat) => {
    return [...seats].indexOf(seat);
  });
  // local storage
  localStorage.setItem("selectedSeats", JSON.stringify(seatsIndex));
}















// seat click event
container.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("seat") &&
    !e.target.classList.contains("occupied")
  ) {
    e.target.classList.toggle("selected");
    updateSelectedCount();
  }
});

// to make local storage
// copy selected seats into array
// map throught array
// return  new array indexes


// when the page reload 
updateSelectedCount();