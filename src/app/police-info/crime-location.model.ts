import { Street } from "./street.model";

export class CrimeLocation {

    public latitude: string;
    public longitude: string;
    public street: Street;
  
    constructor(latitude: string, 
                longitude: string, 
                street: Street){
        
        this.latitude = latitude;
        this.longitude = longitude;
        this.street = street;
    }
}