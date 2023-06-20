import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  // const [enteredTitle, setEnteredTitle] = useState("");
  // const [enteredNumber, setEnteredNumber] = useState("");
  // const [enteredDate, setEnteredDate] = useState("");
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredNumber: "",
    enteredDate: "",
  });

  const titleChangeHandler = (event) => {
    // setEnteredTitle(event.target.value);
    setUserInput({
      ...userInput,
      enteredTitle: event.target.value,
    });
  };
  const amountChangeHandler = (event) => {
    // setEnteredNumber(event.target.value);
    setUserInput({
      ...userInput,
      enteredNumber: event.target.value,
    });
  };
  const dateChangeHandler = (event) => {
    // setEnteredDate(event.target.value);
    setUserInput({ ...userInput, enteredDate: event.target.value });
  };

  return (
    <form action="">
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Despesa</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>

        <div className="new-expense__control">
          <label>Valor</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>

        <div className="new-expense__control">
          <label>Data</label>
          <input
            type="date"
            min="2021-01-01"
            max="2025-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Adicionar</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
