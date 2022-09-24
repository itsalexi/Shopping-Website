import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Nav from './components/Nav';
import ItemDetails from './components/ItemDetails';
import { useEffect, useState } from 'react';

const App = () => {
    const [cart, setCart] = useState([]);

    const addCart = (item) => {
        let newCart = cart.concat(item);
        setCart(newCart);
    };

    useEffect(() => {
        console.log(cart);
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
