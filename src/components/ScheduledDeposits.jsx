import data from "/Saving tracker project/my-react-app/goalvault-data.json";
import { Plane, Calendar, Landmark } from "lucide-react";
const iconMap = {
  plane: <Plane />,
  calendar: <Calendar />,
  landmark: <Landmark />,
};
export default function ScheduledDeposits() {
  return (
    <div className="w-30rem bg-vault-bg h-fit p-10 border-0 rounded-4xl">
      <div className="flex justify-between w-full items-center">
        <div className="flex flex-col gap-2">
          <h3 className="text-[1.6rem] font-medium">Scheduled Deposits</h3>
          <p className="text-[1.3rem] font-medium text-vault-subtle">
            Upcoming automated deposits
          </p>
        </div>
        <div>
          <span className="text-[1.4rem] font-medium">3</span>
        </div>
      </div>
      <ul>
        {data.scheduledDeposits.map((deposit) => {
          const matchedGoal = data.goals.find(
            (goal) => deposit.goalId === goal.id,
          );
          return (
            <li key={deposit.id}>
              <div>
                {iconMap[deposit?.icon]}
                <p className="capitalize">
                  {deposit.frequency} -{" "}
                  {matchedGoal ? matchedGoal.title : "Unknown Goal"}
                </p>
              </div>
              <div>
                <span>${deposit.amount}</span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
