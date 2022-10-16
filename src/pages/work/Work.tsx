import { Projects } from "./Projects";

export const Work = () => {
  return (
    <section className="flex flex-col gap-24 px-10 mt-32 lg:px-32 lg:gap-20 md:gap-32 md:mt-52">
      <div className="flex flex-col self-start gap-10 md:w-2/3">
        <h1>Work</h1>
        <h3>A selection of different multidisciplanery projects.</h3>
      </div>
      <Projects />
    </section>
  );
};
