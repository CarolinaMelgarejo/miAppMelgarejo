import { useState, useEffect } from 'react'
import './Item.css'

const productos = [
    {id:'01', producto:'Escritorio Sunny', descripcion:'',precio:'$1500', stock:'3'},
    {id:'02', producto:'Silla Acapulco', descripcion:'',precio:'$1500', stock:'5'},
    {id:'03', producto:'Mueble Televisor ', descripcion:'',precio:'$1500', stock:'3'},
    {id:'04', producto:'Mesa de luz Nuvia' , descripcion:'',precio:'$1500', stock:'2'},
    {id:'05', producto:'Espejo Tokio', descripcion:'',precio:'$1500', stock:'7'},
    {id:'06', producto:'Velador Ana', descripcion:'',precio:'$1500', stock:'5'},
    {id:'07', producto:'Mesa IV', descripcion:'',precio:'$1500', stock:'5'},
    {id:'08', producto:'Escritorio Tomas', descripcion:'',precio:'$1500', stock:'8'},
    {id:'09', producto:'Sillon Rayon', descripcion:'',precio:'$1500', stock:'6'},
    {id:'10', producto:'Silla Number', descripcion:'',precio:'$1500', stock:'4'}
]

function getList() {

    return new Promise((resolve, reject) =>{
        setTimeout( () => resolve(productos), 2000)
    } )
}

const Item =() =>{
    const [ listProducto, setListProducto] = useState([] )


   useEffect (() =>{
        const list= getList()

        list.then( list => {
            setListProducto(list)

        })
    })

    return (
        <div className="body">
        <ul className="listaProducto">
            { listProducto.map(elemento => <li className="lista" key={elemento.id} > {elemento.producto}</li>)}
        </ul>
        </div>
    )
}

export default Item



