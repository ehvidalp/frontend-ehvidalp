export interface skill {
    key: string;
    images: string[];
    technologies: (string | { certification: string, value: string })[];
}