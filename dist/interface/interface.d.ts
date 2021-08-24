interface Book {
    page: number;
    title: string;
}
declare class Comic implements Book {
    private publishYear;
    page: number;
    title: string;
    constructor(page: number, title: string, publishYear: string);
    getPublishYear(): string;
}
export declare const popComic: Comic;
export {};
