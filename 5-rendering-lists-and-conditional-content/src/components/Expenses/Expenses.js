import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";

const Expenses = (props) => {
  const year = new Date().getFullYear().toString();
  const [filteredYear, setFilteredYear] = useState(year);
  const filterHandler = (year) => {
    setFilteredYear(year);
  };

  const filteredExpenses = props.items.filter((expenses) => {
    return expenses.date.getFullYear().toString() === filteredYear;
  });

  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter
          onSelectedYear={filteredYear}
          onFilterYear={filterHandler}
        />
        <ExpenseList items={filteredExpenses} />
      </Card>
    </li>
  );
};
export default Expenses;

// let filterInfoText = "2021, 2022, 2024 e 2025";
// if (filteredYear === "2022") {
//   filterInfoText = "2021, 2023, 2024 e 2025";
// } else if (filteredYear === "2021") {
//   filterInfoText = "2022, 2023, 2024 e 2025";
// } else if (filteredYear === "2024") {
//   filterInfoText = "2021, 2022, 2023 e 2025";
// } else if (filteredYear === "2025") {
//   filterInfoText = "2021, 2022, 2023 e 2024";
//
/* Outros formas de verificar se a lista esta vazia */

/* ------------------------------------------------------------------------------------ */

/* se filteredExpenses.length === 0 mostre a mensagem */

/* {filteredExpenses.length === 0 && <p>Nenhuma despesa encontrada.</p>} */

/* se filteredExpenses.length > 0 rendereze a lista */

/* {filteredExpenses.length > 0 &&
  filteredExpenses.map((expenses) => (
    <ExpenseItem
    key={expenses.id}
    title={expenses.title}
              amount={expenses.amount}
              date={expenses.date}
            />
          ))} */

/* Se não encontrar nenhuma despesa no filtro mostre a mensagem, senão, carregue a despesa
        {filteredExpenses.length === 0 ? <p>Nenhuma despesa encontrada.</p> : filteredExpenses.map((expenses) => (
          <ExpenseItem
            key={expenses.id}
            title={expenses.title}
            amount={expenses.amount}
            date={expenses.date}
          />
        ))} */

/* <p>As datas dos anos {filterInfoText} está escondida</p> */

/* <ExpenseItem
          title={props.items[0].title}
          amount={props.items[0].amount}
          date={props.items[0].date}
        />
        <ExpenseItem
          title={props.items[1].title}
          amount={props.items[1].amount}
          date={props.items[1].date}
        />
        <ExpenseItem
          title={props.items[2].title}
          amount={props.items[2].amount}
          date={props.items[2].date}
        />
        <ExpenseItem
          title={props.items[3].title}
          amount={props.items[3].amount}
          date={props.items[3].date}
        /> */
