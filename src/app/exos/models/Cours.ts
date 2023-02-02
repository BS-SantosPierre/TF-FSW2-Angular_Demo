export class Cours {
    title: string;
    description: string;
    isActive: boolean;

    constructor(title: string, description:string, isActive: boolean = false) {
        this.title = title;
        this.description = description;
        this.isActive = isActive;
    }
}
