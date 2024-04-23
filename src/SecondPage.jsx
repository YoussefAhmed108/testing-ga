// SecondPage.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ReactGA from 'react-ga';

const SecondPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    ReactGA.event({
      category: 'Page Interaction',
      action: 'View Second Page'
    });
  }, []);

  return (
    <div>
      <h2>Welcome to the second page</h2>
      <div>
        <button onClick={() => navigate('/')}>Go to first page</button>
      </div>
    </div>
  );
};

export default SecondPage;
