import { useState } from "react";
import ExpenseList from "./expense-tracker/expense-list";

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
        handleDelete={(y: number) =>
          setExpense(expenses.filter((i) => i.id !== y))
        }
      ></ExpenseList>
    </>
  );
}

export default App;
