import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { createContext, useContext, useState } from "react";

import { Welcome } from "../pages/Welcome";
import App from "../pages/App";

export const BudgetContext = createContext<any>([]);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Welcome />,
  },
  {
    path: "/budget-app",
    element: <App />,
  },
]);
// App entry point
export function Router() {
  const [state, setState] = useState({
    incomes: [],
    expenses: [],
  });
  console.log("global state:", state);

  return (
    <BudgetContext.Provider value={{ state, setState }}>
      <RouterProvider router={router} />;
    </BudgetContext.Provider>
  );
}
