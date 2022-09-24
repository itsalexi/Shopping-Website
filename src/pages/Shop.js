import './Shop.css';
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import categories from '../data/categories';

const Shop = () => {
    const [items, setItems] = useState([]);
    const [category, setCategory] = useState();

    const params = useParams();

    useEffect(() => {
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
                            <h2 className="categoryText" key={category.id}>
                                <Link to={`/Shopping-Website/shop/${category.id}`}>
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
                        <div className="store-item" key={item.id}>
                            <Link to={`/Shopping-Website/shop/products/${item.id}`}>
                                <img
                                    className="item-image"
                                    src={item.images[0]}
                                    alt=""
                                />
                                <div className="item-card-info">
                                    <h2 className="item-card-title">
                                        {item.title}
                                    </h2>
                                    <p className="item-card-price">
                                        ${item.price}.00
                                    </p>
                                </div>
                            </Link>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Shop;
