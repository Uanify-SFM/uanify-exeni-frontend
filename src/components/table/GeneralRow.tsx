import { Link } from "react-router-dom";
import Folder from "../../assets/folder.svg";

type GeneralRowProps = {
  id: string;
  name: string;
  date: string;
  records: number;
};

function GeneralRow({ id, name, date, records }: GeneralRowProps) {
  return (
    <Link
      to={"/patient-record"}
      className="grid grid-cols-5 pl-8 pb-3 py-3 border-b gap-3 hover:bg-slate-100 cursor-pointer"
    >
      <div className="flex items-center gap-x-3 col-span-2">
        <img src={Folder} />
        <p>{name}</p>
      </div>
      <p>{id}</p>
      <p>{date}</p>
      <p>{records} estudios</p>
    </Link>
  );
}

export default GeneralRow;
