import { Outlet } from "react-router-dom";
import Sidebar from "../../components/layout/Sidebar";

function Root() {
  return (
    <div className="flex h-screen w-full overflow-hidden bg-[#E8EDF7]">
      <Sidebar />
      <div className="w-[calc(100%-242px)] h-screen overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
}

export default Root;
