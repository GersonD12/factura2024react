import { useState } from "react";

export const FormItemsView = ({handler}) => {

    const [formItemsState, setFormItemsState] = useState({
        product: '',
        price: '',
        quantity: '',
    });
    //estraccion de variables para despues automatizar el ingreso
    const { product, price, quantity } = formItemsState;

    //Funcion que captura los datos mietras se ingresan en el formulario
    const onInputChange = ({ target: { name, value } }) => {
        //.log(name); 
        console.log(value);
        // console.log(formItemsState)
        //Ingresar los datos en las variables de una manera optima
        setFormItemsState({
            ...formItemsState,
            [name]: value
        });
        //En name [] es para ser interpretado como una clave dinamica
        //porque de lo cntrario lo entenderia como una literal, siendo name el nombre del campo que siempre intentaria ingresar
    }

    //Validacion y almacenamiento de la nueva informacion del formulario
    const onInvoiceItemSubmint = (event) => {
        //permite que no se actualice la pagina
        event.preventDefault();
        if (product.trim().length < 1) return;
        if (price.trim().length < 1) return;
        if (isNaN(price.trim())) {
            alert('Error el precio no es un numero');
            return;
        };
        if (quantity.trim().length < 1) {
            alert('Error la cantidad tiene que ser mayor 0');
            return
        };
        if (isNaN(quantity.trim())) {
            alert('La cantidad no es un numero');
            return
        };
        //utilizacion de informacin capturada para ser enviada almacenda de esta manera se mostrara en la tabla
        handler(formItemsState);
        setFormItemsState({
            product: '',
            price: '',
            quantity: '',
        });
    }
    //se puede poner un alias el alias es nameClient
    return (
        <>
            <form className="w-50" action="" onSubmit={onInvoiceItemSubmint}>
                <input
                    type="text"
                    name="product"
                    value={product}
                    placeholder="Producto"
                    className="form-control m-3"
                    onChange={onInputChange}
                ></input>
                <input
                    type="text"
                    name="price"
                    value={price}
                    placeholder="Precio"
                    className="form-control m-3"
                    onChange={event => {
                        onInputChange(event);
                    }}
                ></input>
                <input
                    type="number"
                    value={quantity}
                    name="quantity"
                    placeholder="Cantidad"
                    className="form-control m-3"
                    onChange={onInputChange}
                ></input>
                <button type="submit" className="btn btn-primary m-3">Agregar item</button>
            </form>
        </>
    )
}