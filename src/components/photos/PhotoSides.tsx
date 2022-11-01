export const PhotoSides = (props: any) => {
  return (
    <img
      src={props.photo}
      alt={props.photoDescription}
      className={`self-center lg:w-2/3 ${props.position}`}
    />
  );
};
