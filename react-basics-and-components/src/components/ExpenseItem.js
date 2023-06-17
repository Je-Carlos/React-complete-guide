import "./ExpenseItem.css";

function ExpenseItem() {
  return (
    <div className="expense-item">
      <div>17 de Junho 2023</div>
      <div className="expense-item__description">
        <h2>Teclado</h2>
      </div>
      <div className="expense-item__price">R$ 144.90</div>
    </div>
  );
}
export default ExpenseItem;
