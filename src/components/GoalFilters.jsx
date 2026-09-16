import data from "/Saving tracker project/my-react-app/goalvault-data.json";
export default function GoalFilters() {
  const filteredItems = [
    { id: "all", title: "All Goals", status: "all" },
    { id: "active", title: "Active", status: "active" },
    { id: "paused", label: "Paused", status: "paused" },
    { id: "achieved", label: "Achieved", status: "achieved" },
  ];
  const getCount = (status) => {
    if (status === "All Goals") return goals.length;
    else {
      return goals.filter((goal) => goal.status === status).length;
    }
  };
  return (
    <div className="w-30rem bg-vault-bg h-fit p-10 border-0 rounded-4xl">
      <div className="flex justify-between">
        <p className="text-[1.6rem] font-medium text-vault-dark">Filters</p>
        <p className="text-[1.3rem] font-medium text-vault-subtle">Account</p>
      </div>
      <ul>
        {data.goals.map((goal) => {
          return (
            <li key={goal.id}>
              <div className="bg-vault-card">
                {/* <p>{getCount(goal)}</p> */}
                <p>{goal.length}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
