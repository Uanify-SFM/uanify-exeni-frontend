import PathContainer from "../../components/path-container";
import RecordsTable from "../../components/table/RecordsTable";
import Folder from "../../assets/folder.svg";
import Image_One from "../../assets/example_img_1.png";
import Image_Two from "../../assets/example_img_2.png";
import Image_Three from "../../assets/example_img_3.png";
import Image_Four from "../../assets/example_img_4.png";
import PreviewRow from "../../components/preview-row";

function PatientRecord() {
  return (
    <div className="flex gap-x-4 h-full">
      <div className="bg-white border rounded-2xl w-[70vw]">
        <PathContainer idPatient="1234" patientName="Ricardo González Flores" />
        <RecordsTable />
      </div>
      <div className="bg-white border rounded-2xl w-[30vw]">
        <div className="h-14 flex items-center pl-6 gap-x-3 border-b">
          <img src={Folder} />
          <p className="font-medium text-slate-700">RSV816379352</p>
        </div>
        <div className="px-6 py-3 flex flex-col gap-y-3">
          <p className="font-medium text-lg">Previsualización</p>
          <img src={Image_One} alt="main-image" />
          <div className="flex gap-x-3 items-center">
            <img className="w-16" src={Image_Two} alt="main-image" />
            <img className="w-16" src={Image_Three} alt="main-image" />
            <img className="w-16" src={Image_Four} alt="main-image" />
          </div>

          <div className="flex flex-col gap-y-2 mt-4">
            <PreviewRow label="ID Estudio" value="6" />
            <PreviewRow label="Sucursal" value="Mariano Otero" />
            <PreviewRow label="Clave" value="RSV816379352" />
            <PreviewRow label="No. imágenes" value="4" />
            <PreviewRow label="No. videos" value="1" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PatientRecord;
