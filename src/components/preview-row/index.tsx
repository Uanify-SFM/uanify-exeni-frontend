type PreviewRowProps = {
  label: string;
  value: string;
};

function PreviewRow({ label, value }: PreviewRowProps) {
  return (
    <div className="flex justify-between items-center pb-2 border-b">
      <p className="text-sm">{label}</p>
      <p className="font-medium text-slate-600 text-sm">{value}</p>
    </div>
  );
}

export default PreviewRow;
