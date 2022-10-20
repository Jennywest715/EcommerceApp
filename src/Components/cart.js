import { render } from "@testing-library/react";
import { withCart } from "../contexts/cartContext";
import "./cart.css"
import ProductCard from "./productCard";
import { Link } from "react-router-dom";

function Cart(context) {
    // This just uses the context to render the items in the cart
    // If not items are in the cart, an empty message is displayed.

    const renderItems = () => {
        return Object.keys(context.items).map((key, index) => {
            return (
                <ProductCard
                  id={context.items[key].details.id}
                  name={context.items[key].details.title}
                  price={context.items[key].details.price}
                  image={context.items[key].details.image}
                  category={context.items[key].details.category}
                  description={context.items[key].details.description}
                  smallCard={true}
                  quantity={context.items[key].count}
                  removeItem={context.removeItem}
                />
            );
        })
    }

    const renderTotal = () => {
        let total = 0
        Object.keys(context.items).map((key, index) => {
            total += (context.items[key].count *context.items[key].details.price)
            return;
        })
        
        return (
            <div>
                <h2>Total: ${total.toFixed(2)}</h2>
                <Link to="/checkout"><button>Checkout</button></Link>
            </div>
        )
    }

    if (Object.keys(context.items).length !== 0) {
        return (
            <div className="container">
                <div className="title"><h1>Cart</h1></div>
                {renderItems()}
                {renderTotal()}
            </div>
        )
    }

    return (
        <div className="container">
            <h1>
                Your cart is empty
            </h1>
        </div>
    )
}

export default withCart(Cart)