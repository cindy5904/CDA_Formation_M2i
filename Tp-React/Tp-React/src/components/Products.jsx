import React from 'react';
import { useState } from 'react';
import products from '../products';
import Cart from '../components/Cart'
import '../index.css'; 
import Header from './Header';
import useCartState from './CartState';


const Products = () => {
    const { addToCart } = useCartState();
   
    return (
      <div>
        <Header />
        <h2>Liste des Produits</h2>
        <div className="container">
          {products.map(product => (
            <div key={product.id} className="card">
              <div className="cardContent">
                <strong>{product.name}</strong>
                <p>{product.description}</p>
                <p>Prix : {product.price} €</p>
                <div className="btn">
                  <button className="button" onClick={() => addToCart(product)}>
                    Ajouter au panier
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  export default Products;
