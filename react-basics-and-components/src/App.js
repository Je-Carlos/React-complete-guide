import Expenses from "./components/Expenses";

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
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
