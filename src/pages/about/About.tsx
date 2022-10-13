export const About = () => {
  return (
    <div className="flex flex-col h-screen gap-10 px-10 py-20 my-10">
      <div className="flex flex-col gap-5 lg:flex-row">
        <div className="flex flex-col lg:w-2/3">
          <h1>Hey! I'm Petros!</h1>
          <h2 className="font-thin">
            {" "}
            I am a <span className="font-medium">
              Creative Technologist
            </span>{" "}
            and an <span className="font-medium">Interaction Designer</span>
          </h2>
        </div>
        <img
          src="https://images.pexels.com/photos/840916/pexels-photo-840916.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
        />
      </div>
      <h3>
        My interests lies in the connection between the physical and digital
        world.
      </h3>
      <p>
        I research, explore, prototype and develop new modalities of
        interactions. I use code to explore my interactions and I follow
        research through design and experience prototyping methodologies.
      </p>
      <p>
        I love translating (often) abstract and ambiguous user/stakeholder needs
        and wishes into straightforward interaction requirements for tech teams.
        My work is multidisciplinary and diverse as are the projects, topics and
        teams I work in.
      </p>
      <h3>Currently,</h3>
      <h3>I work at APS Group</h3>
    </div>
  );
};
