import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Nav from './components/Nav';
import ShoppingCart from './pages/ShoppingCart';
import ItemDetails from './components/ItemDetails';
import { useEffect, useState } from 'react';

const App = () => {
    const [cart, setCart] = useState([]);

    const addQuantity = (id) => {
        const currentCart = [...cart];
        const cartItem = currentCart.find((obj) => obj.id === Number(id));
        cartItem.amount++;
        setCart(currentCart);
    };

    const removeQuantity = (id) => {
        const currentCart = [...cart];
        const cartItem = currentCart.find((obj) => obj.id === Number(id));

        if (cartItem.amount === 1) {
            console.log('is this getting triggered?');
            let newCart = currentCart.filter((obj) => obj.id !== Number(id));
            console.log(newCart);
            setCart(newCart);
        } else {
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
            setCart(currentCart);
        } else {
            let newCartItem = {};
            let newCart;
            newCartItem = {
                id: item.id,
                name: item.title,
                price: item.price,
                amount: 1,
            };
            newCart = currentCart.concat(newCartItem);
            setCart(newCart);
        }
    };

    // useEffect(() => {
    //     console.log('react is reacting:', cart);
    // }, [cart]);

    return (
        <BrowserRouter>
            <Nav />
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
