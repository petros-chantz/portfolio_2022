interface PhotosProperties {
  position: "left" | "right";
  photosNumber: number;
}

export const Photos = (props: PhotosProperties) => {
  return (
    <div className="grid self-end justify-end grid-cols-2 gap-10 md:w-4/5">
      <img
        src="https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt=""
        className="self-end"
      />
      <img
        src="https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt=""
        className="self-end"
      />
      <img
        src="https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt=""
        className="self-end"
      />
      <img
        src="https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt=""
        className="self-end"
      />
    </div>
  );
};
