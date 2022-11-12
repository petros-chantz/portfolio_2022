import React from "react";
import { Exit } from "../../components/exit/Exit";
import { Footer } from "../../components/footer/Footer";
import { Navbar } from "../../components/navbar/Navbar";
import { Paragraph } from "../../components/project/Paragraph";
import { Details } from "../../components/project/Details";
import { Titles } from "../../components/project/Titles";
import { PhotoCenter } from "../../components/project/photos/PhotoCenter";
import { PhotoSides } from "../../components/project/photos/PhotoSides";
import { Photo2 } from "../../components/project/photos/Photo2";
import { useParams } from "react-router-dom";
import { ProjectData } from "../../data/ProjectData";

export const Project = (props: object) => {
  const { path } = useParams();
  const projectItem = ProjectData.find((project) => project.path === path);

  return (
    <React.Fragment>
      <Navbar />
      <section className="flex flex-col gap-32 px-10 my-32 md:gap-52 lg:px-32 md:my-20">
        <Titles
          title={projectItem?.title}
          period={projectItem?.period}
          type="Work Experience"
        />
        <Details
          company={projectItem?.company}
          company2={projectItem?.stakeholder}
          place={projectItem?.place}
          time={projectItem?.time}
        />
        <h3 className="self-start pt-20 lg:w-2/3">
          {projectItem?.text.header}
        </h3>

        <PhotoCenter
          photo={projectItem?.photos.center}
          photoDescription={`project-${projectItem?.title}-media`}
        />
        <Paragraph
          sectionH3={projectItem?.text.sectionA.header}
          sectionP={projectItem?.text.sectionA.paragraph}
          position="self-end"
        />
      </section>
      <Exit />
      <Footer />
    </React.Fragment>
  );
};
