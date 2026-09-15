import ProgressBar from "./components/ProgressBar";
import Navbar from "./components/Navbar";
import GoalsContainer from "./components/GoalsContainer";
import DashboardSidebar from "./components/DashboardSidebar";
export default function App() {
  return (
    <>
      <header className="w-full p-10">
        <Navbar />
      </header>
      <main className="flex gap-14 w-full max-h-full p-10">
        <GoalsContainer className="flex-1" />
        <DashboardSidebar />
      </main>
    </>
  );
}
