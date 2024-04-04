import { BiImageAlt, BiMoviePlay } from "react-icons/bi";
import { DetailRowInterface } from "../../interfaces/DetailRow";

function DetailRow({ name, fileType, date, size, branch }: DetailRowInterface) {
  return (
    <button
      type="button"
      className="grid grid-cols-5 pl-8 pb-3 py-3 w-full border-b gap-3 hover:bg-slate-100 cursor-pointer"
    >
      <div className="flex items-center gap-x-3 col-span-2">
        {fileType == "png" && <BiImageAlt className="text-2xl" />}
        {fileType == "avi" && <BiMoviePlay className="text-2xl" />}
        <p>{name.length > 25 ? name.slice(0, 25) : name}</p>
      </div>
      <p className="text-left">{branch}</p>
      <p className="text-left">{date}</p>
      <p className="text-left">{size}</p>
    </button>
  );
}

export default DetailRow;
