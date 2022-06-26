import { Socials } from "./socials.model";

export class Force {
    public id: string;
    public name: string;
    public description: string;
    public url: string;
    public engagement_methods: [];
    public telephone: string;
    
    constructor(id: string,
        name: string,
        description: string,
        url: string,
        engagement: [],
        tel: string,){

        this.id = id;
        this.description = description;
        this.name = name;
        this.url = url;
        this.engagement_methods = engagement;
        this.telephone = tel;
    }

}