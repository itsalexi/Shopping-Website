import './ShoppingCart.css';

const ShoppingCart = (props) => {
    const { cart, addItem, removeItem } = props;

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
};

export default ShoppingCart;
