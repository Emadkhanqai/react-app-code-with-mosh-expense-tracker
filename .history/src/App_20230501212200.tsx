import { useState } from "react";
import Alert from "./components/Alert";
import ListGroup from "./ListGroup";
import ExpenseList from "./expense-tracker/expense-list";

function App() {
  const cities = ["Karachi", "Lahore", "Hyderabad"];
  const [showAlert, setAlert] = useState(false);
  return (
    <>
     <ExpenseList></ExpenseList>
    </>
  );
}

export default App;
