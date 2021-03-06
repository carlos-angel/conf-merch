import React, { useRef, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';

import AppContext from '../context/AppContext';
import MetaHead from '../components/MetaHead';

import '../styles/components/Information.css';

export default function Information() {
  const {
    state: { cart },
    addToBuyer,
  } = useContext(AppContext);
  const history = useHistory();
  const form = useRef(null);

  const handleSubmit = () => {
    const formData = new FormData(form.current);
    const buyer = {
      name: formData.get('name'),
      email: formData.get('email'),
      address: formData.get('address'),
      apto: formData.get('apto'),
      city: formData.get('city'),
      country: formData.get('country'),
      sate: formData.get('sate'),
      cp: formData.get('cp'),
      phone: formData.get('phone'),
    };

    addToBuyer(buyer);
    history.push('/checkout/payment');
  };

  return (
    <>
      <MetaHead
        title="Pedido"
        description="Realiza tu pedido y consigue todos tus productos favoritas antes de que se agoten"
        image="https://bucket-public-carlos-angel.s3.us-east-2.amazonaws.com/platziconf/logo.pagina-web.png"
        url="https://conf-merch-b592f.firebaseapp.com/checkout/information"
      />
      <div className="Information">
        <div className="Information-content">
          <div className="Information-head">
            <h2>Información de contacto</h2>
          </div>
          <div className="Information-form">
            <form ref={form} method="post">
              <input type="text" name="name" placeholder="Nombre completo" />
              <input
                type="email"
                name="email"
                placeholder="Correo electrónico"
              />
              <input type="text" name="address" placeholder="Dirección" />
              <input type="text" name="apto" placeholder="Apto" />
              <input type="text" name="city" placeholder="Ciudad" />
              <input type="text" name="country" placeholder="País" />
              <input type="text" name="state" placeholder="Estado" />
              <input type="number" name="cp" placeholder="Código postal" />
              <input type="text" name="phone" placeholder="Teléfono" />
            </form>
          </div>
          <div className="Information-buttons">
            <div className="Information-back">
              <Link to="/checkout">Regresar</Link>
            </div>
            <div className="Information-next">
              <button type="button" onClick={handleSubmit}>
                Pagar
              </button>
            </div>
          </div>
        </div>
        <div className="Information-sidebar">
          <h3>Pedido:</h3>
          {cart.map((item) => (
            <div className="Information-item" key={item.id}>
              <div className="Information-element">
                <h4>{item.title}</h4>
                <span>$ {item.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
