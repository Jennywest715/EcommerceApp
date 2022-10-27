import { withCart } from "../../contexts/cartContext";
import "./checkout.css";
import { useState } from "react";
import Invoice from "./Invoice";
import CheckoutForm from "./CheckoutForm.js";

// Component to render the checkout page, when on path /checkout
function Checkout(context) {

    // If there are items in the cart, list them and show the checkout form.
    if (Object.keys(context.cart).length !== 0) {
        return (
            <div className="my-container">
                <Invoice />
                <CheckoutForm />
            </div>
        )
    }

    // No items in the cart, render a helpful message.
    return (
        <div className="my-container">
            <h1>
                Add items to your cart first!
            </h1>
        </div>
    )
}

export default withCart(Checkout)