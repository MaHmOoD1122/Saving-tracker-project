import ProgressBar from "./components/ProgressBar";
import Navbar from "./components/Navbar";
import GoalsContainer from "./components/GoalsContainer";
export default function App() {
  return (
    <>
      <header className="w-full p-10">
        <Navbar />
      </header>
      <main className="w-full max-h-full p-10">
        <GoalsContainer />
      </main>
    </>
  );
}
