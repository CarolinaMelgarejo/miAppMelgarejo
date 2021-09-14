import { useState, useEffect } from 'react'
import './Item.css'


const Item = ({ item }) => {
    
    if(!item) {
        return <h1>Loading</h1>
    }

    return (
        <div className="card">
            <img src={!item.img} alt={!item.name}/>
            <h3>Nombre:{!item.name}</h3>
            <p>Precio: <strong>{!item.precio}</strong></p>
        </div>
    )
}

export default Item