import { BiHomeAlt2 } from "react-icons/bi";
import GeneralTable from "../../components/table/GeneralTable";

function Home() {
  return (
    <div className="bg-white h-full overflow-y-scroll border">
      <div className="h-14 flex items-center px-6">
        <button className="flex gap-x-2 items-center hover:text-blue-500">
          <BiHomeAlt2 className="text-lg" />
          <p>Inicio</p>
        </button>
      </div>
      <GeneralTable />
    </div>
  );
}

export default Home;
