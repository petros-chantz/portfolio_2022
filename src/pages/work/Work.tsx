import { ProjectData } from "../../data/ProjectData";
import { ProjectListItem } from "./ProjectListItem";

export const Work = () => {
  return (
    <section className="flex flex-col gap-24 px-10 mt-32 lg:px-32 md:gap-32 md:my-52">
      <div className="flex flex-col self-start gap-10 ">
        <h1>Work</h1>
        <h2>A selection of different multidisciplanary projects.</h2>
      </div>
      <div className="grid grid-cols-1 gap-20 lg:grid-cols-2">
        {ProjectData.sort((a, b) => b.year - a.year).map((project) => (
          <ProjectListItem project={project} />
        ))}
      </div>
    </section>
  );
};
