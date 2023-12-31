// import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  // const [title, setTitle] = useState(props.title);

  // function clickHandler() {}
  // const clickHandler = () => {
  //   setTitle("Atualizado!");
  // };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
      </div>
      <div className="expense-item__price">R$ {props.amount.toFixed(2)}</div>
      {/* <button onClick={clickHandler}>Change Title</button> */}
    </Card>
  );
};
export default ExpenseItem;
