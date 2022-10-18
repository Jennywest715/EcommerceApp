import { withCart } from "../contexts/cartContext";

function Checkout({ products, addProduct, removeProduct }) {
    <div>Checkout</div>
}

export default withCart(Checkout)