// local storage and session storage
// local storage
const storeBtn = document.getElementById("store-btn");
const retrBtn = document.getElementById("retrieve-btn");
const userId = "AHmed";
const user = {
  name: 'Max',
  age: 30,
  hobbies: ['Sports', 'Cooking']
};

storeBtn.addEventListener("click", () => {
  sessionStorage.setItem("special", userId);
  localStorage.setItem("obj", JSON.stringify(user));
});
retrBtn.addEventListener("click", () => {
  const extractedId = sessionStorage.getItem("special");
  const extractedI =JSON.parse(localStorage.getItem("obj"));
  console.log(extractedI);
  if (extractedId) {
    console.log(extractedId);
  } else {
    console.log("Coundn't find the id");
  }
});
// session storage