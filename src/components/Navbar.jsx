import shieldIcon from "../assets/shield.svg";
import AddIcon from "../assets/add.svg?react";
import ProgressBar from "./ProgressBar";
import BellIcon from "../assets/bell.svg?react";
import ProfileIcon from "../assets/profile.svg?react";
import { useState } from "react";

export default function Navbar() {
  const [show, setShow] = useState(["Monthly", "Yearly"]);

  const toggleTab = (tab) => {
    if (show.includes(tab)) {
      setShow(show.filter((item) => item !== tab));
    } else {
      setShow([...show, tab]);
    }
  };
  return (
    <nav className="w-full flex justify-between items-center">
      <div className="flex gap-5">
        <div className="flex items-center gap-3 w-fit">
          <img src={shieldIcon} alt="shield icon" className="w-12" />
          <h1 className="font-semibold text-[1.6rem]">GoalVault</h1>
        </div>
        <div className="flex flex-col w-68">
          <p className="text-vault-subtle">Net Saved</p>
          <div className="flex justify-between items-baseline">
            <span className="text-[2rem] font-semibold tracking-[1px]">
              $18,750
            </span>
            <time datetime="2026-08-25" className="text-vault-subtle">
              as of Aug 25, 2026
            </time>
          </div>
        </div>
        {show.includes("Monthly") && (
          <div className="">
            <p className="text-vault-subtle">Monthly Goal Progess</p>
            <ProgressBar done={50} />
            <p>65% of $2,500</p>
          </div>
        )}
        {show.includes("Yearly") && (
          <div className="">
            <p className="text-vault-subtle">Yearly Goal Progess</p>
            <ProgressBar done={50} />
            <p>48% of $30,000</p>
          </div>
        )}
        <div className="flex gap-2 bg-vault-border w-fit h-fit border-0 rounded-4xl p-2 text-[1.2rem]">
          <button
            className={`border-0 rounded-4xl py-2 px-3 transition-all duration-300 cursor-pointer ${
              show.includes("Monthly")
                ? "bg-vault-dark text-white"
                : "bg-vault-bg text-vault-dark hover:bg-vault-subtle hover:text-vault-bg"
            }`}
            onClick={() => toggleTab("Monthly")}
          >
            Monthly
          </button>
          <button
            className={`border-0 rounded-4xl py-2 px-3 transition-all duration-300 cursor-pointer ${
              show.includes("Yearly")
                ? "bg-vault-dark text-white"
                : "bg-vault-bg text-vault-dark hover:bg-vault-subtle hover:text-vault-bg"
            }`}
            onClick={() => toggleTab("Yearly")}
          >
            Yearly
          </button>
        </div>
        <button className="flex flex-row gap-2 justify-center items-center py-2 px-4 w-fit h-fit bg-vault-dark text-vault-bg border-0 rounded-full">
          <AddIcon className="w-10" />
          <span className="text-[1.2rem] font-medium">New Deposit</span>
        </button>
      </div>
      <div className="flex gap-8">
        <BellIcon className="w-10" />
        <div className="flex flex-row items-center gap-4 py-2 px-5 border border-vault-border rounded-full">
          <ProfileIcon className="w-12" />
          <p className="text-[1.4rem] font-medium">A. Patel</p>
        </div>
      </div>
    </nav>
  );
}
