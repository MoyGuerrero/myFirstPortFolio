import type { Menu } from "@/interfaces/menu.interfaces";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { v4 as uuidv4 } from 'uuid';

export const useMenu = () => {
    const isMenuSelected = ref('/');
    const isVisibleMenu = ref<Boolean>(true)
    const menu = ref<Menu[]>([
        {
            id: uuidv4(),
            name: 'Acerca de mi',
            path: '/'
        },
        {
            id: uuidv4(),
            name: 'Mi Experiencia',
            path: '/Experiencia'
        },
        {
            id: uuidv4(),
            name: 'Proyectos',
            path: '/Proyectos'
        },
        {
            id: uuidv4(),
            name: 'Contacto',
            path: '/Contacto'
        },

    ]);


    const changeLink = (path: string) => isMenuSelected.value = path;


    const changeVisibleMenu = () => {
        isVisibleMenu.value = !isVisibleMenu.value
    }

    const route = useRoute()

    onMounted(() => {
        changeLink(route.fullPath)
    })


    return {

        menu,
        isVisibleMenu,


        isSelected: (path: string): boolean => path === isMenuSelected.value,



        changeLink,
        changeVisibleMenu,


    }
}