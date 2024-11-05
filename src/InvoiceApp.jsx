import { useEffect, useState } from "react"
import { getInvoices, calculateTotal } from "./services/getInvoices"
import { InvoiceView } from "./components/InvoiceView"
import { ClientView } from "./components/ClientView"
import { CompanyView } from "./components/CompanyView"
import { ListItemsView } from "./components/ListItemsView"
import { TotalView } from "./components/TotalView"
import { FormItemsView } from "./components/FormItemsView"


const invoiceInitial = {
    id: 0,
    name: "",
    client: {
        name: "",
        lastname: "",
        address: {
            country: "",
            city: "",
            street: "",
            number: 0
        }
    },
    items: [],
    company: {
        name: "",
        fisicalNumber: 0
    }
};

export const InvoiceApp = () => {
    const [activeForm, setActiveForm] = useState(false);
    const [total, setTotal] = useState(0);
    const [invoice, setInvoice] = useState(invoiceInitial);
    const [items, setItems] = useState([]);
    const [container, setContainer] = useState(5);
    const { id, name, client, company } = invoice;

    useEffect(() => {
        const data = getInvoices();
        setInvoice(data);
        setItems(data.items);
        console.log(data)
    }, []);

    useEffect(() => {
        setTotal(calculateTotal(items));
    }, [items]);


    // Esta funcion se envia a FormItemsView, pero su proposito es ingresar un nuevo proucto
    //Ademas que al actualizar los items se actuliza el total gracias al useEffect
    const handlerAddInvoiceItemSubmint = ({ product, price, quantity }) => {
        //agrega nuevos productos a la lista
        setItems([...items, {
            id: container,
            product: product.trim(),
            price: + price.trim(),
            quantity: parseFloat(quantity.trim())
        }])
        //aumenta el contador para agregar a la key de los elementos
        setContainer(container + 1);
    }
    const handlerDeleteItem = (id) => {
        //filter devuelve un arreglo filtrado, no incluyendo el id
        // se pregunta y se dice que sea distinto al id
        setItems(items.filter(item =>item.id !== id));
    }

    const onActiveForm = () => {
        setActiveForm(!activeForm);
    }
    return (
        <>
            <div className="container">
                <div className="card my-3">
                    <div className=" card-header">
                        Ejemplo factura
                    </div>
                    <div className="card-body">
                        {/* Ecabezado de la factura */}
                        <InvoiceView id={id} name={name}></InvoiceView>
                        <div className="row my-3">
                            <div className="col">
                                <ClientView title="Datos del cliente" client={client}></ClientView>
                            </div>
                            <div className="col">
                                <CompanyView title="Datos de la empresa" company={company}></CompanyView>
                            </div>
                        </div>
                        {/* id es el que recibimos del hijo y se lo pasamos al padre */}
                        <ListItemsView title="Productos de la factura" items={items} handlerDeleteItem ={id => handlerDeleteItem (id)}></ListItemsView>
                        <TotalView total={total}></TotalView>
                        <button className="btn btn-secondary"
                            onClick={onActiveForm }
                        >{!activeForm? 'Agregar item':'Cerrar formulario'}</button>
                        {
                            // Esta es una forma de hacer una condicion pero tambien podria ser de la manera en que se cambia de nombre al boton
                            !activeForm || <FormItemsView handler={(newItems) => handlerAddInvoiceItemSubmint(newItems)}></FormItemsView>
                        }

                    </div>
                </div>
            </div>
        </>
    )
}

//se puede poner un alias el alias es nameClient
// const onProductChange =({target})=>{
//     setProductValue(target.value);
// }
// const onPriceChange = ({target})=>{
//     setPriceValue(target.value);
// };
// const onQuantityChange = ({target})=>{
//     setQuantityValue(target.value);
// };