import { Copyright } from "../components/Copyright";
import { Exit } from "../components/Exit";
import { WorkData } from "../data/WorkData";

export const Work = () => {
  return (
    <section className="flex flex-col p-5 md:p-10">
      <Exit />
      <section className="flex flex-col pt-20 md:pb-32">
        <div className="flex flex-col gap-5 md:pl-20">
          <h2 className="self-center md:self-start">Work Experience</h2>
          <div className="flex flex-row justify-start gap-5">
            <p>Over 5 clients</p>
            <p>-</p>
            <p>+4 years</p>
          </div>
        </div>
        <div className="flex flex-col self-center gap-20 pt-24 lg:w-2/3">
          {WorkData.sort((a, b) => b.year - a.year).map((project, index) => (
            <a
              href={`/${project.path}`}
              key={index}
              className="flex flex-col justify-center gap-5 lg:w-3/5 group even:self-start odd:self-end"
            >
              <div className="flex flex-row justify-start">
                <h3>{project.company}</h3>
              </div>
              <div className="w-full overflow-hidden transition ease-in-out duration-700 hover:scale-[1.05]">
                <img
                  src={project.thumbnail}
                  alt={`work-${project.company}`}
                  className="object-cover object-center hover:opacity-100 opacity-60"
                />
              </div>
              <div className="flex flex-row justify-between">
                <p className="text-xl text-slate-500">{project.time}</p>
                <p className="text-xl">{project.role}</p>
              </div>
            </a>
          ))}
        </div>
      </section>
      <Copyright />
    </section>
  );
};

export default Work;
