import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Nav from './components/Nav';
import ItemDetails from './components/ItemDetails';

const App = () => {
    return (
        <BrowserRouter>
            <Nav />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/shop" exact element={<Shop />}></Route>
                <Route path="/shop/:id" element={<ItemDetails />}></Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
