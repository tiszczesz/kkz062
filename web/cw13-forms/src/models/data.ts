export const genres = [
    "obyczajowy",
    "wojenny",
    "kryminalny",
    "sesnsacyjny",
    "dla dzieci"
];
export interface IFilm{
    title:string;
    director:string;
    genre:string;
    length:number;
    createDate : Date
}