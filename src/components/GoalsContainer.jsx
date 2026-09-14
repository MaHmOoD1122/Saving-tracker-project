import FilterIcon from "../assets/filter.svg?react";
import GoalCard from "./GoalCard";
import {
  goals,
  user,
} from "/Saving tracker project/my-react-app/goalvault-data.json";
export default function GoalsContainer() {
  return (
    <section>
      <div className="flex justify-between">
        <div>
          <h2 className="font-medium text-[1.8rem]">Active Goals</h2>
          <p className="text-vault-subtle text-[1.4rem]">
            Track progress, add deposits, or quick manage your goals
          </p>
        </div>
        <div className="flex gap-6 h-16 w-120 max-w-120">
          <input
            type="search"
            placeholder="Search goals"
            className="text-[1.3rem] w-full h-full bg-vault-border border-0 rounded-4xl px-4 "
          />
          <button className="flex items-center justify-center w-fit py-4 px-6 bg-vault-dark border-0 rounded-4xl cursor-pointer">
            <FilterIcon className="w-7 fill-vault-bg" />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-8">
        {goals.map((goal) => {
          return <GoalCard key={goal.id} goal={goal} />;
        })}
      </div>
    </section>
  );
}
