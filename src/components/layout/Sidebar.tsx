import Logo from "../../assets/logo.png";
import SidebarButton from "../buttons/SidebarButton";

function Sidebar() {
  return (
    <div className="h-screen w-[242px] overflow-hidden px-4 py-6">
      <img src={Logo} alt="salud-digna logo" className="mb-4" />
      <SidebarButton name="Inicio" path="/" />
      <h5 className="font-medium text-slate-600 text-xs mt-4 mb-2">
        Ultrasonidos
      </h5>
      <div className="flex flex-col">
        <SidebarButton name="Mamario" path="/mammary" />
        <SidebarButton name="Obstétrico" path="/obstetric" />
        <SidebarButton name="Transvaginal" path="/transvaginal" />
        <SidebarButton name="Músculo Tendinoso" path="/tendinous-muscle" />
      </div>
    </div>
  );
}

export default Sidebar;
