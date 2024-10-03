// import { useState } from "react"

// export function UseFilter () {
//   const [filters , setFilters] = useState({
//     category : 'all',
//     minPrice : 0, 
//   })

//   const filtrarProductos = (productos) => {
//     return productos.filter(product => {
//        return product.price >= filters.minPrice && 
//        (
//         filters.category === 'all' ||
//         product.category ===  filters.category
//        )
//     })
//   }

//   return {filters , setFilters ,filtrarProductos}

// }