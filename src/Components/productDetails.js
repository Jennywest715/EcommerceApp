import { withCart } from "../contexts/cartContext";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getproductById } from "../Utilities/products-util";
import './productDetails.css';

function ProductDetails(context) {
    const { productId }  = useParams();
    const [details, setDetails] = useState({});
    const [buttonText, setButtonText] = useState('Add to cart');
    const [quantity, setQuantity] = useState(1)
    const getDetails = async () => {
        const product = await getproductById(productId);
        console.log(product);
        setDetails(product);
    }

    useEffect(() => {
        getDetails();
      }, []);
    
    const {
        id, 
        title,
        price,
        description,
        category,
        image,
    } = details;

    const onInputChange = (event) => {
        setQuantity(event.target.value)
    }

    const addItem = () => {
        context.addItem(id, details, Number(quantity))
        setButtonText('Added!')
        setTimeout(function() {
            setButtonText('Add to cart')
          }, 1000);
    }
    
    return (
        <div className="container">
            <div>
                <img src={image} alt="product" className="product-image" />
            </div>
            <div className="details">
                <h1>{title}</h1>
                <h3><b>${price}</b></h3>
                <p>{description}</p>
                <p><i>{category}</i></p>
                <div>
                    <span className="input">
                        Quantity:
                    </span>
                    <input type="number" min="1" onChange={onInputChange} value={quantity}></input>
                    <button onClick={() => {addItem()}}>
                        {buttonText}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default withCart(ProductDetails)