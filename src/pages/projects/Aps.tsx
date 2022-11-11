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

export const Aps = () => {
  return (
    <React.Fragment>
      <Navbar />
      <section className="flex flex-col gap-32 px-10 my-32 md:gap-52 lg:px-32 md:my-20">
        <Titles
          title="APS Group"
          year="August 2021 - now"
          type="Work Experience"
        />
        <Details
          company="APS Group, IT Development"
          place="Eindhoven, NL"
          time="15 months"
        />
        <h3 className="self-start pt-20 lg:w-2/3">
          APS Group is a marketing communication company with a strong presence
          in digital and print marketing material production. I joined their IT
          Development team with a focus on researching, designing and developing
          new product experiences for their different in-house SaaS
          applications.
        </h3>

        <PhotoCenter
          photo="assets/project_photos/APS-thumbnail.jpg"
          photoDescription="participants together"
        />
        <Paragraph
          sectionH3="Being only the 2nd person ever to join APS as a designer, I’ve taken a leading role in expanding and implementing design research activities within our development circles. "
          sectionP="Before my arrival, design research within APS was rare and was heavily confined to simple surveys. I’ve had the chance to introduce new design research methods such as focus groups and 1-to-1 interviewing sessions. I’ve conducted multiple design research studies across different domains with clients, developers and business analysts and reported my findings to key stakeholders for further implementation. "
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
