import { useContext } from "react";
import { MdArrowBackIos } from "react-icons/md";
import { GlobalContext } from "../global/ContextProvider";

const ToggleButton = () => {
  const { onToggle, toggle } = useContext(GlobalContext);
  return (
    <div className="flex justify-end">
      <div
        className={`w-6 h-6 pl-2 transition-all duration-1000 bg-neutral-900 text-white rounded-md cursor-pointer flex justify-center items-center ${
          !toggle ? "rotate-180" : "rotate-0"
        }`}
        onClick={onToggle}
      >
        <MdArrowBackIos />
      </div>
    </div>
  );
};

export default ToggleButton;
