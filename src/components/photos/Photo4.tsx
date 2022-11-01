export const Photo4 = (props: any) => {
  return (
    <div className="flex flex-col w-full h-full gap-10 lg:grid lg:grid-cols-2 gap-x-10 gap-y-10">
      <div className="overflow-hidden aspect-w-1 aspect-h-1">
        <img
          src={props.photoFirst}
          alt={props.altPhotoFirst}
          className="object-cover object-center w-full h-full"
        />
      </div>
    </div>
  );
};
