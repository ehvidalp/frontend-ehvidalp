export interface skill {
    key: string;
    technologies: Technology[];
}

export interface Technology {
    certification: boolean;
    value: string;
}