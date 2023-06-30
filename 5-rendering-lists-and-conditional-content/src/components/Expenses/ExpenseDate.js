import "./ExpenseDate.css";

const ExpenseDate = (props) => {
  // formatando mês de 1 - 12
  // const formatedMonth = (oldDate) => {
  //   const date = new Date(oldDate);
  //   const monthNames = [
  //     "Janeiro",
  //     "Favereiro",
  //     "Março",
  //     "Abril",
  //     "Maio",
  //     "Junho",
  //     "Julho",
  //     "Agosto",
  //     "Setembro",
  //     "Outubro",
  //     "Novembro",
  //     "Dezembro",
  //   ];
  //   return monthNames[date.getMonth()];
  // };
  const day = props.date.toISOString().slice(8, 10).padStart(2, "0");
  const year = props.date.getFullYear();
  const month = props.date.toLocaleString("pt-BR", { month: "long" });
  return (
    <div className="expense-date">
      <div className="expense-date__day">{day}</div>
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
    </div>
  );
};
export default ExpenseDate;
