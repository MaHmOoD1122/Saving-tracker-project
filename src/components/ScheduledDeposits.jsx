import data from "/Saving tracker project/my-react-app/goalvault-data.json";
import { Plane, Calendar, Landmark } from "lucide-react";
const iconMap = {
  plane: <Plane className="w-8" />,
  calendar: <Calendar className="w-8" />,
  landmark: <Landmark className="w-8" />,
};
export default function ScheduledDeposits() {
  return (
    <div className="w-30rem bg-vault-bg h-fit p-10 border-0 rounded-4xl">
      <div className="flex justify-between w-full items-center mb-5">
        <div className="flex flex-col gap-2">
          <h3 className="text-[1.6rem] font-medium">Scheduled Deposits</h3>
          <p className="text-[1.3rem] font-medium text-vault-subtle">
            Upcoming automated deposits
          </p>
        </div>
        <div>
          <span className="text-[1.4rem] font-medium">
            {data.scheduledDeposits.length}
          </span>
        </div>
      </div>
      <ul className="flex flex-col gap-4">
        {data.scheduledDeposits.map((deposit) => {
          const matchedGoal = data.goals.find(
            (goal) => deposit.goalId === goal.id,
          );
          const dayOfMonth = new Date(deposit.nextDate).toLocaleDateString(
            "en-us",
            {
              month: "short",
              day: "2-digit",
            },
          );
          return (
            <li
              key={deposit.id}
              className="bg-vault-card flex justify-between items-center p-6 rounded-4xl"
            >
              <div className="flex gap-5">
                <div className="bg-vault-border py-3 px-4 border-0 rounded-full">
                  {iconMap[deposit?.icon]}
                </div>
                <div>
                  <p className="capitalize text-[1.3rem] font-medium">
                    {deposit.frequency} -{" "}
                    {matchedGoal ? matchedGoal.title : "Unknown Goal"}
                  </p>
                  <p className="text-[1.2rem] text-vault-subtle">
                    ${deposit.amount} · Next: {dayOfMonth}
                  </p>
                </div>
              </div>
              <div>
                <span className="text-[1.3rem] font-medium">
                  ${deposit.amount}
                </span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
