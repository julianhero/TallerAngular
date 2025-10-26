export class Serie {
    id: number;
    name: string;
    channel: string;
    seasons: number;
    webpage: string;
    poster: string;


    constructor(
        id: number,
        name: string,
        channel: string,
        seasons: number,
        webpage: string,
        poster: string,
    ){
        this.id= id;
        this.name= name;
        this.channel= channel;
        this.seasons= seasons;
        this.webpage= webpage;
        this.poster= poster;
    }
}