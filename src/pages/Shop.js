import './Shop.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
const Shop = () => {
    useEffect(() => {
        fetchAllItems();
    }, []);

    const [items, setItems] = useState([]);

    const fetchAllItems = async () => {
        const data = await fetch(
            'https://api.escuelajs.co/api/v1/products'
        ).then((response) => response.json());
        setItems(data);
    };

    return (
        <div className="shopping-container">
            {items.map((item) => {
                return (
                    <h1 key={item.id}>
                        <Link to={`/shop/${item.id}`}>{item.title}</Link>
                    </h1>
                );
            })}
        </div>
    );
};

export default Shop;
