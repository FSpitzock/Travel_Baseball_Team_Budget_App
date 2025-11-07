import { createContext, useContext, useReducer, useEffect, type ReactNode } from "react";

/* ===============================
   ✅ Types
================================ */
export type Transaction = {
  id: string;
  type: "income" | "expense";
  amount: number;
  category: string;
  note?: string;
  date: string;
};

type State = {
  transactions: Transaction[];
};

type Action =
  | { type: "ADD_TRANSACTION"; payload: Transaction }
  | { type: "DELETE_TRANSACTION"; payload: string };

type BudgetContextType = {
  state: State;
  dispatch: React.Dispatch<Action>;
};

/* ===============================
   ✅ Initial State
================================ */
const initialState: State = {
  transactions: [],
};

/* ===============================
   ✅ Reducer function
================================ */
function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "ADD_TRANSACTION":
      return {
        ...state,
        transactions: [...state.transactions, action.payload],
      };

    case "DELETE_TRANSACTION":
      return {
        ...state,
        transactions: state.transactions.filter(
          (t) => t.id !== action.payload
        ),
      };

    default:
      return state;
  }
}

/* ===============================
   ✅ Create Context
================================ */
const BudgetContext = createContext<BudgetContextType | null>(null);

/* ===============================
   ✅ Provider Component
================================ */
export function BudgetProvider({ children }: { children: ReactNode }) {
  // Load from localStorage on first render
  const stored = localStorage.getItem("budgetData");
  const parsed = stored ? (JSON.parse(stored) as State) : initialState;

  const [state, dispatch] = useReducer(reducer, parsed);

  // Save to localStorage whenever state changes
  useEffect(() => {
    localStorage.setItem("budgetData", JSON.stringify(state));
  }, [state]);

  return (
    <BudgetContext.Provider value={{ state, dispatch }}>
      {children}
    </BudgetContext.Provider>
  );
}

/* ===============================
   ✅ Custom Hook (easy access)
================================ */
// eslint-disable-next-line react-refresh/only-export-components
export function useBudget() {
  const context = useContext(BudgetContext);
  if (!context) {
    throw new Error("useBudget must be used inside a BudgetProvider");
  }
  return context;
}
