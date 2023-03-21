const customers = ["Max", "Manuel", "Anna"];

const activeCustomers = ["Max", "Manuel"];
// if you want to print the difference between the two arrsy:
// const difference = customers - activeCustomers;
// console.log(difference);
// the previous code will print the NAN
// so we will use the third party methods or package called #(loadBash)
// but before using it we need to add the loadDash library to our code by two way
// link or document file after that you can put inside html
const inactiveCustomers = _.difference(customers, activeCustomers);
console.log(inactiveCustomers);

// another library is Jequery / NodeJS
