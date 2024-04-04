import { BiHomeAlt2 } from "react-icons/bi";
import Logo from "../../assets/logo.png";
import SidebarButton from "../buttons/SidebarButton";

function Sidebar() {
  return (
    <div className="h-screen w-[242px] overflow-hidden px-4 py-6 flex flex-col">
      <img className="w-[120px]" src={Logo} alt="salud-digna logo" />
      <div className="my-5 flex">
        <SidebarButton icon={BiHomeAlt2} name="Inicio" path="/" />
      </div>

      <div className="flex flex-col">
        <h5 className="font-medium text-slate-600 text-xs mb-2">
          Ultrasonidos
        </h5>
        <SidebarButton name="Mamario" path="/mammary" />
        <SidebarButton name="Obstétrico" path="/obstetric" />
        <SidebarButton name="Transvaginal" path="/transvaginal" />
        <SidebarButton name="Músculo Tendinoso" path="/tendinous-muscle" />
      </div>
    </div>
  );
}

export default Sidebar;
