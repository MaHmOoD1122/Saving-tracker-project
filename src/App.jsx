import ProgressBar from "./components/ProgressBar";
import Navbar from "./components/Navbar";
import GoalsContainer from "./components/GoalsContainer";
import DashboardSidebar from "./components/DashboardSidebar";
import NewDepositPopup from "./components/NewDepositPopup";
import data from "../goalvault-data.json";
import { useState } from "react";
export default function App() {
  const [showDepositPopup, setShowDepositPopup] = useState(false);
  return (
    <>
      <header className="w-full p-10">
        <Navbar showDepositPopup={() => setShowDepositPopup(true)} />
      </header>
      <main className="flex gap-14 w-full max-h-full p-10">
        <GoalsContainer className="flex-1" />
        <DashboardSidebar />
      </main>
      {showDepositPopup && (
        <NewDepositPopup
          closePopup={() => setShowDepositPopup(false)}
          data={data}
        />
      )}
    </>
  );
}
