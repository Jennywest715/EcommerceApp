import { withCart } from "../contexts/cartContext";

function Cart({ products, addProduct, removeProduct }) {
    <div>Cart</div>
}

export default withCart(Cart)