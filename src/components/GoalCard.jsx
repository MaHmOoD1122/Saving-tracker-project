import PlaneIcon from "../assets/plane.svg?react";
import PauseIcon from "../assets/pause.svg?react";
import ArchiveIcon from "../assets/archive.svg?react";
import InfoIcon from "../assets/info.svg?react";
import HouseIcon from "../assets/house.svg?react";
import GraduationIcon from "../assets/graduation.svg?react";
import CarIcon from "../assets/car.svg?react";
import AddIcon from "../assets/add.svg?react";
import ProgressBar from "./ProgressBar";
export default function GoalCard() {
  return (
    <div className="bg-vault-bg w-140 p-5 border-0 rounded-3xl">
      <div className="flex justify-between items-center mb-4">
        <div className="flex gap-4">
          <div className=" flex items-center justify-center py-3 px-3 border-0 rounded-full bg-vault-card m-auto">
            <PlaneIcon className="w-11" />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-2">
              <h3 className="font-semibold text-[1.5rem]">Malta Summer Trip</h3>
              <span className="text-vault-subtle bg-vault-border py-2 px-3 border-0 rounded-full text-[1.2rem]">
                Priority
              </span>
            </div>
            <div>
              <p className="text-[1.1rem] text-vault-subtle">
                Saving for flights and accommodation
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="font-semibold">
            <p className="text-vault-subtle text-[1.2rem]">Target</p>
            <span className="text-vault-dark text-[1.4rem]">$3,200</span>
          </div>
        </div>
      </div>
      <ProgressBar done={50} />
      <div className="mt-4 flex items-center justify-between text-[1.4rem] font-medium">
        <p className="text-vault-dark">$1,760 saved</p>
        <p className="text-vault-subtle">120 days</p>
      </div>
      <div>
        <button>
          <AddIcon />
          Add Deposit
        </button>
      </div>
    </div>
  );
}
