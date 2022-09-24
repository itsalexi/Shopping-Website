import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Nav from './components/Nav';
import ShoppingCart from './pages/ShoppingCart';
import ItemDetails from './components/ItemDetails';
import { useEffect, useState } from 'react';

const App = () => {
    const [cart, setCart] = useState([]);
    const [quantity, setQuantity] = useState(0);
    const [cartValue, setCartValue] = useState(0);

    const addQuantity = (id) => {
        const currentCart = [...cart];
        const cartItem = currentCart.find((obj) => obj.id === Number(id));
        cartItem.amount++;
        setQuantity(quantity + 1);
        setCart(currentCart);
    };

    useEffect(() => {
        let newCartValue = cart.reduce(
            (n, { amount, price }) => n + amount * price,
            0
        );
        setCartValue(newCartValue);
    }, [cart]);

    useEffect(() => {
        console.log(cartValue);
    }, [cartValue]);

    const removeQuantity = (id) => {
        const currentCart = [...cart];
        const cartItem = currentCart.find((obj) => obj.id === Number(id));

        if (cartItem.amount === 1) {
            console.log('is this getting triggered?');
            let newCart = currentCart.filter((obj) => obj.id !== Number(id));
            console.log(newCart);
            setCart(newCart);
            setQuantity(quantity - 1);
        } else {
            setQuantity(quantity - 1);
            cartItem.amount--;
            setCart(currentCart);
        }
    };

    const addCart = (item) => {
        const currentCart = [...cart];
        const id = item.id;
        let isCartItem = currentCart.find((obj) => obj.id === Number(id));

        if (isCartItem) {
            isCartItem.amount++;
            setQuantity(quantity + 1);
            setCart(currentCart);
        } else {
            let newCartItem = {};
            let newCart;
            newCartItem = {
                id: item.id,
                name: item.title,
                price: item.price,
                img: item.images[0],
                amount: 1,
            };
            newCart = currentCart.concat(newCartItem);
            setCart(newCart);
            setQuantity(quantity + 1);
        }
    };

    return (
        <BrowserRouter>
            <Nav quantity={quantity} />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/shop" element={<Shop />}></Route>
                <Route
                    path="/cart"
                    element={
                        <ShoppingCart
                            addItem={addQuantity}
                            removeItem={removeQuantity}
                            cart={cart}
                            cartValue={cartValue}
                        />
                    }
                ></Route>
                <Route path="/shop/:category" element={<Shop />}></Route>
                <Route
                    path="/shop/products/:id"
                    element={<ItemDetails addItem={addCart} />}
                ></Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
