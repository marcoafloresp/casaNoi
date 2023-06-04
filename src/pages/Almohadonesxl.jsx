import { useState, useEffect } from "react";
import { getProductsxl } from "../components/asyncMock";
import ItemDetail from "../components/itemDetail";
import image from "../elements/inicioimagenbnm.webp";

const Almohadonesxl  = () => {
    const [products, setProducts] = useState ([])

    useEffect(() => {
        getProductsxl().then(res =>{
            console.log(res)
            setProducts(res)
        })
    },[])

    return(
        <div className="mx-auto mt-3" style={{width: '100%',backgroundImage: `url(${image})`,
        backgroundSize: "cover", backgroundAttachment: "fixed" }} >
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
export default Almohadonesxl;