import './Home.css';
import { Link } from 'react-router-dom';
const Home = () => {
    return (
        <div className="homepage-container">
            <div className="homepage-text">
                <h1>IPhone 14</h1>
                <p>Now available for pre-order</p>
                <button className="shop-now">
                    <Link to="/shop">SHOP NOW</Link>
                </button>
            </div>
        </div>
    );
};

export default Home;
