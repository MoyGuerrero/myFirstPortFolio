
import type { Experiencia } from '@/interfaces/experiencia.interface';
import { ref } from 'vue';

import { v4 as uuidv4 } from 'uuid';

export const useExperiencia = () => {


    const jobs = ref<Experiencia[]>([
        {
            id: uuidv4(),
            empresa: 'Muebleria America',
            puesto: 'Desarrollador FrontEnd (e-commerce)',
            fechaIngreso: '21/08/2024',
            fechaFinal: "Actual",
            descripcion: `Encargado de crear e optimizar modulos basados en los requerimientos, para una mejor experiencia al usuario.`,
            ciudad: 'Guadalajara, Jalisco',
            tipo: 'Presencial',
            tareas: [
                { id: uuidv4(), task: 'Html' },
                { id: uuidv4(), task: 'VueJS 3' },
                { id: uuidv4(), task: 'TypeScript' },
                { id: uuidv4(), task: 'Postman' },
                { id: uuidv4(), task: 'Sequelize' },
                { id: uuidv4(), task: 'NodeJs' },
            ]
        },
        {
            id: uuidv4(),
            empresa: 'Autotransporte Dur',
            puesto: 'Desarrollador FrontEnd',
            fechaIngreso: '13/09/2021',
            fechaFinal: '16/08/2024',
            descripcion: 'Encargado de desarrollador interfaces interactivas e intituivas para mejorar la experiencia de los usuarios, integrando el consumo de apis ya sea externos como propios. Tambien como el apoyo en el soporte a los usuarios.',
            ciudad: 'Chihuahua, Chihuahua',
            tipo: 'Remoto',
            tareas: [
                { id: uuidv4(), task: 'Html5' },
                { id: uuidv4(), task: 'Bootstrap' },
                { id: uuidv4(), task: 'Javascript' },
                { id: uuidv4(), task: 'JQuery' },
                { id: uuidv4(), task: 'Postman' },
                { id: uuidv4(), task: 'C#' },
                { id: uuidv4(), task: 'Anydesk' },

            ]
        },
        {
            id: uuidv4(),
            empresa: 'Grupo Rigba',
            puesto: 'Soporte Tecnico',
            fechaIngreso: '25/04/21',
            fechaFinal: '08/09/21',
            descripcion: 'Encargado de apoyar a usuario. Instalaciones de impresora, programas, formateo, actualizaciones de windows',
            ciudad: 'Chihuahua, Chihuahua',
            tipo: 'Presencial',
            tareas: [
                { id: uuidv4(), task: 'Desatornilladores' },
                { id: uuidv4(), task: 'AnyDesk' },

            ]
        },
        {
            id: uuidv4(),
            empresa: 'Atel',
            puesto: 'Soporte Tecnico',
            fechaIngreso: '01/01/2020',
            fechaFinal: '15/04/2021',
            descripcion: 'Dar soporte a usuarios mediante seguimiento de tickets, instalaciones de impresoras, formateo de maquinas, creaciones de usuarios de vpn utilizando OpenVpn, creaciones de usuario dentro del dominio con active directory, realizaciones de cable utp siguiendo la norma',
            ciudad: 'Chihuahua, Chihuahua',
            tipo: 'Presencial',
            tareas: [
                { id: uuidv4(), task: 'Windows Server' },
                { id: uuidv4(), task: 'Pinza Ponchadoras' },
                { id: uuidv4(), task: 'Inconcert' },
                { id: uuidv4(), task: 'CCleaner' },
            ]
        },
        {
            id: uuidv4(),
            empresa: 'Crediclub',
            puesto: 'Soporte Tecnico',
            fechaIngreso: '22/06/2019',
            fechaFinal: '15/08/2019',
            ciudad: 'Monterrey, Nuevo Leon',
            tipo: 'Presencial',
            descripcion: 'Soporte a usuarios presencialmente y remotamente, apoyandolos con instalaciones de paquete de office, errores que se podria presentar, cambios de componentes al equipo, instalaciones de correo electronicos corporativos.',
            tareas: [
                { id: uuidv4(), task: 'Pinza Ponchadoras' },
                { id: uuidv4(), task: 'Desatornilladores' },
                { id: uuidv4(), task: 'TeamViewer' },
            ]
        },
    ]);
    return {
        jobs
    }
}