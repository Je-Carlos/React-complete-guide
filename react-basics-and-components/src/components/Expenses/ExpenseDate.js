import "./ExpenseDate.css";

const ExpenseDate = (props) => {
  // formatando mês de 1 - 12
  const formatedMonth = (oldDate) => {
    const date = new Date(oldDate);
    const monthNames = [
      "Janeiro",
      "Favereiro",
      "Março",
      "Abril",
      "Maio",
      "Junho",
      "Julho",
      "Agosto",
      "Setembro",
      "Outubro",
      "Novembro",
      "Dezembro",
    ];
    return monthNames[date.getMonth() - 1];
  };
  const day = props.date.toLocaleString("pt-BR", { day: "2-digit" });
  const year = props.date.getFullYear();
  return (
    <div className="expense-date">
      <div className="expense-date__day">{day}</div>
      <div className="expense-date__month">{formatedMonth(props.date)}</div>
      <div className="expense-date__year">{year}</div>
    </div>
  );
};
export default ExpenseDate;
