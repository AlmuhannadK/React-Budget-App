import { Button } from "./Button";

export function IncomeForm({
  handleChangeIncomeSource,
  handleChangeIncomeAmount,
  handleChangeIncomeDate,
  handleSubmit,
}) {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="incomeSource">Income Source</label>
        <input
          type="text"
          name="incomeSource"
          id="incomeSource"
          placeholder="source of income"
          onChange={handleChangeIncomeSource}
        />
      </div>
      <div>
        <label htmlFor="incomeAmount">Income Amount</label>
        <input
          type="text"
          name="incomeAmount"
          id="incomeAmount"
          placeholder="amount of income"
          onChange={handleChangeIncomeAmount}
        />
      </div>
      <div>
        <label htmlFor="incomeDate">Income Date</label>
        <input
          type="date"
          name="incomeDate"
          id="incomeDate"
          title="date"
          onChange={handleChangeIncomeDate}
        />
      </div>
      <Button label="PAY" />
    </form>
  );
}
