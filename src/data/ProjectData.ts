import { ProjectProperties } from "../interfaces/ProjectProperties.interface";

export const ProjectData: ProjectProperties[] = [
  {
    index: 0,
    path: "MakingWorkshop",
    title: "Model Making in the Digital Age",
    subtitle: `In the end of August 2022, I participated in a 7-day intense model-making 
    workshop organised by the Atelier La Juntana in Liencres, Cantabria, Spain. There I got 
    familiar with several novel model-making practices. From experiments with resin and clay to 
    metal casting and photo etching. `,
    year: 2022,
    duration: "7 days",
    type: "Workshop",
    keywords: [
      "Model Making",
      "Digital Fabrication",
      "Prototyping",
      "Interaction Design",
    ],
    collaboration: [],
    company: "Atelier La Juntana",
    place: "Liencres, Cantabria, Spain",
    link: {
      linkA: "",
    },
    photos: {
      thumbnail: "./assets/project_photo/making.jpg",
      projectPage: {
        sectionA: ``,
        sectionb: "",
        sectionC: "",
      },
    },
    text: {
      sectionA: {
        h3: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
        excepturi veritatis quod expedita minus eum qui blanditiis quis.`,
        p: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
        sequi quisquam numquam inventore explicabo reiciendis adipisci
        voluptatem necessitatibus tempora porro facilis ducimus suscipit
        doloremque beatae, soluta eaque, cum ullam eius.`,
      },
      sectionB: {},
      sectionC: {},
    },
  },
];
