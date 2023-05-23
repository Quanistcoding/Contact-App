import User from "./user";


export default interface Comment {
    id?:string,
    date:number,
    content:string,
    author?:User | null
}