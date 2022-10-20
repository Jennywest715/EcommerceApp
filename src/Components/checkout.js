import { withCart } from "../contexts/cartContext";
import "./checkout.css";

function Checkout(context) {
    return (
        <div className="container">Checkout</div>
    )
}

export default withCart(Checkout)