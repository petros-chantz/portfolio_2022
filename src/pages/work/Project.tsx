import React from "react";

import { useParams } from "react-router-dom";
import { Exit } from "../../components/exit/Exit";
import { Footer } from "../../components/footer/Footer";
import { Navbar } from "../../components/navbar/Navbar";
import { Paragraph } from "../../components/paragraph/Paragraph";
import { ProjectData } from "./ProjectData";

export const Project = () => {
  const { title } = useParams();
  const project = ProjectData.find((project) => project.title === title);

  const index = project?.index;
  console.log(index);

  return (
    <React.Fragment>
      <Navbar />
      <section className="flex flex-col px-10 my-32 gap-52 lg:px-32 md:my-20">
        <div className="flex flex-col gap-5 md:w-2/3">
          <h1 className="font-bold">{project?.title}</h1>
          <h2 className="text-slate-500">{`${project?.year} - ${project?.type}`}</h2>
        </div>
        <Paragraph
          h2={false}
          h3={false}
          p={true}
          pText={"lorem"}
          position={"left"}
        />
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
      <Exit
        previousIndex={index !== undefined ? index - 1 : null}
        nextIndex={index !== undefined ? index + 1 : null}
      />
      <Footer />
    </React.Fragment>
  );
};
