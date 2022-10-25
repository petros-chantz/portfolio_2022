import React from "react";
import { useParams } from "react-router-dom";
import { Exit } from "../../components/exit/Exit";
import { Footer } from "../../components/footer/Footer";
import { Navbar } from "../../components/navbar/Navbar";
import { ProjectData } from "../../data/ProjectData";

export const ProjectPage = () => {
  const { path } = useParams();
  const projectItem = ProjectData.find((project) => project.path === path);

  console.log(projectItem);

  return (
    <React.Fragment>
      <Navbar />
      <section className="flex flex-col gap-32 px-10 my-32 md:gap-52 lg:px-32 md:my-20">
        <div className="flex flex-col gap-5 md:w-2/3">
          <h1 className="font-bold">{projectItem?.title}</h1>
          <h3 className="text-slate-500">
            {projectItem?.year} - {projectItem?.type}
          </h3>
        </div>
        <div className="flex flex-col self-end gap-2 ">
          <div className="grid md:grid-cols-2 gap-x-5">
            {[
              "Interaction Design",
              "Design Research",
              "Industrial Design",
              "Human Computer Interaction",
              "Interaction Design",
            ].map((keyword) => (
              <div className="flex justify-end">
                <p className="text-white">{projectItem?.keywords}</p>
              </div>
            ))}
          </div>
          <h4 className="self-end text-slate-500">
            Technical University of Eindhoven, The Netherlands
          </h4>
          <h4 className="self-end text-slate-500">In collanoration with:</h4>
        </div>

        <div className="grid self-end justify-end grid-cols-2 gap-10 md:w-4/5">
          <img
            src="https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            className="self-end"
          />
          <img
            src="https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            className="self-end"
          />
          <img
            src="https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            className="self-end"
          />
          <img
            src="https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            className="self-end"
          />
        </div>
        <div className="flex flex-col self-start justify-end gap-10 md:w-4/5">
          <img
            src="https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            className="self-end"
          />
        </div>
        <div className="flex flex-col gap-10 md:w-2/3">
          <h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            excepturi veritatis quod expedita minus eum qui blanditiis quis.
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
            sequi quisquam numquam inventore explicabo reiciendis adipisci
            voluptatem necessitatibus tempora porro facilis ducimus suscipit
            doloremque beatae, soluta eaque, cum ullam eius.
          </p>
        </div>
        <div className="flex flex-col self-end justify-start gap-10 md:w-4/5">
          <img
            src="https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            className="self-end"
          />
        </div>
        <div className="flex flex-col gap-10 md:w-2/3">
          <h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            excepturi veritatis quod expedita minus eum qui blanditiis quis.
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
            sequi quisquam numquam inventore explicabo reiciendis adipisci
            voluptatem necessitatibus tempora porro facilis ducimus suscipit
            doloremque beatae, soluta eaque, cum ullam eius.
          </p>
        </div>
      </section>
      <Exit />
      <Footer />
    </React.Fragment>
  );
};
