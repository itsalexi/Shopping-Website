import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ItemDetails = (props) => {
    const [item, setItem] = useState([]);
    const params = useParams();
    const { addItem } = props;

    const addItemToCart = () => {
        addItem(item);
    };

    const getItem = async () => {
        const data = await fetch(
            `https://api.escuelajs.co/api/v1/products/${params.id}`
        ).then((response) => response.json());
        setItem(data);
    };

    useEffect(() => {
        getItem();
    }, []);

    return (
        <div className="item-container">
            <h1>{item.title}</h1>
            <button onClick={addItemToCart}>Add to cart</button>
        </div>
    );
};

export default ItemDetails;
