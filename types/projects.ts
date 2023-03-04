export interface ProjectProps {
    name: string;
    src: string;
}[]

export interface SingleProjectProps {
    item: {
        name: string;
        src: string;
    }
}

export interface AppTechProps {
    children: React.ReactNode,
    name: string;
}