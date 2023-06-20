import "./ExpenseForm.css";

const ExpenseForm = () => {
  return (
    <form action="">
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Despesa</label>
          <input type="text" />
        </div>

        <div className="new-expense__control">
          <label>Valor</label>
          <input type="number" min="0.01" step="0.01" />
        </div>

        <div className="new-expense__control">
          <label>Data</label>
          <input type="date" min="2021-01-01" max="2025-12-31" />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Adicionar</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
