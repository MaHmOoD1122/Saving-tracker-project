import PlaneIcon from "../assets/plane.svg?react";
import PauseIcon from "../assets/pause.svg?react";
import ArchiveIcon from "../assets/archive.svg?react";
import InfoIcon from "../assets/info.svg?react";
import AddIcon from "../assets/add.svg?react";
import ProgressBar from "./ProgressBar";
import {
  Plane,
  Car,
  GraduationCap,
  House,
  Gift,
  Laptop,
  Camera,
  Ticket,
  Bike,
  Dumbbell,
  Book,
  Shirt,
} from "lucide-react";
import Button from "./Button";

const iconMap = {
  plane: <Plane />,
  car: <Car />,
  "graduation-cap": <GraduationCap />,
  house: <House />,
  laptop: <Laptop />,
  gift: <Gift />,
  camera: <Camera />,
  ticket: <Ticket />,
  bike: <Bike />,
  dumbbell: <Dumbbell />,
  book: <Book />,
  shirt: <Shirt />,
};
export default function GoalCard({ goal }) {
  if (!goal) return null;
  return (
    <div className="bg-vault-bg w-fit p-5 border-0 rounded-3xl">
      <div className="flex justify-between items-center mb-4">
        <div className="flex gap-4">
          <div className=" flex items-center justify-center py-3 px-3 border-0 rounded-full bg-vault-card m-auto">
            {iconMap[goal?.icon] || <PlaneIcon className="w-6" />}
          </div>
          <div>
            <div className="flex items-center gap-2 mb-2">
              <h3 className="font-semibold text-[1.5rem]">{goal.title}</h3>
              <span className="text-vault-subtle bg-vault-border py-2 px-3 border-0 rounded-full text-[1.2rem]">
                Priority
              </span>
            </div>
            <div>
              <p className="text-[1.1rem] text-vault-subtle">
                {goal.description}
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="font-semibold">
            <p className="text-vault-subtle text-[1.2rem]">Target</p>
            <span className="text-vault-dark text-[1.4rem]">
              ${goal.target}
            </span>
          </div>
        </div>
      </div>
      <ProgressBar done={50} />
      <div className="mt-4 flex items-center justify-between text-[1.4rem] font-medium">
        <p className="text-vault-dark">
          ${goal.deposits.reduce((sum, deposit) => sum + deposit.amount, 0)}{" "}
          saved
        </p>
        <p className="text-vault-subtle">120 days</p>
      </div>
      <div className="mt-5 gap-3 flex">
        <Button
          icon={<AddIcon className="fill-white w-11" />}
          text="Add Deposit"
          btnClassName="bg-black w-fit"
          textClassName="text-white font-medium text-[1.2rem] "
        />
        <Button
          icon={<InfoIcon className="w-11" />}
          text="View Details"
          btnClassName="bg-vault-card"
          textClassName="font-medium text-[1.2rem] "
        />
        <Button
          icon={<PauseIcon className="w-11" />}
          text="Pause"
          btnClassName="bg-vault-card"
          textClassName="font-medium text-[1.2rem] "
        />
      </div>
      <div>
        <p className="font-medium text-vault-subtle text-[1.4rem] my-10">
          Next Sceduled deposit:{" "}
          <span className="font-bold text-vault-dark">$300 / monthly</span>
        </p>
      </div>
    </div>
  );
}
