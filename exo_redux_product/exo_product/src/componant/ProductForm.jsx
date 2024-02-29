import { useRef } from "react";
import {useDispatch} from "react-redux"
import { addProduct } from "./ProductSlice";


const ProductForm = () => {
  const nameRef = useRef()
  const priceRef = useRef()
  const dispatch = useDispatch()

  const handleSubmit = (event) => {
    const productName = nameRef.current.value;
    const productPrice = priceRef.current.value;
    event.preventDefault()
    dispatch(addProduct({ name: productName, price: productPrice }))
    event.target.reset();
  }

  return (  
    <>
    
      <form onSubmit={handleSubmit}>
      <h2 className="titleForm">Ajouter un produit</h2>
        <label htmlFor="">Nom du produit :
            <input type="text" ref={nameRef} />
        </label>
        <label htmlFor="">Prix du produit :
            <input type="text" ref={priceRef} />
        </label>
        <button className="btnForm">Valider</button>

      </form>
    </>
  );
}
 
export default ProductForm;