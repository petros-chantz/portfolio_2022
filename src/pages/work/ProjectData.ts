interface ProjectProperties {
  routerName: string;
  title: string;
  type: string;
  link: string;
  img: string;
  year: number;
  keywords: Array<string>;
  cooperation?: string;
  company?: string;
}

export const ProjectData: ProjectProperties[] = [
  {
    routerName: 'project-1',
    title: 'Digital Fabrication Workshop ',
    link: 'https://www.linkedin.com/in/petroschantz/',
    img: 'https://images.pexels.com/photos/2923595/pexels-photo-2923595.jpeg?auto=compress&cs=tinysrgb&w=800',
    year: 2020,
    keywords: ['UX', 'design'],
    type: 'school project'
  },
  {
    routerName: 'project-2',
    title: 'UI Experiments',
    link: 'https://www.linkedin.com/in/petroschantz/',
    img: 'https://images.pexels.com/photos/2923595/pexels-photo-2923595.jpeg?auto=compress&cs=tinysrgb&w=800',
    year: 2018,
    keywords: ['UX', 'design'],
    type: 'school project'
  },
  {
    routerName: 'project-3',
    title: 'linkedIn',
    link: 'https://www.linkedin.com/in/petroschantz/',
    img: 'https://images.pexels.com/photos/2923595/pexels-photo-2923595.jpeg?auto=compress&cs=tinysrgb&w=800',
    year: 2019,
    keywords: ['UX', 'design', 'UX', 'design'],
    type: 'school project'
  },
  {
    routerName: 'project-4',
    title: 'linkedIn',
    link: 'https://www.linkedin.com/in/petroschantz/',
    img: 'https://images.pexels.com/photos/2923595/pexels-photo-2923595.jpeg?auto=compress&cs=tinysrgb&w=800',
    year: 2022,
    keywords: ['UX', 'design'],
    type: 'school project'
  }
];
