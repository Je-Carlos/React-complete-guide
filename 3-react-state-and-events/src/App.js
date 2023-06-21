// import React from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const expenses = [
    { id: "e1", title: "Teclado", amount: 144.9, date: new Date(2023, 6, 17) },
    {
      id: "e2",
      title: "Papel Higiênico",
      amount: 14.99,
      date: new Date(2023, 6, 12),
    },
    {
      id: "e3",
      title: "Fone de Ouvido",
      amount: 169.99,
      date: new Date(2023, 1, 16),
    },
    { id: "e4", title: "Tênis", amount: 129.99, date: new Date(2023, 3, 2) },
  ];

  // Como funciona o React por baixo dos panos, sem utilizar a sintexe de JSX (Nessário fazer o import React)
  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );

  return (
    <div>
      <NewExpense />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
