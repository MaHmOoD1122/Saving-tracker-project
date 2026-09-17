"use client";
import {
  LineChart,
  Line,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";
import data from "/Saving tracker project/my-react-app/goalvault-data.json";
export default function SavingTrends() {
  let allDates = [];
  data?.goals?.forEach((goal) => {
    goal?.deposits?.forEach((deposit) => {
      allDates.push(new Date(deposit.date));
    });
  });
  if (allDates.length === 0) allDates.push(new Date());

  allDates.sort((a, b) => b - a);
  const latestDate = allDates[0];
  const currentYear = latestDate.getFullYear();
  const currentMonth = latestDate.getMonth();
  const previousMonth = currentMonth === 0 ? 11 : currentMonth - 1;
  let currentMonthDeposits = [];
  let previousMonthDeposits = [];

  //   const lastTwoMonth =
  //     currentMonth === 0 ? 10 : currentMonth === 1 ? 11 : currentMonth - 2;
  data?.goals?.forEach((goal) => {
    goal?.deposits?.forEach((deposit) => {
      const depositDate = new Date(deposit.date);
      const depositYear = depositDate.getFullYear();
      const depositMonth = depositDate.getMonth();
      if (depositYear === currentYear && depositMonth === currentMonth) {
        currentMonthDeposits.push(deposit);
      }
      if (depositYear === currentYear && depositMonth === previousMonth) {
        previousMonthDeposits.push(deposit);
      }
    });
  });
  const formattedChartData = [];
  let currentSum = 0;
  let previousSum = 0;
  for (let dayNum = 1; dayNum <= 31; dayNum++) {
    let currentDayTotal = 0;
    let previousDayTotal = 0;
    currentMonthDeposits.forEach((deposit) => {
      if (new Date(deposit.date).getDate() === dayNum) {
        currentDayTotal += deposit.amount;
      }
    });
    previousMonthDeposits.forEach((deposit) => {
      if (new Date(deposit.date).getDate() === dayNum) {
        previousDayTotal += deposit.amount;
      }
    });
    currentSum += currentDayTotal;
    previousSum += previousDayTotal;

    formattedChartData.push({
      day: dayNum,
      current: currentSum,
      previous: previousSum,
    });
  }
  return (
    <div className="w-30rem bg-vault-bg h-fit p-10 border-0 rounded-4xl">
      <div className="flex justify-between items-center">
        <div className="font-medium flex flex-col gap-3">
          <p className="text-[1.6rem]">Saving Trends</p>
          <p className="text-[1.3rem] text-vault-subtle">
            Short term trend (30 days)
          </p>
        </div>
        <div>
          <p className="text-[1.3rem] font-medium">+4.2%</p>
        </div>
      </div>
      <div className="w-full h-60 flex-1">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={formattedChartData}>
            <YAxis />
            <XAxis dataKey="day" />
            <Tooltip />
            <Legend dataKey="current month" />
            <Line
              dataKey={"current"}
              type="monotone"
              stroke="black"
              fill="black"
              strokeWidth={2}
              dot={false}
            />
            <Line
              dataKey={"previous"}
              type="monotone"
              stroke="blue"
              fill="black"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="flex gap-2 mt-4">
        <p className="text-[1.3rem] text-vault-subtle">Recent deposit:</p>
        <span className="text-[1.3rem] font-medium">
          {allDates
            .slice(0, 3)
            .map((date) => {
              return date.toLocaleString("en-us", {
                month: "short",
                day: "2-digit",
              });
            })
            .join(" · ")}
        </span>
      </div>
    </div>
  );
}
