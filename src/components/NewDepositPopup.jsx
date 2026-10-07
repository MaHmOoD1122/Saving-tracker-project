import AddIcon from "../assets/add.svg?react";
import CloseIcon from "../assets/close.svg?react";
import Button from "./Button";
export default function NewDepositPopup({ closePopup }) {
  return (
    <div className="fixed inset-0 z-10 flex backdrop-blur-xs backdrop-brightness-55 w-full h-full justify-center items-center">
      <div className="w-200 h-200 bg-white border-0 rounded-2xl p-12 ">
        <div className="flex items-center justify-between">
          <div className="flex gap-3">
            <span className="flex items-center justify-center  p-5 bg-black rounded-full">
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
      </div>
    </div>
  );
}
