import type { Project } from "@/interfaces/project.interface";
import { ref } from "vue"
import { v4 as uuid4 } from 'uuid';
import game from '@/assets/projects/game-cat.png'
import portfolio from '@/assets/projects/portfolio1.png'

export const useProject = () => {
    const projects = ref<Project[]>([
        {
            id: uuid4(),
            name: 'Tic-Tac-Toe',
            image: game,
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
            image: portfolio,
            skill: [
                { id: uuid4(), task: 'VueJs 3' },
                { id: uuid4(), task: 'Tailwind Css' },
                { id: uuid4(), task: 'Typescript' },
                { id: uuid4(), task: 'Css' },
            ]
        },
    ]);

    return {
        projects
    }
}