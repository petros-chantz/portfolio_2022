export const Details = (props: any) => {
  return (
    <div className="flex flex-col self-end gap-20 lg:flex-row">
      <div className="flex flex-col gap-2">
        <p className="text-white">{props.company}</p>
        <p className="text-white">{props.company2}</p>
        <p className="text-white">{props.place}</p>
        <p className="text-white">{props.time}</p>
      </div>
      <div className="flex flex-col gap-2">
        {/* {[props.keyword].map((keyword: any) => (
          <div className="flex justify-start">
            <p className="text-slate-500">{keyword}</p>
          </div>
        ))} */}
        {/* <div className="flex justify-start">
          <p className="text-slate-500">{props.keyword}</p>
        </div> */}
      </div>
    </div>
  );
};
