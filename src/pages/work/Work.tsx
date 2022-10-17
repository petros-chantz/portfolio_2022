import { Projects } from "./Projects";

export const Work = () => {
  return (
    <section className="flex flex-col gap-24 px-10 mt-32 lg:px-32 md:gap-32 md:my-52">
      <div className="flex flex-col self-start gap-10 ">
        <h1>Work</h1>
        <h2>A selection of different multidisciplanary projects.</h2>
      </div>
      <Projects />
    </section>
  );
};
