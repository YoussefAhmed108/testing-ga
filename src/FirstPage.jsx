import React from 'react'; // Import the external CSS file
import { useNavigate } from 'react-router-dom';

const FirstPage = ({ block }) => {
    const navigate = useNavigate()
    return (
        <div>
            <h2>Welcome to the website</h2>
            <div>
                <button onClick={() => navigate('/second')}>Go to second(2) page</button>
                <button>Add to cart</button>
                <button>Checkout</button>
            </div>
        </div>
    );
};

export default FirstPage;
