import User from "./user";

export default interface Bulletin {
    id?:string,
    title:string,
    date:Date | number,
    content:string,
    author:User | null
}