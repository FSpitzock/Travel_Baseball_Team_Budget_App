import { useState } from "react";
import { useBudget } from "../../context/BudgetContext";

export default function AddTransactionForm() {
  const { dispatch } = useBudget();

  const [type, setType] = useState<"income" | "expense">("expense");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Donations");
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
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded-lg p-6 max-w-md mx-auto flex flex-col gap-4"
    >
      <h3 className="text-xl font-bold text-black mb-4">Add Expense</h3>

      {/* Type */}
      <div className="flex flex-col">
        <label className="mb-1 font-medium text-black">Type</label>
        <select
          value={type}
          onChange={(e) => setType(e.target.value as "income" | "expense")}
          className="border border-gray-300 rounded-md p-2 text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="income">Funds In</option>
          <option value="expense">Expense</option>
        </select>
      </div>

      {/* Amount */}
      <div className="flex flex-col">
        <label className="mb-1 font-medium text-black">Amount</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
          placeholder="Enter amount"
          className="border border-gray-300 rounded-md p-2 text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* Category */}
      <div className="flex flex-col">
        <label className="mb-1 font-medium text-black">Category</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border border-gray-300 rounded-md p-2 text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option>Tournament Cost</option>
          <option>Baseball Equipment</option>
          <option>Game Balls</option>
          <option>Misc Team Expense</option>
          <option>Guest player uniforms</option>
          <option>Other</option>
        </select>
      </div>

      {/* Note */}
      <div className="flex flex-col">
        <label className="mb-1 font-medium text-black">Note</label>
        <input
          type="text"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Optional"
          className="border border-gray-300 rounded-md p-2 text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
      >
        Add
      </button>
    </form>
  );
}
