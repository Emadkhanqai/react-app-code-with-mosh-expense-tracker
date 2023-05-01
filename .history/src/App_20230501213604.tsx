import { useState } from "react";
import Alert from "./components/Alert";
import ListGroup from "./ListGroup";
import ExpenseList, { Expense } from "./expense-tracker/expense-list";

function App() {
  const [expenses, setExpense] = useState([
    {
      id: 1,
      description: "Emad Khan",
      price: 20,
    },
    {
      id: 2,
      description: "Emad Khan",
      price: 40,
    },
  ]);
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
