import React from 'react';

import '../styles/components/Checkout.css';

export default function Checkout() {
  return (
    <div className="Checkout">
      <div className="Checkout-content">
        <h3>Lista de pedidos</h3>
        <div className="Checkout-item">
          <div className="Checkout-element">
            <h4>Item name</h4>
            <span>$10</span>
          </div>
          <button type="button">Eliminar</button>
        </div>
      </div>
      <div className="Checkout-sidebar">
        <h3>precio total: $10</h3>
        <button type="button">Continuar pedido</button>
      </div>
    </div>
  );
}
