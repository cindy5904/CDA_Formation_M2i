import { useSelector } from "react-redux";
import ProductItem from "./ProductItem";


const ProductList = () => {
  const products = useSelector(state => state.product.products)

  return ( 
    <>
        <div className="container">
            <div className="card">
                {
            products.map((product, index) => (
                <ProductItem product={product} key={index}/>
            ))
            
      }
            </div>
        </div>
     
    </>
   );
}
 
export default ProductList;