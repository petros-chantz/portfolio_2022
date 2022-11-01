export const PhotoCenter = (props: any) => {
  return (
    <img
      src={props.photo}
      alt={props.photoDescription}
      className="self-center md:w-4/5"
    />
  );
};
