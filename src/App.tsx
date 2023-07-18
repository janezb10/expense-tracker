import ExpenseList from "./expense-tracker/components/ExpenseList.tsx";
import { useState } from "react";

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, description: "asdf", amount: 10, category: "Utilities" },
  ]);

  return (
    <>
      <ExpenseList
        expenses={expenses}
        onDelete={(id) => setExpenses(expenses.filter((exp) => exp.id !== id))}
      ></ExpenseList>
    </>
  );
}

export default App;
