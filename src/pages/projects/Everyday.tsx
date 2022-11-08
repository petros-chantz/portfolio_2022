import React from "react";
import { Exit } from "../../components/exit/Exit";
import { Footer } from "../../components/footer/Footer";
import { Navbar } from "../../components/navbar/Navbar";
import { Paragraph } from "../../components/project/Paragraph";
import { Details } from "../../components/project/Details";
import { Titles } from "../../components/project/Titles";
import { PhotoCenter } from "../../components/project/photos/PhotoCenter";

export const Everyday = (props: object) => {
  return (
    <React.Fragment>
      <Navbar />
      <section className="flex flex-col gap-32 px-10 my-32 md:gap-52 lg:px-32 md:my-20">
        <Titles
          title="Researching the Future Everyday"
          year="March 2018 - July 2018"
          type="Master Course"
        />
        <Details
          company="Technical University of Eindhoven, TU/e"
          place="Eindhoven, NL"
          time="5 months"
        />
        <h3 className="self-start pt-20 lg:w-2/3">
          APS Group is a marketing communication company with a strong presence
          in content creation, marketing production and print managment. I
          joined APS Group in the role of UX Developer working within the IT
          Development team. There I'm researching, designing and developing
          different in-house SaaS applications.
        </h3>
        <PhotoCenter
          photo="assets/project_photos/MakingWorkshop/workshop01.jpg"
          photoDescription="participants together"
        />
        <Paragraph
          sectionH3="Being the 2nd person within APS to ever join as a designer, I took a leading role in developing a strong base for Design Research activities."
          sectionP="Before joining APS, design research activities were rare, happened in an extreme rush, they were only survey based only confinded in doing surveys and   and there were no guidelines on how stakeholders could request research to be done."
          position="self-end"
        />
      </section>
      <Exit />
      <Footer />
    </React.Fragment>
  );
};
