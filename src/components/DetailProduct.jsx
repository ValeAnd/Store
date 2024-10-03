import { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { pedirItemPorId } from '../data/asyncMock';
import { CartContext } from '../context/CartContext';

const DetailProduct = () => {

    const [item, setItem] = useState(null);
    const id = useParams().id;
    const {cantidadCarrito} = useContext(CartContext);

    useEffect(() => {
        pedirItemPorId(Number(id))
        .then((res) => {
            setItem(res);
        })

    }, [id])

  return (
    <div>
        <h1>Detalle del producto</h1>
        {
            item && (
                <>
                    <Link to='/cart'>Carrito<span>{cantidadCarrito()}</span></Link>
                    <div className="detail-image">
                        <h1 className="detail-title">{item.title}</h1>
                        <img src={item.image} alt={item.title} />
                    </div>
                </>
            )
        }
    </div>
  )
}

export default DetailProduct
