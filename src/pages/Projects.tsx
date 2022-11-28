import { Exit } from "../components/Exit";

export const Projects = () => {
  return (
    <section className="flex flex-col h-screen gap-10 p-10">
      <Exit />
      <section className="flex flex-col gap-10">
        <h2 className="self-center">Public Work</h2>

        <div className="flex flex-row justify-center gap-10">
          <p>12 projects</p>
          <p>-</p>
          <p>6 years</p>
        </div>
        <div className="flex flex-col gap-5">
          <h3>APS Group</h3>
          <div>
            <img
              src="/assets/projects_photos/aps/aps.jpg"
              alt="work experience"
            />
          </div>
          <div className="flex flex-row justify-between">
            <p>Aug. 2021 - now | 16 months</p>
            <p>Interaction design</p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Projects;
