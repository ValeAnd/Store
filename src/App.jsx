
import { Cart } from "./components/Cart"
import DetailProduct from "./components/DetailProduct"
import ItemListContainer from "./components/ItemListContainer"
import { CartProvider } from "./context/CartContext"
import { BrowserRouter, Route, Routes } from "react-router-dom"

function App() {

  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path= "/" element = {<ItemListContainer />}/>
          <Route path="/cart" element= {<Cart />} > </Route>
          <Route path="/producto/:id" element= {<DetailProduct />}></Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App
