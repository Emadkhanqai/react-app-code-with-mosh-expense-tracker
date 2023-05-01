import { useState } from "react";
import Alert from "./components/Alert";
import ListGroup from "./ListGroup";
import ExpenseList, { Expense } from "./expense-tracker/expense-list";

function App() {
  const expenses: Expense[] = [
    {
      id: 1,
      description: "test",
      price: 20,
    },
  ];
  return (
    <>
      <ExpenseList
        expenses={expenses}
        handleDelete={(y: number) => expenses.filter((i) => i.id !== y)}
      ></ExpenseList>
    </>
  );
}

export default App;
