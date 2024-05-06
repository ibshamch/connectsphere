import useThemeContext from "../hooks/use-theme-context";
import ReactDOM from "react-dom";
import { MdOutlineClose } from "react-icons/md";

const Modal = ({ children, actionBar, onSet }) => {
  const { darkTheme } = useThemeContext();

  return ReactDOM.createPortal(
    <div>
      <div
        className={`fixed inset-0  opacity-70  ${
          darkTheme ? "bg-darkthemebg" : "bg-lightthemebg"
        }`}
      ></div>
      <div
        className={`flex flex-col bg-gray-100 rounded-2xl fixed inset-y-40 inset-x-20 lg:inset-x-96 lg:inset-y-44   py-8 px-8`}
      >
        <MdOutlineClose
          className="text-8xl cursor-pointer self-end"
          onClick={() => onSet(false)}
        />

        <div className="flex flex-col basis-44 h-full justify-between">
          {children}
        </div>
        <div className="basis-44 flex justify-end">{actionBar}</div>
      </div>
    </div>,
    document.querySelector(".modal")
  );
};

export default Modal;
