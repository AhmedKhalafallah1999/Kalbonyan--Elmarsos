const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)
if (randomNumber > 0.7) alert("The variable greater than .7");
else alert("Not Greater");

let arr = [1, 2, 3, 4, 5, 6];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
for (const items of arr) {
  console.log(items);
}
let counter = 0;
while (counter < arr.length) {
  console.log(arr[counter]);
  counter++;
}
for (let i = arr.length - 1; i >= 0; i--) {
  console.log(arr[i]);
}
