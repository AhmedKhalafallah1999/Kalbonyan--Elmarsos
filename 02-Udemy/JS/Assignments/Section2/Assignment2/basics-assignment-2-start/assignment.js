const task3Element = document.getElementById("task-3");
function myName() {
  alert("Hi Youssef Faisel");
}
function myFriendName(name) {
  alert("Hi " + name);
}
myName();
myFriendName("Samy");
task3Element.addEventListener("click", myName);
function myFamily(name1, name2, name3) {
  return name1 + " " + name2 + " " + name3;
}
let result = myFamily("Jody", "Ali", "Mohamed");
alert(result);
