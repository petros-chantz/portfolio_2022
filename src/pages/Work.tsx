import { ProjectData } from "../data/ProjectData";
import { Project } from "./Project";

export const Work = () => {
  return (
    <section className="flex flex-col w-full gap-24 px-10 mt-32 lg:px-32 md:gap-32 md:my-52">
      <div className="flex flex-col self-start gap-10">
        <h1>Work Experience</h1>
        <h2>
          My professional carreer{" "}
          <span className="lg:block">over the years.</span>
        </h2>
      </div>
      <div className="flex flex-col gap-48 pt-20 lg:pt-32 lg:gap-52">
        {ProjectData.sort((a, b) => b.year - a.year).map((project, index) => (
          <Project project={project} key={index} />
        ))}
      </div>
    </section>
  );
};
