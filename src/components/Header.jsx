import PropTypes from 'prop-types';
import { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Header = ({ productos, setProductos, onChange }) => {
  const [minPrice, setMinPrice] = useState(0);
  const [options, setOptions] = useState();
  const { cantidadCarrito } = useContext(CartContext);

  const handleChangeMinPrice = (event) => {
    setMinPrice(event.target.value);
    onChange((prevState) => ({
      ...prevState,
      minPrice: event.target.value,
    }));
  };

  const handleChangeCategory = (event) => {
    onChange((prevState) => ({
      ...prevState,
      category: event.target.value,
    }));
  };

  const handleChangeOptions = (event) => {
    const opcionSeleccionada = event.target.value;

    setOptions(opcionSeleccionada);
    let productosOrdenados;
    // Si coloco options no se actualiza su valor de inmediato, me toma el valor anterior
    switch (opcionSeleccionada) {
      case 'menor-mayor':
        productosOrdenados = [...productos].sort((a, b) => a.price - b.price);
        break;
      case 'mayor-menor':
        productosOrdenados = [...productos].sort((a, b) => b.price - a.price);
        break;
      default:
        productosOrdenados = [...productos].sort((a, b) => a.price - b.price);
    }
    setProductos(productosOrdenados);
  };

  return (
    <>
      <h1>Store :)</h1>
      <section className='header-container'>
        <div className="input-price">
          <label htmlFor="price">Precio desde:</label>
          <input
            type="range"
            id="price"
            name="price"
            min="0"
            max="2000"
            onChange={handleChangeMinPrice}
          />
          <span>S/{minPrice}</span>
        </div>
        <div>
          <select name="category" id="category" onChange={handleChangeCategory}>
            <option value="all">Todos</option>
            <option value="jewelery">Jewerly</option>
            <option value="electronics">Electronics</option>
          </select>
        </div>
        <div>
          <select
            name="option"
            id="options"
            value={options}
            onChange={handleChangeOptions}
          >
            <option value="a-z">A-Z</option>
            <option value="z-a">Z-A</option>
            <option value="mayor-menor">Precios de mayor a menor</option>
            <option value="menor-mayor">Precios de menor a mayor</option>
          </select>
        </div>
        <Link to='/cart'>
          Carrito<span>{cantidadCarrito()}</span>
        </Link>
      </section>
    </>
  );
};

Header.propTypes = {
  productos: PropTypes.array.isRequired,
  setProductos: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Header;
