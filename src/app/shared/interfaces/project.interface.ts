export interface Project { 
    photos: string[];
    title: string;
    description: string;
    tools: string[];
    links: LinkProject[];
}

export interface LinkProject {
    name: string;
    url: string;
}
