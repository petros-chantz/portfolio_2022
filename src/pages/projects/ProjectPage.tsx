import React from "react";
import { useParams } from "react-router-dom";
import { Exit } from "../../components/exit/Exit";
import { Footer } from "../../components/footer/Footer";
import { Navbar } from "../../components/navbar/Navbar";
import { Paragraph } from "../../components/project/Paragraph";
import { Details } from "../../components/project/Details";
import { TitleSection } from "../../components/project/TitleSection";
import { ProjectData } from "../../data/ProjectData";

export const ProjectPage = (props: object) => {
  const { path } = useParams();
  const projectItem = ProjectData.find((project) => project.path === path);

  return (
    <React.Fragment>
      <Navbar />
      <section className="flex flex-col gap-32 px-10 my-32 md:gap-52 lg:px-32 md:my-20">
        <TitleSection projectItem={projectItem} />
        <Details projectItem={projectItem} />
        <h3 className="self-start pt-20 lg:w-2/3"></h3>
        <img
          src="https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
          className="self-center md:w-4/5"
        />
        <Paragraph projectItem={projectItem} />
        <div className="flex flex-col w-full gap-10 lg:flex-row">
          <img
            src="https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            className="self-center w-1/2 lg:self-end"
          />
          <img
            src="https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            className="self-center w-1/2 lg:self-start"
          />
        </div>
        <img
          src="https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
          className="self-center md:w-4/5"
        />
        <Paragraph projectItem={projectItem} />
        <div className="flex flex-row self-end gap-20">
          <div className="flex flex-col gap-20">
            <div className="flex flex-col gap-2">
              <p>In cooperation with</p>
              <p className="text-white"></p>
            </div>
            <div className="flex flex-col gap-2">
              <p>More photos</p>
              <p className="text-white"></p>
            </div>
          </div>
        </div>
      </section>
      <Exit />
      <Footer />
    </React.Fragment>
  );
};
