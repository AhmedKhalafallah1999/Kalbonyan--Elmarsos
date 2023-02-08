const main = document.getElementById("main");
const addUser = document.getElementById("add-user");
const doubleMoney = document.getElementById("double");
const showMillionaires = document.getElementById("show-millionaires");
const sortUsers = document.getElementById("sort");
const calculateWealth = document.getElementById("calculate-wealth");
let data = [];

// 1 => Fetch random user and add money
async function getRandomUser() {
  const res = await fetch("https://randomuser.me/api");
  const data = await res.json();
  const user = data.results[0];
  const newUser = {
    name: `${user.name.first} ${user.name.last}`,
    money: Math.floor(Math.random() * 100000),
  };
  addData(newUser);
}

// 2 => function to add opjects into an array
function addData(newUser) {
  data.push(newUser);
  updateDom();
}

// 3 => function to upadat the Dom
function updateDom(providedData = data) {
  // clear the main
  main.innerHTML = `<h2><strong>Person</strong> Wealth</h2>`;
  providedData.forEach((item) => {
    const element = document.createElement("div");
    element.classList.add("person");
    element.innerHTML = `<strong>${item.name}</strong> ${formatMoney(
      item.money
    )}`;
    main.appendChild(element);
  });
}

// 4 => format number as money
function formatMoney(money) {
  return "$" + money.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
}

// 5 => doublyMoney function
function doublyMoney() {
  data = data.map((item) => {
    return { ...item, money: item.money * 2 };
    // item.money = item.money * 2;
  });
  updateDom();
  // updateDom(newData);
}
//6 => sortedMoney
function sortedMoney() {
  data = data.sort((a, b) => b.money - a.money);
  updateDom();
}

// 7 => filterByMillonairs
function filterByMillonairs() {
  data = data.filter((item) => item.money > 1000000);
  updateDom();
}
// 8 => calculateWealth
function calculateWealthF() {
  const totalWealth = data.reduce((acc, user) => (acc += user.money), 0);
  const moneyEl = document.createElement("div");
  moneyEl.innerHTML = `<h3>Total Wealth: <strong>${formatMoney(
    totalWealth
  )}</strong></h3>`;
  main.appendChild(moneyEl);
}

// *** => add event listinner for all buttons
addUser.addEventListener("click", getRandomUser);
doubleMoney.addEventListener("click", doublyMoney);
sortUsers.addEventListener("click", sortedMoney);
showMillionaires.addEventListener("click", filterByMillonairs);
calculateWealth.addEventListener("click", calculateWealthF);
