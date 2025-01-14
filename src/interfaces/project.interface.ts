import type { Herramientas } from "./experiencia.interface";

export interface Project {
  id: string;
  name: string;
  image: string[],
  urlDeploy?: string,
  urlCode?: string
  skill: Herramientas[]
}
