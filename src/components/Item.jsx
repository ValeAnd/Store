import { useContext, useState } from 'react';  
import PropTypes from 'prop-types';  
import { CartContext } from './CartContext'; 
import { Link } from 'react-router-dom';  

const Item = ({ producto }) => {  
  const { handleAgregar } = useContext(CartContext);  
  const [count, setCount] = useState(0);  

  const handleAdd = () => {  
    if (count < producto.stock) {  
      setCount(count + 1);  
    }  
  };  

  const handleRest = () => {  
    if (count > 0) {  
      setCount(count - 1);  
    }  
  };  

  const agregarAlCarrito = () => {  
    handleAgregar(producto, count);  
  };  

  return (  
    <div className="product-content">  
      <img src={producto.image} alt={producto.title} className="product-img" />  
      <div className="product-text">  
        <strong>{producto.title}</strong>  
        <h4>${producto.price}</h4>  
      </div>  
      <div className="detail-count">  
        <button onClick={handleRest}>-</button>  
        <span>{count}</span>  
        <button onClick={handleAdd}>+</button>  
      </div>  
      <button onClick={agregarAlCarrito}>Agregar al Carrito</button>  
      <Link to={`/producto/${producto.id}`}>  
        <button>Ver más</button>  
      </Link>  
    </div>  
  );  
};  

Item.propTypes = {  
  producto: PropTypes.shape({  
    id: PropTypes.string.isRequired,  
    title: PropTypes.string.isRequired,  
    image: PropTypes.string.isRequired,  
    price: PropTypes.number.isRequired,  
    stock: PropTypes.number.isRequired,  
  }).isRequired,  
};  

export default Item;