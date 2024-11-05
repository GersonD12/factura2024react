import { invoice } from "../data/invoice"

export const getInvoices = () => {
    // podria ser una llamda a una api
    // let total =0;
    // invoice.items.forEach(item =>{
    //     total = total +item.price * item.quantity;
    // })
    //map retorna un array
    const total = calculateTotal(invoice.items);
    return { ...invoice, total: total };
}
//unicamente retorna un resultado como por ejemplo = 23
export const calculateTotal =(items=[]) =>{
    return items
        .map(item=> item.price * item.quantity)
        .reduce((accumulator, currentValue)=> accumulator + currentValue, 0);
};