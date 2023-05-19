const date = (date?:number) =>{
    if(!date)return;
    return new Date(date).getMonth() +
    "月" +
    new Date(date).getDate() +
    "日";}

export default  date;