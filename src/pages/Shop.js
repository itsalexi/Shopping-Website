import './Shop.css';
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
const Shop = () => {
    const [items, setItems] = useState([]);
    const [categories, setCategories] = useState([]);

    const params = useParams();

    useEffect(() => {
        setItems([]);
        if (!params['category']) {
            fetchAllItems();
        }
        if (params['category']) {
            fetchCategoryItems(params.category);
        }
    }, [params]);

    useEffect(() => {
        fetchCategories();
    }, []);

    const fetchAllItems = async () => {
        const data = await fetch(
            'https://api.escuelajs.co/api/v1/products'
        ).then((response) => response.json());
        setItems(data);
    };

    const fetchCategoryItems = async (id) => {
        const data = await fetch(
            `https://api.escuelajs.co/api/v1/categories/${id}/products`
        ).then((response) => response.json());
        setItems(data);
    };

    const fetchCategories = async () => {
        const data = await fetch(
            'https://api.escuelajs.co/api/v1/categories/'
        ).then((response) => response.json());

        const fiveCateg = data.slice(0, 5);
        setCategories(fiveCateg);
    };

    return (
        <div className="shopping-container">
            <div className="categories">
                {categories.map((category) => {
                    return (
                        <h1 key={category.id}>
                            <Link to={`/shop/${category.id}`}>
                                {category.name}
                            </Link>
                        </h1>
                    );
                })}
            </div>
            <div className="items">
                {items.map((item) => {
                    return (
                        <h1 key={item.id}>
                            <Link to={`/shop/products/${item.id}`}>
                                {item.title}
                            </Link>
                        </h1>
                    );
                })}
            </div>
        </div>
    );
};

export default Shop;
