const date = (date?:number) =>{
    if(!date)return;
    return new Date(date).getMonth() +
    "/" +
    new Date(date).getDate();}

export default  date;