export interface ProjectProps {
    name: string;
    images: string[];
}[]

export interface SingleProjectProps {
    item: {
        name: string;
        images: string[];
    }
}

export interface AppTechProps {
    children: React.ReactNode,
    name: string;
    index: number;
}