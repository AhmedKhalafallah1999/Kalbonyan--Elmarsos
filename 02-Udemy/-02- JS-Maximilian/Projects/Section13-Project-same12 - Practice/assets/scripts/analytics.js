const intervalId = setInterval(() => {
  console.log("Sending analytics...");
}, 2000);

document
  .getElementById("stop-analytics")
  .addEventListener("click", () => clearInterval(intervalId));
