import generalRowsData from "../../mocks/GeneralPatientRowData";
import GeneralRow from "./GeneralRow";

function GeneralTable() {
  return (
    <div>
      <div className="border-b grid grid-cols-5 pl-8 pb-3 gap-x-3">
        <p className="text-sm font-medium text-slate-600 col-span-2">Nombre</p>
        <p className="text-sm font-medium text-slate-600">Identificador</p>
        <p className="text-sm font-medium text-slate-600">
          Última fecha de modificación
        </p>
        <p className="text-sm font-medium text-slate-600">
          Cantidad de estudios
        </p>
      </div>
      {
        generalRowsData.map((row) => 
          <GeneralRow
          id={row.id}
          name={row.name}
          date={row.date}
          records={row.records}
        />
      )}
    </div>
  );
}

export default GeneralTable;
