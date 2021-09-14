import { useState, useEffect } from 'react'
import ItemList from "./Components/ItemList/ItemList";

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

function getProducts() {

    return new Promise((resolve, reject) =>{
        setTimeout( () => resolve(productos), 2000)
    } )
}


const Products = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
      const listProducts = getProducts()
      listProducts.then(result => setProducts(result))
      return (() => {
        setProducts([])
      })
    }, [])

    if(products.length === 0) {
      return <h3>Loading</h3>
    }
    
    return (
      <div>
        <h1>Products</h1>
        <ItemList products={products}/>
      </div>
    );
  }
  
  export default Products;