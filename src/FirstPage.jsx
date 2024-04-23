// FirstPage.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ReactGA from 'react-ga';

const FirstPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    ReactGA.event({
      category: 'Page Interaction',
      action: 'View First Page'
    });
  }, []);

  const handleAddToCart = () => {
    ReactGA.event({
      category: 'Conversion',
      action: 'Add to Cart'
    });
  };

  const handleCheckout = () => {
    ReactGA.event({
      category: 'Conversion',
      action: 'Checkout'
    });
  };

  return (
    <div>
      <h2>Welcome to the website</h2>
      <div>
        <button onClick={() => navigate('/second')}>Go to second page</button>
        <button onClick={handleAddToCart}>Add to cart</button>
        <button onClick={handleCheckout}>Checkout</button>
      </div>
    </div>
  );
};

export default FirstPage;
