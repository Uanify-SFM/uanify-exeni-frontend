import detailRowsData from "../../mocks/DetailRowData";
import DetailRow from "./DetailRow";

function DetailTable() {
  return (
    <div>
      <div className="border-b grid grid-cols-5 pl-8 pb-3 gap-x-3">
        <p className="text-sm font-medium text-slate-600 col-span-2">Nombre</p>
        <p className="text-sm font-medium text-slate-600">Sucursal</p>
        <p className="text-sm font-medium text-slate-600">Fecha de creación</p>
        <p className="text-sm font-medium text-slate-600">Tamaño</p>
      </div>
      {
        detailRowsData.map((row) => (
          <DetailRow
            id={row.id}
            name={row.name}
            date={row.date}
            branch={row.branch}
            fileType={row.fileType}
            size={row.size}
          />
        ))
      }
    </div>
  );
}

export default DetailTable;
