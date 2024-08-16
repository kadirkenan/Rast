export interface ServerLink {
    id: number;
    url:string;
    name: string;
    description: string;
}

export class Link {
    public id:  number = 0;
    public url: string = " ";
    public name: string = " ";
    public description: string = " ";
}