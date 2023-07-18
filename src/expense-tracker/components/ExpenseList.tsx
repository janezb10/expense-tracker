interface Expense {
  id: number;
  description: string;
  amount: number;
}

interface Props {
  expenses: Expense;
}

function ExpenseList() {
  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>Description</th>
          <th>Amount</th>
          <th>Category</th>
          <th></th>
        </tr>
      </thead>
      <tbody></tbody>
    </table>
  );
}

export default ExpenseList;
