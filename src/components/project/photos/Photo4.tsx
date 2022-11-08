export const Photo4 = (props: any) => {
  return (
    <div className="flex flex-col w-full h-full gap-10 lg:grid lg:grid-cols-2 gap-x-10 gap-y-10">
      <div className="overflow-hidden aspect-w-1 aspect-h-1">
        <img
          src={props.photo1}
          alt={props.altPhoto1}
          className="object-cover object-center w-full h-full"
        />
      </div>
      <div className="overflow-hidden aspect-w-1 aspect-h-1">
        <img
          src={props.photo2}
          alt={props.altPhoto2}
          className="object-cover object-center w-full h-full"
        />
      </div>
      <div className="overflow-hidden aspect-w-1 aspect-h-1">
        <img
          src={props.photo3}
          alt={props.altPhoto3}
          className="object-cover object-center w-full h-full"
        />
      </div>
      <div className="overflow-hidden aspect-w-1 aspect-h-1">
        <img
          src={props.photo4}
          alt={props.altPhoto4}
          className="object-cover object-center w-full h-full"
        />
      </div>
    </div>
  );
};
