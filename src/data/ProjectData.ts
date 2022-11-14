import { ProjectProperties } from "../interfaces/ProjectProperties.interface";

export const ProjectData: ProjectProperties[] = [
  {
    index: 0,
    path: "APSGroup",
    title: "APS Group",
    subtitle: "August 2021 - now | Work Experience",
    year: 2022,
    thumbnail: `assets/project_photos/aps/aps.jpg`,
    area: "Design Research & Interaction Design",
    keywords: [
      "Design Research",
      "Interaction Design",
      "System Design",
      "B2B Workflows",
    ],
    company: "APS Group, IT Development",
    place: "Eindhoven, NL",
    time: "16 months",
    text: {
      header: `APS Group is a marketing communication company with a strong presence 
      in content creation, marketing material production and print management. I 
      joined their IT Development team with a focus on researching and designing 
      new product experiences for their different in-house SaaS applications.`,
      middle: {
        h3: `Being only the 2nd person ever to join APS as a designer, 
        I’ve taken a leading role in expanding and implementing design 
        research activities within the department.`,
        p: `Before my arrival, design research within APS was rare and 
        was heavily confined to doing small simple surveys that led to 
        little to no actionable outcomes. To better fit the demands and 
        needs of the department, I introduced more appropriate design 
        research methods such as focus groups, 1-to-1 interviewing and 
        diary studies. I also identified early on that stakeholders need 
        help acknowledging when and how to involve design research. Thus, 
        I created new procedures for them to request help or plan discovery sessions.`,
      },
      end: {
        h3: `Almost 16 months later, I’ve conducted numerous design research studies 
        with international clients, brands and internal stakeholders. `,
        p: `A great highlight 
        of my career within APS has been the development of personas and the relationships 
        between them. By insisting on and advocating for data-driven personas to stakeholders, 
        managers and business analysts, we have now a better and clearer view of the 
        opportunities and challenges we’re facing.`,
      },
    },
    photos: {
      center: `assets/project_photos/aps/aps.jpg`,
      section: {
        a: `assets/project_photos/aps/teams.jpg`,
        b: `assets/project_photos/aps/results.jpg`,
        c: `assets/project_photos/aps/interview.jpg`,
      },
    },
  },
  {
    index: 1,
    path: "Workshop",
    title: "Model Making in the Digital Age",
    subtitle: "August - September 2022 | Workshop",
    year: 2022,
    thumbnail: `assets/project_photos/workshop/workshop.jpg`,
    area: "Workshop",
    keywords: [
      "Digital Fabrication",
      "Product Design",
      "Model Making",
      "Self-Development",
    ],
    company: "Atelier La Juntana",
    place: "Liencres, Cantabria, Spain",
    time: "7 days",
    text: {
      header: `In the summer of 2022, I participated in a 7-day intense model-making workshop 
      organised by the Atelier La Juntana in Liencres, Cantabria, Spain.`,
      middle: {
        h3: `I’m a big believer in taking personal time off for self-development and acquiring new skills and knowledge. `,
        p: `I joined this workshop with the motivation to rediscover my love for physical prototyping and model-making. The workshop provided a very rigorous pace which was much needed as we had to cover new techniques and methods of prototyping in a very short time. `,
      },
      end: {
        h3: `What made this workshop truly an unforgettable experience was seeing such a vibrant community of 30+ designers from around Europe make and learn together.`,
        p: `I’ve always believed that making is a core value in designing. To design is to make with purpose and to be able to do that well you need to train your hands and your eyes into being confident. The amazing atmosphere of the workshop and the great discussions we had over lunch about design, making and fabrication were very inspiring and fulfilling. This experience truly reignited again my love for making. `,
      },
    },
    links: {
      a: {
        name: `Atelier La Juntana`,
        url: `http://www.atelierlajuntana.com/`,
      },
      b: {
        name: `Article I wrote`,
        url: `https://medium.com/@petros.chantz/thoughts-on-making-a-week-in-liencres-spain-d4f625ace64e`,
      },
    },
    photos: {
      center: `assets/project_photos/workshop/together.jpg`,
      section: {
        a: `assets/project_photos/workshop/Group36.jpg`,
        b: `assets/project_photos/workshop/ceramic.jpg`,
        c: `assets/project_photos/workshop/Group35.png`,
      },
    },
  },
  {
    index: 3,
    path: "DataDrivenDesign",
    title: "Data Driven Design",
    subtitle: "September 2018 - January 2019 | Master Course",
    year: 2019,
    thumbnail: "assets/project_photos/driven/driven.png",
    area: "Design Research",
    keywords: [
      "Design Research",
      "Data Driven Design",
      "Research Through Design",
      "Healthcare",
    ],
    company: "Technical University of Eindhoven TU/e",
    stakeholder: "Philips Data Driven Design",
    place: "Eindhoven, NL",
    time: "3.5 months",
    text: {
      header: `How can we generate rich data in-situ design research? How can we use data as material for design? How do we build and deploy design research prototypes that have to record sensitive data about users?`,
      middle: {
        h3: `In this Master's course, we tackled the area of data-driven design in-situ design research. `,
        p: `Being guided by sleeping doctors and researchers, we build Joystick. Joystick is a sleepiness measuring divide aimed at the field context. It is a self-contained, network-connected tangible measurement device that instructs users to engage in a short psychomotor vigilance test. Through experimentation, we demonstrated that the device’s measurements correlate to self-reported sleepiness and that its measurements are significantly different for moments when a participant suffers sleep inertia compared to when the participant is fully awake.`,
      },
      end: {
        h3: `The success of this project led to a pictorial submission to the CHI’19 Conference.`,
        p: `Within this project, I took a leading role in the technology of the measuring devices as well as the data gathering and analysing. It was the very first research project in which we build deployable and ready-to-be-used devices that all had to work remotely and for long periods of time. It was a great challenge which in the end brought a very positive impact on my development as well as the output of knowledge we published. `,
      },
    },
    links: {
      a: {
        name: `Submitted CHI Pictorial`,
        url: `https://www.dropbox.com/s/3ui28nohiadsi6v/CHI-Pictorial-2019.pdf?dl=0`,
      },
    },
    photos: {
      center: `assets/project_photos/driven/driven.png`,
      section: {
        a: `assets/project_photos/driven/joystick_01.jpg`,
        b: `assets/project_photos/driven/joystick-all.jpg`,
        c: `assets/project_photos/driven/data.jpg`,
      },
    },
  },
  {
    index: 4,
    path: "ComingSoon",
    title: "Researching the Future Everyday",
    subtitle: "April 2018 - July 2018 | Master Course",
    year: 2018,
    thumbnail: "assets/project_photos/everyday/future.jpg",
    area: "Design Research",
    keywords: [
      "Design Research",
      "Speculative Design",
      "Smart IoT Systems",
      "Design Research Prototypes",
    ],
    company: "Technical University of Eindhoven TU/e",
    place: "Eindhoven, NL",
    time: "3.5 months",
    text: {
      header: `APS Group is a marketing communication company with a strong presence 
      in content creation, marketing material production and print management. I 
      joined their IT Development team with a focus on researching and designing 
      new product experiences for their different in-house SaaS applications.`,
      middle: {
        h3: `Being only the 2nd person ever to join APS as a designer, 
        I’ve taken a leading role in expanding and implementing design 
        research activities within the department.`,
        p: `Before my arrival, design research within APS was rare and 
        was heavily confined to doing small simple surveys that led to 
        little to no actionable outcomes. To better fit the demands and 
        needs of the department, I introduced more appropriate design 
        research methods such as focus groups, 1-to-1 interviewing and 
        diary studies. I also identified early on that stakeholders need 
        help acknowledging when and how to involve design research. Thus, 
        I created new procedures for them to request help or plan discovery sessions.`,
      },
      end: {
        h3: `Almost 16 months later, I’ve conducted numerous design research studies 
        with international clients, brands and internal stakeholders. `,
        p: `A great highlight 
        of my career within APS has been the development of personas and the relationships 
        between them. By insisting on and advocating for data-driven personas to stakeholders, 
        managers and business analysts, we have now a better and clearer view of the 
        opportunities and challenges we’re facing.`,
      },
    },
    links: {
      a: {
        name: `Course Report`,
        url: ``,
      },
    },
    photos: {
      center: `assets/project_photos/everyday/future.jpg`,
      section: {
        a: `assets/project_photos/everyday/teams.jpg`,
        b: `assets/project_photos/everyday/results.jpg`,
        c: `assets/project_photos/everyday/interview.jpg`,
      },
    },
  },
  {
    index: 5,
    path: "ComingSoon",
    title: "Composing Everyday Rituals",
    subtitle: "January 2018 - April 2018 | Master Course",
    year: 2018,
    thumbnail: "assets/project_photos/rituals/rituals.jpg",
    area: "Interaction Design",
    keywords: [
      "Service Research",
      "Interaction Design",
      "In-situ Research",
      "Designing for Rituals",
    ],
    company: "Technical University of Eindhoven TU/e",
    place: "Eindhoven, NL",
    time: "3.5 months",
    text: {
      header: `APS Group is a marketing communication company with a strong presence 
      in content creation, marketing material production and print management. I 
      joined their IT Development team with a focus on researching and designing 
      new product experiences for their different in-house SaaS applications.`,
      middle: {
        h3: `Being only the 2nd person ever to join APS as a designer, 
        I’ve taken a leading role in expanding and implementing design 
        research activities within the department.`,
        p: `Before my arrival, design research within APS was rare and 
        was heavily confined to doing small simple surveys that led to 
        little to no actionable outcomes. To better fit the demands and 
        needs of the department, I introduced more appropriate design 
        research methods such as focus groups, 1-to-1 interviewing and 
        diary studies. I also identified early on that stakeholders need 
        help acknowledging when and how to involve design research. Thus, 
        I created new procedures for them to request help or plan discovery sessions.`,
      },
      end: {
        h3: `Almost 16 months later, I’ve conducted numerous design research studies 
        with international clients, brands and internal stakeholders. `,
        p: `A great highlight 
        of my career within APS has been the development of personas and the relationships 
        between them. By insisting on and advocating for data-driven personas to stakeholders, 
        managers and business analysts, we have now a better and clearer view of the 
        opportunities and challenges we’re facing.`,
      },
    },
    photos: {
      center: `assets/project_photos/rituals/rituals.jpg`,
      section: {
        a: `assets/project_photos/rituals/teams.jpg`,
        b: `assets/project_photos/rituals/results.jpg`,
        c: `assets/project_photos/rituals/interview.jpg`,
      },
    },
  },
  // {
  //   index: 6,
  //   path: "ExploratoryPrototyping",
  //   title: "Exploratory Prototyping",
  //   year: 2019,
  //   thumbnail: "assets/project_photos/prototyping.jpg",
  //   area: "Interaction Design & Prototyping",
  // },
  {
    index: 7,
    path: "ComingSoon",
    title: "Researching Design Identities",
    subtitle: "January 2018 - June 2018 | Master Project",
    year: 2018,
    thumbnail: "assets/project_photos/identities/identities.jpg",
    area: "Design Research",
    keywords: ["Design Research", "Design Toolkits"],
    company: "Technical University of Eindhoven TU/e",
    place: "Eindhoven, NL",
    time: "5 months",
    text: {
      header: `APS Group is a marketing communication company with a strong presence 
      in content creation, marketing material production and print management. I 
      joined their IT Development team with a focus on researching and designing 
      new product experiences for their different in-house SaaS applications.`,
      middle: {
        h3: `Being only the 2nd person ever to join APS as a designer, 
        I’ve taken a leading role in expanding and implementing design 
        research activities within the department.`,
        p: `Before my arrival, design research within APS was rare and 
        was heavily confined to doing small simple surveys that led to 
        little to no actionable outcomes. To better fit the demands and 
        needs of the department, I introduced more appropriate design 
        research methods such as focus groups, 1-to-1 interviewing and 
        diary studies. I also identified early on that stakeholders need 
        help acknowledging when and how to involve design research. Thus, 
        I created new procedures for them to request help or plan discovery sessions.`,
      },
      end: {
        h3: `Almost 16 months later, I’ve conducted numerous design research studies 
        with international clients, brands and internal stakeholders. `,
        p: `A great highlight 
        of my career within APS has been the development of personas and the relationships 
        between them. By insisting on and advocating for data-driven personas to stakeholders, 
        managers and business analysts, we have now a better and clearer view of the 
        opportunities and challenges we’re facing.`,
      },
    },
    photos: {
      center: `assets/project_photos/identities/identities.jpg`,
      section: {
        a: `assets/project_photos/identities/teams.jpg`,
        b: `assets/project_photos/identities/results.jpg`,
        c: `assets/project_photos/identities/interview.jpg`,
      },
    },
  },
  {
    index: 8,
    path: "ComingSoon",
    title: "Designing Smart IoT Experiences",
    subtitle: "September 2017 - January 2018 | Master Project",
    year: 2017,
    thumbnail: "assets/project_photos/audio/audio.jpg",
    area: "Interaction Design",
    keywords: [
      "Interaction Design",
      "Systemic Design",
      "Smart IoT Homes",
      "Data Driven Design",
    ],
    company: "Technical University of Eindhoven TU/e",
    place: "Eindhoven, NL",
    time: "5 months",
    text: {
      header: `APS Group is a marketing communication company with a strong presence 
      in content creation, marketing material production and print management. I 
      joined their IT Development team with a focus on researching and designing 
      new product experiences for their different in-house SaaS applications.`,
      middle: {
        h3: `Being only the 2nd person ever to join APS as a designer, 
        I’ve taken a leading role in expanding and implementing design 
        research activities within the department.`,
        p: `Before my arrival, design research within APS was rare and 
        was heavily confined to doing small simple surveys that led to 
        little to no actionable outcomes. To better fit the demands and 
        needs of the department, I introduced more appropriate design 
        research methods such as focus groups, 1-to-1 interviewing and 
        diary studies. I also identified early on that stakeholders need 
        help acknowledging when and how to involve design research. Thus, 
        I created new procedures for them to request help or plan discovery sessions.`,
      },
      end: {
        h3: `Almost 16 months later, I’ve conducted numerous design research studies 
        with international clients, brands and internal stakeholders. `,
        p: `A great highlight 
        of my career within APS has been the development of personas and the relationships 
        between them. By insisting on and advocating for data-driven personas to stakeholders, 
        managers and business analysts, we have now a better and clearer view of the 
        opportunities and challenges we’re facing.`,
      },
    },
    photos: {
      center: `assets/project_photos/aps/aps.jpg`,
      section: {
        a: `assets/project_photos/aps/teams.jpg`,
        b: `assets/project_photos/aps/results.jpg`,
        c: `assets/project_photos/aps/interview.jpg`,
      },
    },
  },
  {
    index: 9,
    path: "ComingSoon",
    title: "Researching Future Retail Experiences",
    subtitle: "September 2016 - January 2017 | Final Bachelor Project",
    year: 2016,
    thumbnail: "assets/project_photos/fbp/fbp.jpg",
    area: "Design Research",
    keywords: [
      "Speculative Design",
      "Design Research",
      "Ultra-Personalised Fashion",
      "Digital Fabrication",
    ],
    company: "Technical University of Eindhoven TU/e",
    place: "Eindhoven, NL",
    time: "5 months",
    text: {
      header: `APS Group is a marketing communication company with a strong presence 
      in content creation, marketing material production and print management. I 
      joined their IT Development team with a focus on researching and designing 
      new product experiences for their different in-house SaaS applications.`,
      middle: {
        h3: `Being only the 2nd person ever to join APS as a designer, 
        I’ve taken a leading role in expanding and implementing design 
        research activities within the department.`,
        p: `Before my arrival, design research within APS was rare and 
        was heavily confined to doing small simple surveys that led to 
        little to no actionable outcomes. To better fit the demands and 
        needs of the department, I introduced more appropriate design 
        research methods such as focus groups, 1-to-1 interviewing and 
        diary studies. I also identified early on that stakeholders need 
        help acknowledging when and how to involve design research. Thus, 
        I created new procedures for them to request help or plan discovery sessions.`,
      },
      end: {
        h3: `Almost 16 months later, I’ve conducted numerous design research studies 
        with international clients, brands and internal stakeholders. `,
        p: `A great highlight 
        of my career within APS has been the development of personas and the relationships 
        between them. By insisting on and advocating for data-driven personas to stakeholders, 
        managers and business analysts, we have now a better and clearer view of the 
        opportunities and challenges we’re facing.`,
      },
    },
    photos: {
      center: `assets/project_photos/audio/audio.jpg`,
      section: {
        a: `assets/project_photos/audio/teams.jpg`,
        b: `assets/project_photos/audio/results.jpg`,
        c: `assets/project_photos/audio/interview.jpg`,
      },
    },
  },
];
