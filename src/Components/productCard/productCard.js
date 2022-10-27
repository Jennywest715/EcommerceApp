import "./productCard.css";
import { FaTrashAlt } from "react-icons/fa";

function ProductCard({ id, name, price, image, category, description, smallCard, quantity, removeItem }) {
    // Used to render the details of a product.
    // Re-used by both the `Products` component and the `cart` component.
    // Args:
    // id: The id of the product
    // name: The name of the product
    // price: The price of the product
    // image: The image URL of the product
    // category: The category of the product
    // description: The description of the product
    // smallCard: Determines the size of the HTML elements this component renders. `True` if it should use the small css classes. (only used by `cart`)
    // quantity: The quantity of the item (only used by `cart`)
    // removeItem: The method used when the remove icon is clicked (only used by `cart`)

    // Only render the quantity and trash icon (only used by `cart`)
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
        // set classNames for styles based on if `smallCard` was passed into the component (only used by `cart`)
        <div className={smallCard?"small-card":"my-card"}>
            <img src={image} className={smallCard?"small-image":"product-image"} />
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