import "./ExpenseItem.css";

function ExpenseItem(props) {
  // formatando data para dd/mm/yyyy
  function FormatedExpenseDate(oldDate) {
    const date = new Date(oldDate);
    const day = date.getDate();
    const month = date.getMonth() - 1;
    const year = date.getFullYear();
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    const newDate = new Date(year, month, day);
    return newDate.toLocaleDateString("pt-BR", options);
  }

  return (
    <div className="expense-item">
      <div className="expense-item__date">
        {FormatedExpenseDate(props.date)}
      </div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
      </div>
      <div className="expense-item__price">R$ {props.amount.toFixed(2)}</div>
    </div>
  );
}
export default ExpenseItem;
