import { Progress } from "antd";

const Analytics = ({ allTransection }) => {

    // Totatl Transaction
  const totalTransection = allTransection.length;
  const totalIncome = allTransection.filter(
    (section) => section.type === "income"
  );
  const totalExpense = allTransection.filter(
    (section) => section.type === "expense"
  );
  const totalIncomePercent = (totalIncome.length / totalTransection) * 100;
  const totalExpensePercent = (totalExpense.length / totalTransection) * 100;

//   Total TurnOver

const totalTurnOver = allTransection.reduce((acc, transection) =>  acc + transection.amount, 0)
const totalIncomeTurnOver = totalIncome.reduce((acc, transection) =>  acc + transection.amount, 0)
const totalExpenseTurnOver = totalExpense.reduce((acc, transection) =>  acc + transection.amount, 0)

const totalIncomeTurnOverPercent = (totalIncomeTurnOver / totalTurnOver) * 100
const totalExpenseTurnOverPercent = (totalExpenseTurnOver / totalTurnOver) * 100

  return (
    <>
      <div className="row m-3">
        <div className="col-md-4">
          <div className="card">
            <div className="card-header">
              Total Transaction : {totalTransection}
            </div>
            <div className="card-body">
              <h5>Income: {totalIncome.length}</h5>
              <h5>Expense: {totalExpense.length}</h5>
            </div>
            <div>
              <Progress
                type="circle"
                strokeColor="green"
                className="mx-2"
                percent={totalIncomePercent.toFixed(0)}
              />
              <Progress
                type="circle"
                strokeColor="red"
                className="mx-2"
                percent={totalExpensePercent.toFixed(0)}
              />
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-header">
              Total Turn Over : {totalTurnOver}
            </div>
            <div className="card-body">
              <h5>Income: {totalIncomeTurnOver}</h5>
              <h5>Expense: {totalExpenseTurnOver}</h5>
            </div>
            <div>
              <Progress
                type="circle"
                strokeColor="green"
                className="mx-2"
                percent={totalIncomeTurnOverPercent.toFixed(0)}
              />
              <Progress
                type="circle"
                strokeColor="red"
                className="mx-2"
                percent={totalExpenseTurnOverPercent.toFixed(0)}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Analytics;
