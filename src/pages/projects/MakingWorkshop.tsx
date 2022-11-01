import React from "react";
import { Exit } from "../../components/exit/Exit";
import { Footer } from "../../components/footer/Footer";
import { Navbar } from "../../components/navbar/Navbar";
import { Paragraph } from "../../components/project/Paragraph";
import { Details } from "../../components/project/Details";
import { Titles } from "../../components/project/Titles";
import { PhotoCenter } from "../../components/photos/PhotoCenter";
import { Photo2 } from "../../components/photos/Photo2";
import { Photo3 } from "../../components/photos/Photo3";
import { Photo4 } from "../../components/photos/Photo4";

const PhotosFour = [
  {
    photo: "assets/project_photos/MakingWorkshop/workshop03.jpg",
    alt: "something",
  },
  {
    photo: "assets/project_photos/MakingWorkshop/workshop03.jpg",
    alt: "something",
  },
  {
    photo: "assets/project_photos/MakingWorkshop/workshop03.jpg",
    alt: "something",
  },
  {
    photo: "assets/project_photos/MakingWorkshop/workshop03.jpg",
    alt: "something",
  },
];

export const MakingWorkshop = (props: object) => {
  return (
    <React.Fragment>
      <Navbar />
      <section className="flex flex-col gap-32 px-10 my-32 md:gap-52 lg:px-32 md:my-20">
        <Titles
          title="Model Making in the Digital Age"
          year="2022"
          type="Workshop"
        />
        <Details
          keyword="Digital Fabrication"
          company="Atelier La Juntana"
          place="Liencres, Cantabria, Spain"
          time="7 days"
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
        <Photo2
          photoFirst="assets/project_photos/MakingWorkshop/workshop01.jpg"
          photoDescriptionFirst="participants together"
          photoSecond="assets/project_photos/MakingWorkshop/workshop01.jpg"
          photoDescriptionSecond="participants together"
        />
        <Photo3
          photoFirst="assets/project_photos/MakingWorkshop/workshop04.jpg"
          photoDescriptionFirst="participants together"
          photoSecond="assets/project_photos/MakingWorkshop/workshop03.jpg"
          photoDescriptionSecond="participants together"
          photoThird="assets/project_photos/MakingWorkshop/workshop03.jpg"
          photoDescriptionThird="participants together"
        />
        <Photo4 photos={PhotosFour} />
        <Paragraph
          sectionH3="Working with materials again in a physcical enviroment made me think of things."
          sectionP="lorem"
          position="self-start"
        />
      </section>
      <Exit />
      <Footer />
    </React.Fragment>
  );
};
