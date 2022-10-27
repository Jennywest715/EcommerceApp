import { render } from "@testing-library/react";
import { withCart } from "../../contexts/cartContext";
import "./cart.css"
import ProductCard from "../productCard/ProductCard";
import { Link } from "react-router-dom";


// This just uses the context to render the items in the cart, when on the /cart path.
// If not items are in the cart, an empty cart message is displayed.
function Cart(context) {

    // Go through all the items in the cart, and render a `ProductCard` component for it.
    const renderItems = () => {
        return Object.keys(context.cart).map((key, index) => {
            return (
                <ProductCard
                  id={context.cart[key].details.id}
                  name={context.cart[key].details.title}
                  price={context.cart[key].details.price}
                  image={context.cart[key].details.image}
                  category={context.cart[key].details.category}
                  description={context.cart[key].details.description}
                  smallCard={true}
                  quantity={context.cart[key].count}
                  removeItem={context.removeItem}
                />
            );
        })
    }

    // Renders the cart total for all quantity of the items.
    const renderTotal = () => {
        let total = 0
        // For all items in the cart get item price (quantity * price) and add to the total.
        Object.keys(context.cart).map((key, index) => {
            total += (context.cart[key].count *context.cart[key].details.price)
            return;
        })
        
        return (
            <div>
                {/* `toFixed` keeps the rounding to 2 digits for cents. */}
                <h2>Total: ${total.toFixed(2)}</h2>
                <Link to="/checkout"><button>Checkout</button></Link>
            </div>
        )
    }

    // If there are items, show their details and the total.
    if (Object.keys(context.cart).length !== 0) {
        return (
            <div className="my-container">
                <div className="title"><h1>Cart</h1></div>
                {renderItems()}
                {renderTotal()}
            </div>
        )
    }

    // There are no items in the cart.
    return (
        <div className="my-container">
            <h1>
                Your cart is empty
            </h1>
        </div>
    )
}

// `withCart` gives the cart context to this component.
export default withCart(Cart)