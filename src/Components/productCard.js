import "./productCard.css";
import { FaTrashAlt } from "react-icons/fa";

function ProductCard({ id, name, price, image, category, description, smallCard, quantity, removeItem }) {
    // Used to render a product.
    // Re-used by both the products page and the cart page
    // smallCard is provided to render based on which page is using the component

    // Only render the quantity if it is provided
    const renderQuantity = () => {
        if (quantity) {
            return(
                <div className="quantity">
                    Quantity: {quantity}
                    <FaTrashAlt className="trash" onClick={() => {removeItem(id)}} size={28} />
                </div>
            )
        }
        return (<></>)
    }

    // Only render the price if quantity provided
    const renderPrice = () => {
        if (quantity) {
            let total = price * quantity
            return(
                <div className="price">Price: ${total.toFixed(2)}</div>
            )
        }
        return (<></>)
    }

    return (
        <div className={smallCard?"small-card":"card"}>
            <img src={image} alt="card image" className={smallCard?"small-image":"product-image"} />
            <div className={smallCard?"small-product":"product-details"}>
                <div>{name}</div>
                <div>${price}</div>
                <div>{category}</div>
                <div className="description">{description}</div>
                {renderQuantity()}
            </div>
            {renderPrice()}
        </div>
    )
}

export default ProductCard