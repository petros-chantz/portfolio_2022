// import ProfilePhoto from "./../../assets/profile-photo.jpg";

export const AboutContent = () => {
  return (
    <main className="flex flex-col px-10 pt-20 gap-52">
      <div className="flex flex-col md:px-52">
        <div className="flex justify-center md:pl-32 md:justify-start">
          <img
            src={""}
            alt="petros"
            className="w-60 md:w-72 lg:w-96 drop-shadow-2xl"
          />
        </div>
        <div className="flex flex-col gap-10 pt-10 md:pl-32">
          <p className="self-start paragraph_text--base">
            I am a Creative Technologist and Interaction Designer.
          </p>
          <p className="paragraph_text--base md:self-end">
            I am interested in the connection between the physical and digital
            world. I research, explore, prototype and develop new modalities of
            interactions using research through design and experience
            prototyping methodologies.
          </p>
          <p className="paragraph_text--base md:self-end">
            I love translating (often) abstract and ambiguous user/stakeholder
            needs and wishes into straightforward interaction requirements for
            tech teams. My work is multidisciplinary and diverse as are the
            projects, topics and teams I work in.
          </p>
          <div className="flex flex-col justify-start gap-1 pt-10 md:self-start">
            <p className="paragraph_text--large ">Currently,</p>
            <p className="paragraph_text--large">I work at APS Group.</p>
          </div>
          <p className="paragraph_text--base md:self-end">
            There, I'm leading design research initiatives by examining and
            evaluating our product experiences, as well as inquiring new wishes
            and demands from our clients and stakeholders. As a UX Developer,
            I’m heavily involved in the development of our front-end web
            applications delivering new product features and creating design
            systems and user interfaces for upcoming projects.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-1 md:px-32">
        <div className="w-32 pb-5 border-t-2 border-t-white"></div>
        <p className="paragraph_text--large">
          Do you see a possible fit for me within your team?
        </p>
        <p className="paragraph_text--large">
          Or you simply feel like chatting about technology and design?
        </p>
        {/* <p className="paragraph_text--large">Get in touch</p> */}
        <p className=" paragraph_text--base">Feel free to reach out</p>
        <p className="pt-20 paragraph_text--base">
          petros.chantz [at] gmail [dot] com
        </p>
        <p className=" paragraph_text--base">+31 65213490</p>
      </div>
    </main>
  );
};
