import Item from '../Item/Item.js'
import { useState, useEffect} from 'react'
import { useParams } from "react-router-dom";


const productos = [
    {id:'01', name:'Escritorio Sunny', descripcion:'',precio:'$1500', stock:'3'},
    {id:'02', name:'Silla Acapulco', descripcion:'',precio:'$1500', stock:'5'},
    {id:'03', name:'Mueble Televisor ', descripcion:'',precio:'$1500', stock:'3'},
    {id:'04', name:'Mesa de luz Nuvia' , descripcion:'',precio:'$1500', stock:'2'},
    {id:'05', name:'Espejo Tokio', descripcion:'',precio:'$1500', stock:'7'},
    {id:'06', name:'Velador Ana', descripcion:'',precio:'$1500', stock:'5'},
    {id:'07', name:'Mesa IV', descripcion:'',precio:'$1500', stock:'5'},
    {id:'08', name:'Escritorio Tomas', descripcion:'',precio:'$1500', stock:'8'},
    {id:'09', name:'Sillon Rayon', descripcion:'',precio:'$1500', stock:'6'},
    {id:'10', name:'Silla Number', descripcion:'',precio:'$1500', stock:'4'}
]

function getProducts() {

    return new Promise((resolve, reject) =>{
        setTimeout( () => resolve(productos), 1000)
    }  )
}

const Product = () => {
  const { name } = useParams()
  const [products, setProduct] = useState(undefined)

  useEffect(() => {
    const listProducts = getProducts()
    listProducts.then(result => {
      const products = result.find(prod => prod.name === name)
      setProduct(productos)
    })
    return (() => {
      setProduct(undefined)
    })
  }, [name])
    

  return (
      <Item item={productos} />
  )
}


export default Product;



