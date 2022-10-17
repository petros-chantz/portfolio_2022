export const About = () => {
  return (
    <section className="px-10 py-20 my-10 lg:my-32 xl:px-32 desktop:px-52">
      <div className="flex flex-col gap-5">
        <div className=" lg:self-end lg:w-2/3">
          <h2 className="self-center lg:self-end">Hey! I'm Petros!</h2>
        </div>
        <div className="flex bg-center lg:self-end lg:w-2/3 ">
          <img
            src="https://images.pexels.com/photos/7961265/pexels-photo-7961265.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
            alt="petros-profile"
            className="md:w-2/4 md:self-start"
          />
        </div>
        <div className="flex flex-col self-end gap-5 pt-20 md:gap-10 lg:w-2/3">
          <h3>
            I'm interested in the connection between the physical and the
            digital world.
          </h3>
          <p>
            I research, explore, prototype and develop new modalities of
            interactions with code. I love translating (often) abstract and
            ambiguous user/stakeholder needs and wishes into straightforward
            interaction requirements for tech teams. I work within
            multidisciplinary and diverse teams and projects.
          </p>

          <div className="flex flex-col pt-10">
            <h3 className="self-start">Currently,</h3>
            <h3 className="self-start pt-2">I work at APS Group.</h3>
            <p className="self-start pt-10">
              There, I'm leading design research initiatives and bridge the gap
              between UX/UI design and frontend development. As a UX Developer,
              I help deliver new product features to our SaaS products and make
              sure every interaction is accessible and responsive for all of our
              users.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
