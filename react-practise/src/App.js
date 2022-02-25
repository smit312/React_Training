import React, { useState } from "react";
import "./App.css";
import SearchFilter from "./components/SearchFilter";
import Expenseform from "./components/Expenseform";
import Counter from "./components/Counter";
import { Todo } from "./components/Todo";
import ApiData from "./components/ApiData";
import UserData from "./components/UserData";
import LocalStore from "./components/LocalStore";
function App() {
  const ExpenseDataHandler = (enterdExpenseData) => {
    const expenseData = {
      ...enterdExpenseData,
      id: Math.random().toString(),
    };
    // console.log(expenseData);

    console.log(expenseData);
  };

  return (
    <>
      <h1>Hello from the app.js</h1>
      <Expenseform onSaveExpenseData={ExpenseDataHandler} />
      <SearchFilter />
      <Counter />
      <Todo />
      <ApiData />
      <UserData />
      <LocalStore />
    </>
  );
}
export default App;
