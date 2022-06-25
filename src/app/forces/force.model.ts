export class Force {
    public id: string;
    public name: string;
    public description: string;
    public url: string;
    public engagement: string[];
    public tel: string;
    
    constructor(id: string,
        name: string,
        description: string,
        url: string,
        engagement: string[],
        tel: string,){

        this.id = id;
        this.description = description;
        this.name = name;
        this.url = url;
        this.engagement = engagement;
        this.tel = tel;
    }

}