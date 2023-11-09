import { environment } from "src/environments/environment";


export class ApplicationDbContext {

    // api url
    public readonly api_url: string;

    // entities

    constructor() {
        this.api_url = `${environment.apiUrl}`;
    }



    public Set(entity: any): void
    {
        console.log(typeof  entity);
        let vars = Object.getOwnPropertyDescriptors(new ApplicationDbContext);
        console.log( this.constructor );

    }


}