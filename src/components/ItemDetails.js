import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ItemDetails = () => {
    const [item, setItem] = useState([]);
    const params = useParams();

    useEffect(() => {
        getItem();
    }, []);

    const getItem = async () => {
        const data = await fetch(
            `https://api.escuelajs.co/api/v1/products/${params.id}`
        ).then((response) => response.json());
        setItem(data);
    };

    return (
        <div className="item-container">
            <h1>{item.title}</h1>
        </div>
    );
};

export default ItemDetails;
