import ExpenesItem from "./components/Expenses/ExpenseItem";
import Card from "./components/UI/Card";
import NewExpense from "./components/NewExpense/NewExpense";
// we can neglect this line if you use JSX but you have to add in all pages
// import react from "react";

function App() {
  // const para = document.createElement("p");
  // para.textContent = "This is visible";
  // document.getElementById("root").append(para);
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  const addExpenseHandler = (expense) => {
    console.log("arrived");
    console.log(expense);
  };
  return (
    <Card>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      {/* <h2>Let's get started!</h2> */}
      {/* <p>This is also visible!</p> */}
      <ExpenesItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenesItem>
      <ExpenesItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenesItem>
      <ExpenesItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenesItem>
      <ExpenesItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      ></ExpenesItem>
    </Card>
  );
}

export default App;
