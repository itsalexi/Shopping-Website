import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './ItemDetails.css';

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

    console.log(item);
    return (
        <div className="item-container">
            <div className="item">
                <div className="item-pictures">
                    <img className="item-picture" src={item.images} alt="" />
                </div>
                <div className="item-info">
                    <h1 className="item-title">{item.title}</h1>
                    <p className="item-description">{item.description}</p>
                    <button className="return-button" onClick={addItemToCart}>
                        ADD TO CART
                    </button>
                    <button className="return-button">
                        <Link to="/shop">RETURN TO STORE</Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ItemDetails;
