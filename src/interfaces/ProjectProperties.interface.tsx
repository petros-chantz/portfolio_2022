export interface ProjectProperties {
  index: number;
  url: string;
  title: string;
  type: string;
  link?: Object;
  photos: Object;
  year: number;
  keywords: Array<string>;
  collaboration?: Array<string>;
  company: string;
  text: Object;
}
