export interface ProjectProperties {
  index: number;
  path: string;
  title: string;
  subtitle: string;
  type: string;
  place?: string;
  time?: string;
  link?: Object;
  photos: Object;
  year: number;
  keywords: Array<string>;
  collaboration?: Array<string>;
  company: string;
  text: Object;
}
