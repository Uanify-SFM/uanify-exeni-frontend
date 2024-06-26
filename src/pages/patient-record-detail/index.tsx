import PathContainer from "../../components/path-container";
import Preview from "../../components/preview";
import DetailTable from "../../components/table/DetailTable";

function PatientRecordDetail() {
  return (
    <div className="flex gap-x-4 h-full">
      <div className="bg-white border rounded-2xl w-[70vw]">
        <PathContainer
          idPatient="1234"
          patientName="Ricardo González Flores"
          idRecord="SVHFA134"
          recordName="SVHFA134"
        />
        <DetailTable />
      </div>
      <Preview />
    </div>
  );
}

export default PatientRecordDetail;
