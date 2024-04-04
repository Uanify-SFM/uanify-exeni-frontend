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
      <RecordRow
        id="RSV81637"
        name="RSV816379352"
        date="3 de abril 2023"
        size="500 KB"
      />
    </div>
  );
}

export default RecordsTable;
