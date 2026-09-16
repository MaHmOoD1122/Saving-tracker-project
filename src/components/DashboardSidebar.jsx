import ScheduledDeposits from "./ScheduledDeposits";
import GoalFilters from "./GoalFilters";
export default function DashboardSidebar() {
  return (
    <section className="flex flex-col flex-1 gap-10">
      <ScheduledDeposits />
      <GoalFilters />
    </section>
  );
}
