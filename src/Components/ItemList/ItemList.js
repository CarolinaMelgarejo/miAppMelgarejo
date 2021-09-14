import Item from '../Item/Item.js'

const ItemList = ({ productos }) => {

    return (
        <div>  
            {productos.map(prod => {
                return <Item key={prod.id} item={prod}/>
            })}
        </div>
    )
}

export default ItemList