import './ShoppingCart.css';
import { Link } from 'react-router-dom';
const ShoppingCart = (props) => {
    const { cartValue, cart, addItem, removeItem } = props;

    if (cart.length !== 0) {
        return (
            <div className="cart-container">
                <div className="cart">
                    <h1>Your Cart</h1>
                    {cart.map((cartItem) => {
                        return (
                            <div key={cartItem.id} className="cart-item">
                                <img
                                    className="cart-item-image"
                                    src={cartItem.img}
                                    alt=""
                                />
                                <div className="cart-item-info">
                                    <p className="cart-item-name">
                                        {cartItem.name}
                                    </p>
                                    <p className="cart-item-price">
                                        ${cartItem.price}.00
                                    </p>
                                </div>

                                <div className="quantity-selector">
                                    <button
                                        className="quantity-btn"
                                        onClick={() => addItem(cartItem.id)}
                                    >
                                        +
                                    </button>
                                    <h1>{cartItem.amount}</h1>

                                    <button
                                        className="quantity-btn"
                                        onClick={() => removeItem(cartItem.id)}
                                    >
                                        -
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                    <p className="cart-value">Total: ${cartValue}.00</p>
                    <button
                        onClick={() => alert('Thanks for shopping!')}
                        className="checkout-button"
                    >
                        <Link to="/">Checkout</Link>
                    </button>
                    <button className="return-button">
                        <Link to="/shop">Return To Store</Link>
                    </button>
                </div>
            </div>
        );
    } else {
        return (
            <div className="cart-container">
                <div className="cart">
                    <h1 className="cart-warning">
                        Your cart is empty, add something.
                    </h1>
                    <button className="return-button">
                        <Link to="/shop">Return To Store</Link>
                    </button>
                </div>
            </div>
        );
    }
};

export default ShoppingCart;
