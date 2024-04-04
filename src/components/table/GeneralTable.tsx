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
      <GeneralRow
        id="RSV81637"
        name="Ricardo González Flores"
        date="3 abril 2024, 5:52 PM"
        records={4}
      />
    </div>
  );
}

export default GeneralTable;
