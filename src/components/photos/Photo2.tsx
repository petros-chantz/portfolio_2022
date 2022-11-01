export const Photo2 = (props: any) => {
  return (
    <div className="flex flex-col self-center justify-center gap-10 lg:flex-row">
      <img
        src={props.photoFirst}
        alt={props.photoDescriptionFirst}
        className="self-center object-cover object-center lg:w-1/2 lg:h-1/2"
      />

      <img
        src={props.photoSecond}
        alt={props.photoDescriptionSecond}
        className="self-center object-cover object-center lg:w-1/2 lg:h-1/2"
      />
    </div>
  );
};
