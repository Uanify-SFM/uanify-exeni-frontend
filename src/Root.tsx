import { Outlet } from "react-router-dom";
import { BiBell, BiQuestionMark, BiSearch } from "react-icons/bi";
import Sidebar from "./components/layout/Sidebar";
import User from "../src/assets/user.png";

function Root() {
  return (
    <div className="flex h-screen w-full overflow-hidden bg-[#E8EDF7]">
      <Sidebar />
      <div className="w-[calc(100%-242px)] h-screen overflow-y-auto px-3">
        <div className="flex items-center justify-between h-20">
          <div className="relative">
            <input
              className="w-[816px] h-12 border rounded-full px-10"
              placeholder="Buscar paciente"
            />
            <BiSearch className="text-gray-500 absolute left-4 top-4" />
          </div>
          <div className="flex gap-x-4 items-center">
            <button className="p-4 hover:bg-slate-300 rounded-full transition-all">
              <BiBell className="text-xl" />
            </button>
            <BiQuestionMark className="text-xl" />
            <img className="w-10 h-10" src={User} alt="" />
          </div>
        </div>
        <div className="h-[calc(100%-116px)] rounded-2xl overflow-hidden flex flex-col">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Root;
