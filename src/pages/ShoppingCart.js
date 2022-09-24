import './ShoppingCart.css';

const ShoppingCart = (props) => {
    const { cart, addItem, removeItem } = props;

    if (cart.length !== 0) {
        console.log('show up');
        return (
            <div className="cart-container">
                {cart.map((cartItem) => {
                    return (
                        <div key={cartItem.id} className="cart-item">
                            <h1>{cartItem.name}</h1>
                            <h1>{cartItem.amount}</h1>
                            <h1>{cartItem.price}</h1>
                            <button onClick={() => addItem(cartItem.id)}>
                                ADD ITEM
                            </button>
                            <button onClick={() => removeItem(cartItem.id)}>
                                REMOVE ITEM
                            </button>
                        </div>
                    );
                })}
            </div>
        );
    } else {
        return (
            <div className="cart-container">
                <h1>Your cart is empty, add something.</h1>
            </div>
        );
    }
};

export default ShoppingCart;
