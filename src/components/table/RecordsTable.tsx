import recordRowsData from "../../mocks/RecordRowData";
import RecordRow from "./RecordRow";

function RecordsTable() {
  return (
    <div>
      <div className="border-b grid grid-cols-5 pl-8 pb-3 gap-x-3">
        <p className="text-sm font-medium text-slate-600 col-span-2">Nombre</p>
        <p className="text-sm font-medium text-slate-600">Sucursal</p>
        <p className="text-sm font-medium text-slate-600">Fecha de creación</p>
        <p className="text-sm font-medium text-slate-600">Tamaño</p>
      </div>
      {
        recordRowsData.map((row) => 
          <RecordRow
          id={row.id}
          name={row.name}
          date={row.date}
          size={row.size}
        />
      )}
    </div>
  );
}

export default RecordsTable;
