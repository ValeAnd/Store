import Item from "./Item";
import PropTypes from 'prop-types';

const ItemList = ({ productos, loader }) => {
  let content;

  if (loader) {
    content = <p>Cargando productos</p>;
  } else if (productos.length > 0) {
    content = productos.map((producto) => (
      <Item key={producto.id} producto={producto} />
    ));
  } else {
    content = <p>No hay productos disponibles</p>;
  }

  return (
    <div>
      <div className="products-container">
        {content}
      </div>
    </div>
  );
};

ItemList.propTypes = {
  productos: PropTypes.array.isRequired,
  loader: PropTypes.bool.isRequired,
};

export default ItemList;
