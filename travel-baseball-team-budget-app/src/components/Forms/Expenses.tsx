import { useState } from "react";
import { useBudget } from "../../context/BudgetContext";

export default function AddTransactionForm() {
  const { dispatch } = useBudget();

  const [type, setType] = useState<"income" | "expense">("expense");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Food");
  const [note, setNote] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    dispatch({
      type: "ADD_TRANSACTION",
      payload: {
        id: crypto.randomUUID(),
        type,
        amount: Number(amount),
        category,
        note,
        date: new Date().toISOString(),
      },
    });

    // Reset
    setAmount("");
    setNote("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add Transaction</h3>

      <label>
        Type:
        <select value={type} onChange={(e) => setType(e.target.value as "income" | "expense")}>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
      </label>

      <label>
        Amount:
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
      </label>

      <label>
        Category:
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option>Food</option>
          <option>Rent</option>
          <option>Transport</option>
          <option>Entertainment</option>
          <option>Other</option>
        </select>
      </label>

      <label>
        Note:
        <input
          type="text"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Optional"
        />
      </label>

      <button type="submit">Add</button>
    </form>
  );
}
