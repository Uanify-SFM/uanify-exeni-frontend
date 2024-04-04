import { Link } from "react-router-dom";
import Folder from "../../assets/folder.svg";

type RecordRowProps = {
  id: string;
  name: string;
  date: string;
  size: string;
};

function RecordRow({ id, name, date, size }: RecordRowProps) {
  return (
    <button
      type="button"
      className="grid grid-cols-5 pl-8 pb-3 py-3 w-full border-b gap-3 hover:bg-slate-100 cursor-pointer"
    >
      <div className="flex items-center gap-x-3 col-span-2">
        <img src={Folder} />
        <Link
          to={"/patient-record-detail"}
          className="cursor-pointer hover:underline"
        >
          {name}
        </Link>
      </div>
      <p className="text-left">{id}</p>
      <p className="text-left">{date}</p>
      <p className="text-left">{size}</p>
    </button>
  );
}

export default RecordRow;
