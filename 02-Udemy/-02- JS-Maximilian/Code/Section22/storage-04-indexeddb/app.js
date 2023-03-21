// indexDp overflow
const storeBtn = document.getElementById("store-btn");
const retrBtn = document.getElementById("retrieve-btn");
let db;
// this return db request so, we will return into s variable
const dbRequest = indexedDB.open("StorageDummy", 1);
dbRequest.onsuccess = function (event) {
  db = event.target.result;
  console.log(db);
};

dbRequest.onupgradeneeded = function (event) {
  db = event.target.result;
  // console.log(db);

  const objStore = db.createObjectStore("products", { keyPath: "id" });
  objStore.transaction.oncomplete = function (event) {
    const productsStore = db
      .transaction("products", "readwrite")
      .objectStore("products");
    productsStore.add({ id: "p1", title: "A first Product", price: 12.9 });
  };
};
dbRequest.onerror = function (event) {
  console.log("ERROR!");
};

storeBtn.addEventListener("click", () => {
  if (!db) {
    return;
  }
  const productsStore = db
    .transaction("products", "readwrite")
    .objectStore("products");
  productsStore.add({ id: "p2", title: "A Second Product", price: 122.9 });
});

retrBtn.addEventListener("click", () => {
  const productsStore = db
    .transaction("products", "readwrite")
    .objectStore("products");
  const request = productsStore.get("p2");
  request.onsuccess = function () {
    console.log(request.result);
  };
});
