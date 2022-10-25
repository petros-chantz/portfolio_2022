export const Details = (props: any) => {
  return (
    <div className="flex flex-col self-end gap-20 lg:flex-row">
      <div className="flex flex-col gap-2">
        <p className="text-white">{props.projectItem?.company}</p>
        <p className="text-white">{props.projectItem?.place}</p>
        <p className="text-white">{props.projectItem?.time}</p>
      </div>
      <div className="flex flex-col gap-2">
        {props.projectItem?.keywords.map((keyword: any) => (
          <div className="flex justify-start">
            <p className="text-slate-500">{keyword}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
