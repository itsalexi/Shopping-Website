import './Shop.css';
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import categories from '../data/categories';

const Shop = () => {
    const [items, setItems] = useState([]);
    const [category, setCategory] = useState();
    const params = useParams();

    useEffect(() => {
        setItems([]);
        if (!params['category']) {
            setCategory('All Products');
            fetchAllItems();
        }
        if (params['category']) {
            fetchCategoryItems(params.category);
        }
    }, [params]);

    const fetchAllItems = async () => {
        const data = await fetch(
            'https://api.escuelajs.co/api/v1/products'
        ).then((response) => response.json());
        setItems(data);
    };

    const fetchCategoryItems = async (id) => {
        const currentCategory = categories.find((obj) => obj.id === Number(id));
        setCategory(currentCategory.name);

        const data = await fetch(
            `https://api.escuelajs.co/api/v1/categories/${id}/products`
        ).then((response) => response.json());

        setItems(data);
    };

    return (
        <div className="shopping-container">
            <div className="category-container">
                <div className="current-category">
                    <h2>Current Category</h2>
                    <h1>{category}</h1>
                </div>
                <div className="categories">
                    {categories.map((category) => {
                        return (
                            <h2 key={category.id}>
                                <Link to={`/shop/${category.id}`}>
                                    {category.name}
                                </Link>
                            </h2>
                        );
                    })}
                </div>
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
