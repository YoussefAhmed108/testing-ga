import { useNavigate } from "react-router-dom";

const SecondPage = ({ block }) => {
    const navigate = useNavigate()
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
