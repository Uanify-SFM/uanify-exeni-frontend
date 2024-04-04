import { BiChevronRight, BiHomeAlt2 } from "react-icons/bi";
import { Link } from "react-router-dom";

type PathContainerProps = {
  idPatient?: string;
  patientName?: string;
  idRecord?: string;
  recordName?: string;
};

function PathContainer({
  idPatient,
  patientName,
  idRecord,
  recordName,
}: PathContainerProps) {
  return (
    <div className="h-14 flex items-center px-6 gap-x-4">
      <Link to={"/"} className="flex gap-x-2 items-center hover:text-blue-500">
        <BiHomeAlt2 className="text-lg" />
        <p className="text-sm">Inicio</p>
      </Link>
      {idPatient && patientName && (
        <div className="flex gap-x-4 items-center">
          <BiChevronRight className="text-xl" />
          <Link
            to={"/patient-record"}
            className="items-center hover:text-blue-500"
          >
            <p className="text-sm">{patientName}</p>
          </Link>
        </div>
      )}
      {idRecord && recordName && (
        <div className="flex gap-x-4 items-center">
          <BiChevronRight className="text-xl" />
          <p className="text-sm">{recordName}</p>
        </div>
      )}
    </div>
  );
}

export default PathContainer;
