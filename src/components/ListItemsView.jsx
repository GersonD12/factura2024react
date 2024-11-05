import PropTypes from "prop-types"; 
import { RowItemView } from "./RowItemView";
export const ListItemsView = ({ items, title, handlerDeleteItem  }) => {
    return (
        <>
            <h4>{title}</h4>

            <table className="table table-hover table-bordered  ">
                <thead>
                    <tr className="table-dark">
                        <th>Producto</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        <th>Elimnar</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        
                        items.map(({ id, product, price, quantity }) => (
                            //id solo para renderizar cada elemento
                            // La key sigue aquí para React
                            <RowItemView 
                            key={id} 
                            id={id}
                            product={product} 
                            price={price} 
                            quantity={quantity}
                            handlerDeleteItem = {id => handlerDeleteItem(id)}
                            ></RowItemView>
                        )
                    )
                    }
                </tbody>
            </table>
        </>
    )
}

ListItemsView.propTypes ={
    title:PropTypes.string.isRequired,
    items: PropTypes.array.isRequired
}