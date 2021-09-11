import { useState } from 'react';
import './ItemCount.css'

const ItemCount =  () => {
    const [count, setCount] = useState(0)

    const restarCantidad = () => {
    if (count < 1) {
        console.log('nada')
    } else {
        setCount(count-1)
    }
    }

    const sumarCantidad = () => {
    if (count > 5){
        console.log('sin stock')
    } else {
        setCount(count+1)
    }
    }

    return(
        <div className="body">
        <h3 className="subTitulo" >{count}</h3>
        <button onClick= {sumarCantidad}> + </button>
        <button onClick={ () =>  setCount (count)}> Agregar al Carrito </button>
        <button onClick= {restarCantidad}> - </button>
        {count > 5 ? <h4 className="subTitulo">Sin Stock</h4>:''}
       
  
  
      </div> 
       


    )
}



  export default ItemCount