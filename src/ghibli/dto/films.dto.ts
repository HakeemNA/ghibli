export class FilmDTO {
    readonly id: string;
    readonly title: string;
    readonly description: string;
    readonly director: string;
    readonly producer: string;
    readonly releaseDate: string;
    readonly rtScore: number;

    constructor(id: string, title: string, description: string, director: string, producer: string, releaseDate: string, rtScore: string) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.director = director;
        this.producer = producer;
        this.releaseDate = releaseDate;
        this.rtScore = Number(rtScore);
    }
}
