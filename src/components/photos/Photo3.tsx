export const Photo3 = (props: any) => {
  return (
    <div className="flex flex-col self-center justify-center gap-10 lg:flex-row">
      <img
        src={props.photoFirst}
        alt={props.photoDescriptionFirst}
        className="self-center object-cover object-center lg:w-1/3 lg:h-1/3"
      />
      <img
        src={props.photoSecond}
        alt={props.photoDescriptionSecond}
        className="self-center object-cover object-center lg:w-1/3 lg:h-1/3"
      />
      <img
        src={props.photoThird}
        alt={props.photoDescriptionThird}
        className="self-center object-cover object-center lg:w-1/3 lg:h-1/3"
      />
    </div>
  );
};
