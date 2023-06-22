import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredNumber, setEnteredNumber] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredNumber: "",
  //   enteredDate: "",
  // });

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });
  };
  const amountChangeHandler = (event) => {
    setEnteredNumber(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredNumber: event.target.value,
    // });
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    /* --------------------------------------------------------------------------------
    Essa forma pode dar problema devido a natureza assíncrona do React, ele pode 
    não atualizar o valor correto 

    setUserInput({ ...userInput, enteredDate: event.target.value });
    --------------------------------------------------------------------------------
    Essa forma é a mais segura, pois o React garante que o valor será atualizado 

    setUserInput((prevState) => {
      return { ...prevState, enteredDate: event.target.value };
    });
    --------------------------------------------------------------------------------
    */
  };
  /*  Outra forma de poder receber os valores dos inputs, é passando um identificador
      para a função e usando um if para verificar qual input está sendo alterado.
      
   const inputChangeHandler = (identifier, value) => {
     if (identifier === "title") {
       setEnteredTitle(value);
     } else if (identifier === "amount") {
       setEnteredNumber(value);
     } else if (identifier === "date") {
       setEnteredDate(value);
     }
   }; */
  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredNumber,
      date: new Date(enteredDate),
    };
    console.log(expenseData);
    setEnteredTitle("");
    setEnteredNumber("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Despesa</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
          {/* Também pode ser feito assim: 
          onChange={(event) => inputChangeHandler("title", event.target.value)} */}
        </div>

        <div className="new-expense__control">
          <label>Valor</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredNumber}
            onChange={amountChangeHandler}
          />
        </div>

        <div className="new-expense__control">
          <label>Data</label>
          <input
            type="date"
            min="2021-01-01"
            max="2025-12-31"
            value={enteredDate}
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
