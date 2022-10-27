import { withCart } from "../../contexts/cartContext";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getproductById } from "../../Utilities/products-util";
import './productDetails.css';

// Render the details for a product. Used on pages with the route /products/{productID}
function ProductDetails(context) {
    // Grabs the productID from the URL
    const { productId }  = useParams();
    // The details of the product.
    const [details, setDetails] = useState({});
    // Text in the button, updates when use clicked temporarily to inform the user 
    // the item was added to the cart successfully.
    const [buttonText, setButtonText] = useState('Add to cart');
    // The quantity of the item selected.
    const [quantity, setQuantity] = useState(1)

    // Fetches the details of the product based on the ID in the URL.
    const getDetails = async () => {
        const product = await getproductById(productId);
        console.log(product);
        setDetails(product);
    }

    // loads the details of the item on page load.
    useEffect(() => {
        getDetails();
      }, []);
    
    // grab the specific details about the product returned. 
    const {
        id, 
        title,
        price,
        description,
        category,
        image,
    } = details;

    // Called when the user has updated the quantity selected.
    const onQuantityChange = (event) => {
        setQuantity(event.target.value)
    }

    // Adds the item to the cart, using the cartContext passed in.
    const addItem = () => {
        context.addItem(id, details, Number(quantity))
        // Update the text in the button to indicate to the user they were successful.
        setButtonText('Added to cart!')
        // After 1000 ms, change the button text back to the default value.
        setTimeout(function() {
            setButtonText('Add to cart')
          }, 1000);
    }
    
    return (
        <div className="my-container">
            <div>
                <img src={image} className="product-image" />
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
                    <input type="number" min="1" onChange={onQuantityChange} value={quantity}></input>
                    <button onClick={() => {addItem()}}>
                        {buttonText}
                    </button>
                </div>
            </div>
        </div>
    )
}

// `withCart` gives the cart context to this component.
export default withCart(ProductDetails)