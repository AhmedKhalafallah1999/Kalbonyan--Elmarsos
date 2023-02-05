const inUser = prompt('enter your name');
const sayHello = (name) => console.log("Hi " + name);
const sayHello2 = (name, phrase) => console.log(phrase + ' ' + name);
const sayHello3 = () => console.log('Hi Hard-coded!');
const sayHello4 = name => 'Hi ' + name;
const sayHello5 = (name, phrase = 'Hi') => console.log(phrase + ' ' + name);
sayHello(inUser);
sayHello2(inUser, 'Hello');
sayHello3();
console.log(sayHello4(inUser));
sayHello5(inUser);
sayHello5(inUser, 'Hello');
function checkInput(cb, ...strings) {
  let hasEmptyText = false;
  for (const text of strings) {
    if (!text) {
      hasEmptyText = true;
      break;
    }
  }
  if (!hasEmptyText) {
    cb();
  }
}

checkInput(
  () => {
    console.log('All not empty!');
  },
  'Hello',
  '12',
  'adsfa',
  'Not empty'
);
