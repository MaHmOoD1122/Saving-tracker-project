import ScheduledDeposits from "./ScheduledDeposits";
import SavingTrends from "./SavingTrends";
import GoalFilters from "./GoalFilters";
export default function DashboardSidebar() {
  return (
    <section className="flex flex-col flex-1 gap-10">
      <ScheduledDeposits />
      <SavingTrends />
      <GoalFilters />
    </section>
  );
}
