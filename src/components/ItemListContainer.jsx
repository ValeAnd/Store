import { useState, useEffect } from "react"
import { pedirProductos } from "../data/asyncMock"
import './styles.css'
import ItemList from "./ItemList"
import Header from "./Header"


const ItemListContainer = () => {

    const [productos, setProductos] = useState([]);
    const [loader, setLoader] = useState(true);
    const [filters, setFilters] = useState({
        category : 'all',
        minPrice : 0
    })

    useEffect(() => {
        pedirProductos()
            .then((res) => {
                setLoader(true);
                setProductos(res);
            })
            .catch((error) => {
                console.error("Error al obtener los productos", error)
            })
            .finally(() => {
                setLoader(false)
            })
    }, [])

   const filtrarProductos = (productos) => {
        return productos.filter((producto) => {
            return producto.price >= filters.minPrice &&
            (filters.category === 'all' || producto.category === filters.category)
        })
   }


   const filtradoProductos = filtrarProductos(productos);

  return (
    <div className="container">
        <Header productos = {productos} onChange = {setFilters} setProductos = {setProductos}/>
        <ItemList 
            productos = {filtradoProductos}
            loader = {loader} 
        />   
      
    </div>
  )
  
}

export default ItemListContainer
