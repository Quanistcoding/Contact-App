import User from "./user";

export default interface Chat {
    id?:string,
    date:number,
    content:string,
    author?:User | null
}