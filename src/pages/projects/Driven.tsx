import React from "react";
import { Exit } from "../../components/exit/Exit";
import { Footer } from "../../components/footer/Footer";
import { Navbar } from "../../components/navbar/Navbar";
import { Paragraph } from "../../components/project/Paragraph";
import { Details } from "../../components/project/Details";
import { Titles } from "../../components/project/Titles";
import { PhotoCenter } from "../../components/project/photos/PhotoCenter";
import { Photo3 } from "../../components/project/photos/Photo3";

export const Driven = (props: object) => {
  return (
    <React.Fragment>
      <Navbar />
      <section className="flex flex-col gap-32 px-10 my-32 md:gap-52 lg:px-32 md:my-20">
        <Titles
          title="Data Driven Design"
          year="September 2018 - January 2019"
          type="Master Course"
        />
        <Details
          company="Technical University of Eindhoven, TU/e"
          company2="Philips Data Enabled Design"
          place="Eindhoven, NL"
          time="5 months"
        />
        <h3 className="self-start pt-20 lg:w-2/3">
          In the summer of 2022, I participated in a 7-day intense model-making
          workshop organised by Atelier La Juntana in Liencres, Cantabria,
          Spain. My motivation for joining was to get back into working with
          physcial materials and learn new methods of making.
        </h3>
        <PhotoCenter
          photo="assets/project_photos/MakingWorkshop/workshop01.jpg"
          photoDescription="participants together"
        />
        <Paragraph
          sectionH3="I got familiar with several novel model-making practices.
          From experiments with resin and clay to metal casting and photo
          etching."
          sectionP="lorem"
          position="self-end"
        />

        <Photo3
          photoFirst="assets/project_photos/MakingWorkshop/workshop04.jpg"
          photoDescriptionFirst="participants together"
          photoSecond="assets/project_photos/MakingWorkshop/workshop03.jpg"
          photoDescriptionSecond="participants together"
          photoThird="assets/project_photos/MakingWorkshop/workshop03.jpg"
          photoDescriptionThird="participants together"
        />

        <Paragraph
          sectionH3="I got familiar with several novel model-making practices.
          From experiments with resin and clay to metal casting and photo
          etching."
          sectionP="lorem"
          position="self-start"
        />
      </section>
      <Exit />
      <Footer />
    </React.Fragment>
  );
};
