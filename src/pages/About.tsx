import { ArrowRightIcon } from "@heroicons/react/24/outline";

export const About = () => {
  return (
    <section className="px-10 py-5 xl:px-32 desktop:px-52">
      <div className="flex flex-col gap-10">
        <div className="flex justify-start md:justify-start lg:self-end lg:w-2/3 ">
          <img
            alt="petros-profile"
            src="assets/profile-photo.jpg"
            className="self-center w-2/3 md:w-[35%] md:self-start"
          />
        </div>
        <div className="flex flex-col self-end gap-5 pt-20 md:gap-10 lg:w-2/3">
          <h3>
            I'm interested in the connection between the physical and the
            digital world.
          </h3>
          <p>
            I research, explore, prototype and develop new modalities of
            interactions. I love translating (often) abstract and ambiguous
            user/stakeholder needs and wishes into detailed interaction
            requirements for tech teams. I thrive in multidisciplinary teams and
            enjoy working in diverse projects and domains.
          </p>
        </div>
        <div className="flex pt-32 bg-center lg:self-start lg:w-2/3">
          <img
            src="assets/about.jpg"
            alt="petros making things"
            className=" md:self-start"
          />
        </div>
        <div className="flex flex-col self-start gap-5 pt-5 md:gap-10 lg:w-2/3">
          <h3>"Show me, don't tell me" mindset.</h3>
          <p>
            Experiences are always felt, never described. Designing meaningful
            interactions is an act of doing, not an act of “gut feelings”. In my
            work, experience and interaction take central role in informing my
            design process and the design decisions I make. I don't design
            things for myself, thus testing soon and often with real people is
            my modus operandi.
          </p>
        </div>
        <div className="flex flex-col self-end gap-5 pt-20 lg:pt-32 md:gap-10 lg:w-2/3">
          <div className="flex flex-col gap-2">
            <h3 className="self-start">Currently,</h3>
            <h3 className="self-start">I work at APS Group.</h3>
          </div>
          <p className="self-start">
            There, I’m working as a design researcher and multidisciplinary
            designer in the cross domain design team. I’m responsible for
            identifying needs, wishes and pain points within our products and I
            conduct design research activities with our external and internal
            clients.
          </p>
        </div>
        <div className="flex flex-col self-end gap-5 pt-20 lg:pt-32 md:gap-10 lg:w-2/3">
          <div className="flex flex-col gap-10">
            {[["Writing", "https://medium.com/@petros.chantz"]].map(
              ([linkTitle, url], index) => (
                <div
                  className="flex flex-row self-start gap-2 group"
                  key={index}
                >
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="self-center"
                  >
                    {linkTitle}
                  </a>
                  <ArrowRightIcon className="self-center w-10 h-10 text-white transition duration-700 group-hover:translate-x-6" />
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
