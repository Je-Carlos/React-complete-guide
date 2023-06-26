import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2023");
  // let filterInfoText = "2021, 2022, 2024 e 2025";
  // if (filteredYear === "2022") {
  //   filterInfoText = "2021, 2023, 2024 e 2025";
  // } else if (filteredYear === "2021") {
  //   filterInfoText = "2022, 2023, 2024 e 2025";
  // } else if (filteredYear === "2024") {
  //   filterInfoText = "2021, 2022, 2023 e 2025";
  // } else if (filteredYear === "2025") {
  //   filterInfoText = "2021, 2022, 2023 e 2024";
  // }
  const filterHandler = (year) => {
    setFilteredYear(year);
  };
  return (
    <div>
      <Card className="expenses">
        {props.items.map((expenses) => (
          <ExpenseItem
            title={expenses.title}
            amount={expenses.amount}
            date={expenses.date}
          />
        ))}
        <ExpensesFilter
          onSelectedYear={filteredYear}
          onFilterYear={filterHandler}
        />
        {/* <p>As datas dos anos {filterInfoText} está escondida</p> */}
        {/* <ExpenseItem
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
        /> */}
      </Card>
    </div>
  );
};
export default Expenses;
