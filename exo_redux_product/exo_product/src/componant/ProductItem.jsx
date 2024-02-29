import { useDispatch } from "react-redux";
import { deleteProduct, updateProduct } from "./ProductSlice";
import { useState } from "react";

const ProductItem = (props) => {
  const product = props.product
  const dispatch = useDispatch()
  const [isEditing, setEditing] = useState(false);
  const [editedName, setEditedName] = useState(product.name);
  const [editedPrice, setEditedPrice] = useState(product.price);

  const clickUpdate = () => {
    dispatch(updateProduct({ id: product.id, updatedProduct: { name: editedName, price: editedPrice } }));
    setEditing(false);
  };

  const clickCancel = () => {
    setEditing(false);
  };
  return (  
    <div className="card">
    {isEditing ? (
      <div className="container-item">
        <input type="text" value={editedName} onChange={(e) => setEditedName(e.target.value)} className="inputName" />
        <input type="text" value={editedPrice} onChange={(e) => setEditedPrice(e.target.value)} className="inputPrice"/>
       <div className="btn">
       <button onClick={clickUpdate} className="valide">Valider</button>
        <button onClick={clickCancel} className="annule">Annuler</button>
       </div>
      </div>
    ) : (
      <div className="container-item">
        <p className="name">{product.name}</p>
        <p className="price"><strong id="priceStrong">Prix: </strong> {product.price} €</p>
        <div className="btn">
          <button onClick={() => setEditing(true)} className="modify">Modifier</button>
          <button onClick={() => dispatch(deleteProduct(product.id))} className="delete">Supprimer</button>
        </div>
       
      </div>
      
    )}
  </div>
  );
}
 
export default ProductItem;