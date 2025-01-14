import type { Project } from "@/interfaces/project.interface";
import { ref } from "vue"
import { v4 as uuid4 } from 'uuid';
import game from '@/assets/projects/game-cat.png'
import portfolio from '@/assets/projects/portfolio1.png'
import cottoLogin from '@/assets/projects/cotto-login.png'
import cottoDashboard from '@/assets/projects/cotto-dashboard.png'
import cottoDashboard2 from '@/assets/projects/cotto-dashboard2.png'
import cottoDashboardResponsive from '@/assets/projects/cotto-dashboard-responsive.png'
import cottoDashboardResponsive2 from '@/assets/projects/cotto-dashboard-responsive2.png'
import cottomSystemResponsive from '@/assets/projects/cotto-system-responsive.png'
import backend from '@/assets/projects/backend.png'


export const useProject = () => {
  const projects = ref<Project[]>([
    {
      id: uuid4(),
      name: 'Tic-Tac-Toe',
      image: [game],
      urlDeploy: 'https://tictactoe-withvue.netlify.app/',
      urlCode: 'https://github.com/MoyGuerrero/Tic-Tac-Toe',
      skill: [
        { id: uuid4(), task: 'VueJs 3' },
        { id: uuid4(), task: 'Tailwind Css' },
        { id: uuid4(), task: 'Typescript' },
        { id: uuid4(), task: 'Confetti-Canvas' }
      ]
    },
    {
      id: uuid4(),
      name: 'Portafolio',
      image: [portfolio],
      urlDeploy: 'https://myFirstPortFolioMoisesGuerrer.netlify.app/',
      urlCode: 'https://github.com/MoyGuerrero/myFirstPortFolio',
      skill: [
        { id: uuid4(), task: 'VueJs 3' },
        { id: uuid4(), task: 'Tailwind Css' },
        { id: uuid4(), task: 'Typescript' },
        { id: uuid4(), task: 'Css' },
      ]
    },
    {
      id: uuid4(),
      name: 'Cottom-System (FrontEnd Beta) Proyecto Personal',
      image: [cottoLogin, cottoDashboard, cottoDashboard2, cottoDashboardResponsive, cottoDashboardResponsive2, cottomSystemResponsive],
      urlDeploy: 'https://cotto-system-beta.netlify.app/',
      urlCode: 'https://github.com/MoyGuerrero/proyect-algodon-web',
      skill: [
        { id: uuid4(), task: 'VueJS 3' },
        { id: uuid4(), task: 'Tailwind Css' },
        { id: uuid4(), task: 'TypeScript' },
        { id: uuid4(), task: 'Axios' },
        { id: uuid4(), task: 'Pinia' },
        { id: uuid4(), task: 'Vee-Validate' },
        { id: uuid4(), task: 'vue-toastification' },
      ]
    },
    {
      id: uuid4(),
      name: 'Cotton-System (Backend Beta) Proyecto Personal',
      image: [backend],
      urlDeploy: 'https://github.com/MoyGuerrero/cotto-system',
      urlCode: 'https://github.com/MoyGuerrero/cotto-system',
      skill: [
        { id: uuid4(), task: '.Net Core 6' },
        { id: uuid4(), task: 'C#' },
        { id: uuid4(), task: 'SHA512' },
        { id: uuid4(), task: 'JWT' },
        { id: uuid4(), task: 'Interfaces' },
        { id: uuid4(), task: 'CORS' },
      ]
    },
  ]);

  return {
    projects
  }
}
