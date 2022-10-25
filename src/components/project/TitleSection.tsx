export const TitleSection = (props: any) => {
  return (
    <div className="flex flex-col gap-5 md:w-2/3">
      <h1 className="font-bold">{props.projectItem?.title}</h1>
      <h3 className="text-slate-500">
        {props.projectItem?.year} - {props.projectItem?.type}
      </h3>
    </div>
  );
};
