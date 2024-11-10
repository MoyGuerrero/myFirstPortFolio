


export interface Experiencia {
    id: string;
    empresa: string;
    puesto: string;
    fechaIngreso: string;
    fechaFinal: string;
    descripcion?: string;
    ciudad: string;
    tipo: string
    tareas: Herramientas[]
}


export interface Herramientas {
    id: string,
    task: string
}