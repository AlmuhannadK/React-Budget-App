import { Expense } from "./ExpenseWrapper";
import { Income } from "./IncomeWrapper";

type ListItemProps = {
  items: Income[] | Expense[];
};

export function ListItems({ items }: ListItemProps) {
  return (
    <ul>
      {items.map((item) => {
        return (
          <li key={item.id}>
            <p>{item.source}</p>
            <p>{item.amount}</p>
            <p>{item.date}</p>
          </li>
        );
      })}
    </ul>
  );
}
