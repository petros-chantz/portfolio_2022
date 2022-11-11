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
import { text } from "stream/consumers";

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
          photo="assets/project_photos/APS-thumbnail.jpg"
          photoDescription="participants together"
        />
        <Paragraph
          sectionH3={projectItem?.text.sectionA.header}
          sectionP={projectItem?.text.sectionA.paragraph}
          position="self-end"
        />
        <PhotoSides
          photo="assets/project_photos/APS/01.jpg"
          photoDescription="design research"
          position="lg:self-start"
        />
        <PhotoSides
          photo="assets/project_photos/APS/02.jpg"
          photoDescription="design research"
          position="lg:self-end"
        />
        <PhotoSides
          photo="assets/project_photos/APS/03.jpg"
          photoDescription="design research"
          position="lg:self-start"
        />
        <Paragraph
          sectionH3=""
          sectionP="There, within these 15 months I have helped built real applications for clients and internal systems using the latest frontend development technologies such as React and Microfrontends."
          position="self-start"
        />

        <PhotoCenter
          photo="assets/project_photos/APS/06.png"
          photoDescription="participants together"
        />
        <Photo2
          photoFirst="assets/project_photos/APS/04.png"
          photoDescriptionFirst="participants together"
          photoSecond="assets/project_photos/APS/05.jpg"
          photoDescriptionSecond="participants together"
        />
        <Paragraph
          sectionH3="Working alongside software developers has helped me gain a solid ground on software development. This experience has further solidify my interest in data, coding and systemic design."
          sectionP="lorem"
          position="self-start"
        />
      </section>
      <Exit />
      <Footer />
    </React.Fragment>
  );
};
