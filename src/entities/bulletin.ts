import User from "./user";

export default interface Bulletin {
    id?:string,
    title:string,
    date:number,
    content:string,
    author?:User | null,
    likedBy:User[]
}