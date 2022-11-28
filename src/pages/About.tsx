import { XMarkIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

export const About = () => {
  return (
    <section className="flex flex-col p-10">
      <Link
        to={"/"}
        className="fixed rounded-full flex justify-center w-12 h-12 group hover:border-2 border-[#EE793B]"
      >
        <XMarkIcon className="w-10 h-10 fixed text-white self-center group-hover:text-[#EE793B] transition group-hover:rotate-180" />
      </Link>
      <div className="flex flex-col self-center w-2/3 gap-20 py-20 desktop:w-2/4">
        <div className="flex flex-col gap-10 lg:flex-row">
          <div className="lg:w-1/3">
            <img src="assets/profile-photo.jpg" alt="petros" />
          </div>
          <div className="flex flex-col justify-between">
            <div className="flex flex-col gap-5">
              <h2>Petros Chantzopoulos</h2>
              <p>
                <span className="block">BSc. & MSc. Industrial Design</span>
                <span className="block">
                  {" "}
                  Technical University of Eindhoven, TU/e
                </span>
              </p>
            </div>
            <div className="flex flex-col gap-5">
              <p className="text-xl">
                petros.chantzopoulos [at] gmail [dot] com
              </p>
              <p className="text-xl">+31 6514980</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 pt-24">
          <h2 className="self-start leading-normal">
            I’m interested in the connection between the physical & the digital
            world.
          </h2>
          <p className="leading-10">
            I research, explore, prototype and develop new modalities of
            interactions. I love translating (often) abstract and ambiguous
            user/stakeholder needs and wishes into detailed interaction
            requirements for tech teams. I thrive in multidisciplinary teams and
            enjoy working in diverse projects and domains.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="self-start leading-normal">
            "Show me, don't tell me" mindset.
          </h2>
          <p className="leading-10">
            Experiences are always felt, never described. Designing meaningful
            interactions is an act of doing, not an act of “gut feelings”. In my
            work, experience and interaction take central role in informing my
            design process and the design decisions I make. I don't design
            things for myself, thus testing soon and often with real people is
            my modus operandi.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

{
  /* <div className="flex flex-col self-center gap-10 lg:flex-row-reverse">
<div className="flex flex-col gap-5">
  <h3>
    <span className="block">I’m interested in the connection</span>{" "}
    between the physical & digital world.
  </h3>
  <p>
    I research, explore, prototype and develop new modalities of
    interactions. I love translating (often) abstract and ambiguous
    user/stakeholder needs and wishes into detailed interaction
    requirements for tech teams. I thrive in multidisciplinary teams
    and enjoy working in diverse projects and domains.
  </p>
</div>
<div>
  <img src="assets/profile-photo.jpg" alt="petros" />
</div>
</div>
<div className="flex flex-col self-center gap-10 lg:flex-row-reverse">
<div>
  <img src="assets/about.jpg" alt="petros" />
</div>
<div className="flex flex-col gap-5">
  <h3>“Show me, don’t tell” mindset.</h3>
  <p>
    Experiences are always felt, never described. Designing meaningful
    interactions is an act of doing, not an act of “gut feelings”. In
    my work, experience and interaction take central role in informing
    my design process and the design decisions I make. I don't design
    things for myself, thus testing soon and often with real people is
    my modus operandi.
  </p>
</div>
</div> */
}
