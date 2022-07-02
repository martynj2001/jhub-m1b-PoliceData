import { CrimeLocation } from "./crime-location.model";

export class CrimeData {

    public category: string;
    public persistent_id: string;
    public month: string;
    public location: CrimeLocation;
    public context: string;
    public id: number;
    public locaton_type: string;
    public location_subtype: string;
    public outcome_status: CrimeOutcome;


    constructor(category: string, 
                persistent_id: string, 
                month: string,
                context: string,
                id: number,
                locaton_type: string,
                location_subtype: string,
                outcome_status: CrimeOutcome){
        
        this.category = category;
        this.persistent_id = persistent_id;
        this.month = month;
        this.context = context;
        this.id = id;
        this.locaton_type = locaton_type;
        this.location_subtype = location_subtype;
        this.outcome_status = outcome_status;

    }

}

export class CrimeCatagory {
    constructor(public url: string, public name: string){}
}

export class CrimeOutcome {
    constructor(public category:string, public date: string){}
}