export const Titles = (props: any) => {
  return (
    <div className="flex flex-col gap-5 md:w-2/3">
      <h1 className="font-bold">{props.title}</h1>
      <h3 className="text-slate-500">
        {props.period} | {props.type}
      </h3>
    </div>
  );
};
