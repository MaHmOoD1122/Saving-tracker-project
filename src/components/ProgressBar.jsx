export default function ProgressBar({ done }) {
  return (
    <div className="h-4 w-50 bg-vault-border border-0 rounded-full">
      <div
        style={{ width: `${done}%` }}
        className={`h-full bg-vault-dark border-0 rounded-full`}
      ></div>
    </div>
  );
}
