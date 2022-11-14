import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { ProjectData } from "../data/ProjectData";

export const ProjectPage = () => {
  const { path } = useParams();
  const projectItem = ProjectData.find((project) => project.path === path);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        type: "linear",
        stiffness: 300,
        damping: 2,
        duration: 2,
      }}
    >
      <Navbar />
      <section className="flex flex-col gap-32 px-10 my-32 md:gap-52 lg:px-32 md:my-20">
        <div className="flex flex-col gap-5 md:w-2/3">
          <h1 className="font-bold">{projectItem?.title}</h1>
          <h3 className="text-slate-500">{projectItem?.subtitle}</h3>
        </div>
        <div className="flex flex-col self-end gap-20 lg:flex-row">
          <div className="flex flex-col gap-2">
            <p className="text-white">{projectItem?.company}</p>
            <p className="text-white">{projectItem?.stakeholder}</p>
            <p className="text-white">{projectItem?.place}</p>
            <p className="text-white">{projectItem?.time}</p>
          </div>
          <div className="flex flex-col gap-2">
            {projectItem?.keywords?.map((keyword: any, index) => (
              <div className="flex justify-start" key={index}>
                <p className="text-slate-500">{keyword}</p>
              </div>
            ))}
          </div>
        </div>
        <h3 className="self-start pt-20 lg:w-2/3">
          {projectItem?.text?.header}
        </h3>
        <img
          src={projectItem?.photos?.center}
          alt={`${projectItem?.title}`}
          className="self-center md:w-4/5"
        />
        <div className={`flex flex-col lg:self-end gap-10 md:w-2/3`}>
          <h3>{projectItem?.text?.middle?.h3}</h3>
          <p>{projectItem?.text?.middle?.p}</p>
        </div>
        <div className="flex flex-col w-full gap-10 lg:gap-32">
          <img
            src={projectItem?.photos?.section?.a}
            alt={projectItem?.title}
            className="self-center w-full lg:w-2/3 lg:self-start"
          />
          <img
            src={projectItem?.photos?.section?.b}
            alt={projectItem?.title}
            className="self-center w-full lg:w-2/3 lg:self-end"
          />
          <img
            src={projectItem?.photos?.section?.c}
            alt={projectItem?.title}
            className="self-center w-full lg:w-2/3 lg:self-start"
          />
        </div>
        <div className="flex flex-col gap-10 lg:self-start mb-[-70px] md:w-2/3">
          <h3>{projectItem?.text?.end?.h3}</h3>
          <p>{projectItem?.text?.end?.p}</p>
          <div className="flex flex-col gap-10 pt-20">
            <div className="flex flex-row self-start justify-start gap-2 group">
              <a
                href={projectItem?.links?.a?.url}
                target="_blank"
                rel="noopener noreferrer"
                className="self-start"
              >
                <h3>{projectItem?.links?.a?.name}</h3>
              </a>
              <ArrowRightIcon className="self-center w-10 h-10 text-white transition duration-700 opacity-0 group-hover:opacity-100 group-hover:translate-x-6" />
            </div>
            <div className="flex flex-row self-start justify-start gap-2 group">
              <a
                href={projectItem?.links?.b?.url}
                target="_blank"
                rel="noopener noreferrer"
                className="self-start"
              >
                <h3>{projectItem?.links?.b?.name}</h3>
              </a>
              <ArrowRightIcon className="self-center w-10 h-10 text-white transition duration-700 opacity-0 group-hover:opacity-100 group-hover:translate-x-6" />
            </div>
          </div>
        </div>

        <div className="flex flex-row self-end justify-end gap-2 pb-10 group">
          <ArrowLeftIcon className="self-center w-10 h-10 text-white transition duration-700 opacity-0 group-hover:opacity-100 group-hover:-translate-x-6" />
          <Link to="/" className="self-center">
            Back
          </Link>
        </div>
      </section>

      <Footer />
    </motion.section>
  );
};
