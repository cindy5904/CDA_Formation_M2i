import React from 'react';
import { useEffect } from 'react';
import '../index.css'; 
import useCartState from './CartState';

const Cart = ({ onClose }) => {
    const { cart, removeFromCart, calculateTotal } = useCartState()
  
    return (
      <div className="modal">
        <div className="card">
          <div className="cardContent">
            <h2>Panier</h2>
            {cart.length === 0 ? (
              <p>Le panier est vide.</p>
            ) : (
              <div>
                <ul>
                  {cart.map(item => (
                    <li key={item.id}>
                      <strong>{item.name}</strong>
                      <p>Quantité: {item.quantity}</p>
                      <p>Prix unitaire: {item.price} €</p>
                      <button onClick={() => removeFromCart(item.id)}>
                        Supprimer
                      </button>
                    </li>
                  ))}
                </ul>
                <p>Total du panier: {calculateTotal()} €</p>
              </div>
            )}
            <button onClick={onClose}>Fermer</button>
          </div>
        </div>
      </div>
    );
  };

export default Cart;
