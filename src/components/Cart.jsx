import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import './cart.css'
import { Link } from "react-router-dom";

export function Cart () {
    const { carrito, vaciarCarrito, handleEliminar, cantidadCarrito, totalCarrito} = useContext(CartContext);

  return (
    <>
        <h1>Carrito</h1>
        <p>Cart:{cantidadCarrito()}</p>
        <Link to= {'/'}>Volver</Link>
        <div className="container-cart">
            {
                carrito.length > 0 && (carrito.map((producto) => (
                    <div key={producto.id} className="cart-product">
                        <img src={producto.image} alt={producto.title}/>
                        <span>{producto.title}</span>
                        <h5>{producto.price} - Cantidad: {producto.cantidad}</h5>
                        <h5>Total : {producto.price * producto.cantidad}</h5>
                        <button onClick={() => handleEliminar(producto.id)}>Borrar Producto</button>
                    </div>
                )))
            }
        </div>
        <div>
            
        </div>
        <div>
            {/*Eso sirve para que cuando funciones la funcion solo cuando se produce el evento clic
               en lugar de ejectuarse cuando el componente se renderiza
            */}
            {
                carrito.length > 0 ? (
                    <>
                        <h3>total : {totalCarrito()}</h3>
                        <button onClick={() => vaciarCarrito()}>Vaciar Carrito</button>
                    </>
                    
                ) : (
                    <p>Carrito vacio :( </p>
                )
            }
        </div>
    </>
  )
}