import User from "./user";


export default interface Comment {
    id?:string,
    bulletinId:string,
    date:number,
    content:string,
    author?:User | null
}