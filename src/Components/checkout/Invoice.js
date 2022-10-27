import { withCart } from "../../contexts/cartContext";

// Renders the list of items in the cart, used by `Checkout` component.
function Invoice(context) {

    // Goes through all the items in the cart and lists their name, quantity and item total.
    const renderItems = () => {
        return Object.keys(context.cart).map((key, index) => {
            let itemTotal = context.cart[key].details.price * context.cart[key].count
            return (
                <tr key={context.cart[key].id}>
                    <td>{context.cart[key].details.title}</td>
                    <td>{context.cart[key].count}</td>
                    {/*`toFixed` rounds to 2 digits for cents.*/}
                    <td>${itemTotal.toFixed(2)}</td>
                </tr>
            );
        })
    }

    // Renders the total of all items in the cart.
    const renderTotal = () => {
        let total = 0
        // goes through all items in the cart and adds the item total.
        Object.keys(context.cart).map((key, index) => {
            total += (context.cart[key].count *context.cart[key].details.price)
            return;
        })
        
        return (
            <div className="total">
                {/*`toFixed` rounds to 2 digits for cents.*/}
                <h2>Total: ${total.toFixed(2)}</h2>
            </div>
        )
    }

    return (
        <div>
            <h1>Invoice</h1>
            <table>
                <tbody>
                    <tr key="header">
                        <td><b>Item Name</b></td>
                        <td><b>Quantity</b></td>
                        <td><b>Price</b></td>
                    </tr>
                    {renderItems()}
                </tbody>
            </table>
            {renderTotal()}
        </div>
    )
}

export default withCart(Invoice)