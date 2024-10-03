/* eslint-disable react/prop-types */
import { createContext, useState } from "react"

export const CartContext = createContext();

export const CartProvider = ({children}) => {

    const [carrito, setCarrito] = useState([]);

    const handleAgregar = (item , cantidad)  => {
        const itemAgregado = {...item, cantidad}
        const carritoActualizado = [...carrito]
        const itemEnCarrito = carritoActualizado.find((producto) => producto.id === item.id);
        
        if (itemEnCarrito) {
            itemEnCarrito.cantidad += cantidad;
        }else{
            carritoActualizado.push(itemAgregado);
        }
        setCarrito(carritoActualizado);
        console.log(carritoActualizado)
    };

    const cantidadCarrito = () => {
        return  carrito.reduce((acu, producto) => acu + producto.cantidad, 0);
    }

    const vaciarCarrito = () => {
        return setCarrito([]);
    }

    const handleEliminar = (id) => {
        const carritoActualizado = carrito.filter((producto) => producto.id !== id);
        return setCarrito(carritoActualizado);
    }

    const totalCarrito = () => {
        return carrito.reduce((acc, producto) => acc + ( producto.cantidad * producto.price ) , 0);
    }

  return (
    <CartContext.Provider value={ { handleAgregar , carrito , cantidadCarrito, vaciarCarrito, handleEliminar, totalCarrito } }>
        {children}
    </CartContext.Provider>
  );
};
