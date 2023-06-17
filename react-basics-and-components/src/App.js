import ExpenseItem from "./components/ExpenseItem";

function App() {
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
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      />
    </div>
  );
}

export default App;
