import GeneralTable from "../../components/table/GeneralTable";
import PathContainer from "../../components/path-container";

function Home() {
  return (
    <div className="bg-white h-full overflow-y-scroll border">
      <PathContainer />
      <GeneralTable />
    </div>
  );
}

export default Home;
