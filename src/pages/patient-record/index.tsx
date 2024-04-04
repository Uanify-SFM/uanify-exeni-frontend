import PathContainer from "../../components/path-container";
import Preview from "../../components/preview";
import RecordsTable from "../../components/table/RecordsTable";

function PatientRecord() {
  return (
    <div className="flex gap-x-4 h-full">
      <div className="bg-white border rounded-2xl w-[70vw]">
        <PathContainer idPatient="1234" patientName="Ricardo González Flores" />
        <RecordsTable />
      </div>
      <Preview />
    </div>
  );
}

export default PatientRecord;
