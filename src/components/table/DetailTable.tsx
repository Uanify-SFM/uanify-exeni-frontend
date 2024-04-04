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
      <DetailRow
        id="1234"
        name="00aa1569-f6f4-43a6-aec7-61811e5576ac.png"
        date="3 de abril 2023"
        branch="Mariano Otero"
        fileType="png"
        size="150 KB"
      />
    </div>
  );
}

export default DetailTable;
