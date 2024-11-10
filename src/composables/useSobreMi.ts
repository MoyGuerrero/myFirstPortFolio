import { ref } from "vue";
import type { Social } from "@/interfaces/social.interface";
import type { Skills } from "@/interfaces/skill.interface";
import instagram from '@/assets/images/instagram.png';
import linkedin from '@/assets/images/linkedin.png';
import github from '@/assets/images/github.png';
import html5 from '@/assets/images/html5.png';
import javascript from '@/assets/images/javascript.png';
import css3 from '@/assets/images/css3.png';
import jquery from '@/assets/images/jquery.png';
import bootstrap from '@/assets/images/bootstrap.png';
import nodejs from '@/assets/images/nodejs.png';
import vue3 from '@/assets/images/vue3.png';
import sequelize from '@/assets/images/sequelize.png';
import wp from '@/assets/images/wp.png';
import express from '@/assets/images/express.png';
import cv from '@/assets/cv/Curriculum-Moises-Guerrero-Vazquez.pdf'
import { v4 as uuidv4 } from 'uuid';


export const useSobreMi = () => {

    const buttonDownload = ref<HTMLLinkElement | null>(null);

    const socialRed = ref<Social[]>([
        {
            id: uuidv4(),
            image: instagram,
            url: 'https://www.instagram.com/moy.guerrero',
            alt: 'logo-instagram',
            name: 'Instagram'
        },
        {
            id: uuidv4(),
            image: linkedin,
            url: 'https://www.linkedin.com/in/moises-guerrero-329b41244',
            alt: 'logo-linkedin',
            name: 'Linkedin'
        },
        {
            id: uuidv4(),
            image: github,
            url: 'https://github.com/MoyGuerrero',
            alt: 'logo-instagram',
            name: 'GitHub'
        },
        {
            id: uuidv4(),
            image: wp,
            url: 'https://api.whatsapp.com/send/?phone=526291238664&text=Hola%2C+me+gustar%C3%ADa+saber+m%C3%A1s+sobre+tus+servicios.&type=phone_number&app_absent=0',
            alt: 'logo-wp',
            name: 'Whatsapp'
        }
    ]);


    const skills = ref<Skills[]>([
        {
            id: uuidv4(),
            route: html5,
            skill: 'Html5'
        },
        {
            id: uuidv4(),
            route: javascript,
            skill: 'JavaScript'
        },
        {
            id: uuidv4(),
            route: css3,
            skill: 'CSS3'
        },
        {
            id: uuidv4(),
            route: jquery,
            skill: 'JQuery'
        },
        {
            id: uuidv4(),
            route: bootstrap,
            skill: 'Bootstrap'
        },
        {
            id: uuidv4(),
            route: nodejs,
            skill: 'NodeJS'
        },
        {
            id: uuidv4(),
            route: vue3,
            skill: 'Vue 3'
        },
        {
            id: uuidv4(),
            route: express,
            skill: 'Express'
        },
        {
            id: uuidv4(),
            route: sequelize,
            skill: 'Sequelize'
        },
    ]);

    const downloadCv = () => {
        buttonDownload.value?.setAttribute("download", "Curriculum-Moises-Guerrero-Vazquez.pdf");
        buttonDownload.value!.href = cv;
        // buttonDownload.value?.click();
    }
    return {
        buttonDownload,

        socialRed,
        skills,


        downloadCv
    }
}