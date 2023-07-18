import ExpenseList from "./expense-tracker/components/ExpenseList.tsx";
import { useState } from "react";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter.tsx";
import ExpenseForm from "./expense-tracker/components/ExpenseForm.tsx";
// import categories from "./expense-tracker/categories.ts";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [expenses, setExpenses] = useState([
    { id: 1, description: "asdf", amount: 10, category: "Utilities" },
  ]);

  const visibleExpenses = selectedCategory
    ? expenses.filter((exp) => exp.category == selectedCategory)
    : expenses;

  return (
    <>
      <div className="mb-5">
        <ExpenseForm />
      </div>
      <div className="mb-3">
        <ExpenseFilter
          onSelectCategory={(category) => setSelectedCategory(category)}
        />
      </div>
      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) => setExpenses(expenses.filter((exp) => exp.id !== id))}
      ></ExpenseList>
    </>
  );
}

export default App;
