import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Nav from './components/Nav';
import ItemDetails from './components/ItemDetails';
import { useEffect, useState } from 'react';

const App = () => {
    const [cart, setCart] = useState([]);

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

    useEffect(() => {
        console.log('react is reacting:', cart);
    }, [cart]);

    return (
        <BrowserRouter>
            <Nav />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/shop" element={<Shop />}></Route>
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
