import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = (props) => {
    const { quantity } = props;
    return (
        <div className="navbar">
            <ul className="navbar-links">
                <div className="navbar-left">
                    <Link to="/">
                        <li className="navbar-logo">Shopping Website</li>
                    </Link>
                </div>
                <div className="navbar-right">
                    <Link to="/shop">
                        <li className="shop-btn">Shop</li>
                    </Link>
                    <div className="btn-cart">
                        <Link to="/cart">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="32"
                                width="32"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                            >
                                <path d="M16 6v-2c0-2.209-1.791-4-4-4s-4 1.791-4 4v2h-5v18h18v-18h-5zm-7-2c0-1.654 1.346-3 3-3s3 1.346 3 3v2h-6v-2zm10 18h-14v-14h3v1.5c0 .276.224.5.5.5s.5-.224.5-.5v-1.5h6v1.5c0 .276.224.5.5.5s.5-.224.5-.5v-1.5h3v14z"></path>
                            </svg>
                            <p className="quantity-text">({quantity} items)</p>
                        </Link>
                    </div>
                </div>
            </ul>
        </div>
    );
};

export default Nav;
