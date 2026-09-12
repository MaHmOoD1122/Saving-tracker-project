import ProgressBar from "./components/ProgressBar";
export default function App() {
  return (
    <main className="w-full max-h-full p-10">
      <ProgressBar done={50} />
    </main>
  );
}
