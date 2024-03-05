import { Button } from "./Button";

export function IncomeForm() {
  // manage state here

  return (
    <form>
      <div>
        <label htmlFor="incomeSource">Income Source</label>
        <input
          type="text"
          name="incomeSource"
          id="incomeSource"
          placeholder="source of income"
        />
      </div>
      <div>
        <label htmlFor="incomeAmount">Income Amount</label>
        <input
          type="text"
          name="incomeAmount"
          id="incomeAmount"
          placeholder="amount of income"
        />
      </div>
      <div>
        <label htmlFor="incomeDate">Income Date</label>
        <input type="date" name="incomeDate" id="incomeDate" title="date" />
      </div>
      <Button label="PAY" />
    </form>
  );
}
