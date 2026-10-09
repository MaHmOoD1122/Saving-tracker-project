import AddIcon from "../assets/add.svg?react";
import CloseIcon from "../assets/close.svg?react";
import InfoIcon from "../assets/info.svg?react";
import ArrowIcon from "../assets/arrow-right.svg?react";

import Button from "./Button";
export default function NewDepositPopup({ closePopup, data }) {
  const getCurrentValue = data.goals[0].deposits.reduce(
    (sum, curr) => sum + curr.amount,
    0,
  );
  console.log(getCurrentValue);
  return (
    <div className="fixed inset-0 z-10 flex backdrop-blur-xs backdrop-brightness-55 w-full h-full justify-center items-center">
      <div className="w-200 bg-white border-0 rounded-2xl p-10">
        <div className="flex items-center justify-between border-b border-vault-border pb-4 mb-5">
          <div className="flex gap-3">
            <span className="flex items-center justify-center p-4 bg-black rounded-full">
              <AddIcon className="w-10 text-white" />
            </span>
            <div>
              <p className="font-bold text-[2rem]">New Deposit</p>
              <p className="text-vault-subtle">
                Allocate funds to one of your active goals.
              </p>
            </div>
          </div>
          <div>
            <Button
              icon={<CloseIcon className="w-10 text-vault-subtle " />}
              btnClassName="hover:bg-vault-border py-5"
              onClick={closePopup}
            />
          </div>
        </div>
        <div className="mb-4">
          <p className="uppercase text-[1.5rem] font-medium text-vault-hover tracking-wider">
            Target goal
          </p>
          <select
            name="targetGoal"
            id="targetGoal"
            className="text-[1.4rem] font-medium text-vault-hover w-full bg-vault-bg border-2 border-vault-border rounded-2xl p-5 outline-0"
          >
            <option value="MaltaSummer">
              Malta Summer Trip ($1,760 / $3.200)
            </option>
          </select>
        </div>
        <div className="relative mb-5">
          <p className="uppercase text-[1.5rem] font-medium text-vault-hover tracking-wider mb-3">
            Deposit Amount
          </p>
          <span className="absolute z-20 top-[50%] left-[4%] text-[2rem] text-vault-subtle font-extrabold">
            $
          </span>
          <input
            type="number"
            className=" w-full px-16 py-5 text-[2rem] font-bold bg-vault-bg border-2 border-vault-border rounded-xl outline-0"
          />
        </div>
        <div className="flex gap-5 mb-5">
          <Button
            text={`+ $50`}
            btnClassName="bg-vault-bg"
            textClassName="text-[1.5rem] font-semibold"
          />
          <Button
            text={`+ $100`}
            btnClassName="bg-vault-bg"
            textClassName="text-[1.5rem] font-semibold"
          />
          <Button
            text={`+ $250`}
            btnClassName="bg-vault-bg"
            textClassName="text-[1.5rem] font-semibold"
          />
          <Button
            text={`+ $500`}
            btnClassName="bg-vault-bg"
            textClassName="text-[1.5rem] font-semibold"
          />
        </div>
        <div className="flex gap-4 items-center">
          <div>
            <p className="uppercase text-[1.5rem] font-medium text-vault-hover tracking-wider">
              Payment source
            </p>
            <select
              name="targetGoal"
              id="targetGoal"
              className="text-[1.2rem] font-medium text-vault-hover w-full bg-vault-bg border-2 border-vault-border rounded-2xl p-2 outline-0"
            >
              <option value="MaltaSummer">Primary Checking (...4829)</option>
            </select>
          </div>
          <div>
            <p className="uppercase text-[1.5rem] font-medium text-vault-hover tracking-wider">
              Deposit date
            </p>
            <input
              type="date"
              className="text-[1.2rem] font-medium text-vault-hover w-full bg-vault-bg border-2 border-vault-border rounded-2xl p-2 outline-0"
            />
          </div>
        </div>
        <div className="bg-vault-bg mt-5 p-5 border border-vault-border rounded-2xl flex items-start gap-2 ">
          <InfoIcon className="w-12 fill-vault-subtle" />
          <p className="text-vault-subtle text-[1.1rem]">
            Deposits process immediately and are securely locked into your
            target goal vault. You can withdraw or adjust cadence at any time.
          </p>
        </div>
        <div className="flex justify-end my-5 pt-5 border-t border-t-vault-border">
          <Button
            text="Cancel"
            textClassName="text-[1.2rem] font-medium py-1"
          />
          <Button
            text="Confirm Deposit"
            icon={<ArrowIcon className="w-7 fill-white" />}
            textClassName="text-[1.2rem] font-medium text-white"
            btnClassName="bg-vault-dark flex-row-reverse gap-4 px-10 py-1"
          />
        </div>
      </div>
    </div>
  );
}
