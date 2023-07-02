import { useState, useEffect } from "react";
import { getProductsOtros } from "../components/asyncMock";
import ItemDetail from "../components/itemDetail";


const Otros  = () => {
    const [products, setProducts] = useState ([])

    useEffect(() => {
        getProductsOtros().then(res =>{
            console.log(res)
            setProducts(res)
        })
    },[])

    return(
        <div className="mx-auto mt-3">
            <br></br>
            
            {products.map(product => (

<ItemDetail
  key={product.id}
  name={product.name}
  size={product.size}
  image={product.image}
  category={product.category}
  made={product.made}
  id={product.id}
/>
))}
        </div>
    )
}
export default Otros;