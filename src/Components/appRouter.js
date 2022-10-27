import { withCart } from "../contexts/cartContext";
import Products from './products/Products';
import Cart from './cart/Cart';
import Checkout from "./checkout/Checkout";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ProductDetails from "./productDetails/ProductDetails";
import Nav from './nav/Nav';


// The router for the App
// Sets up the paths for all the pages in the App so when user goes to the 
// `path` (ie /products) it will render the correct page component.
// Any common components that you want to use on all pages in the App should be added here.
// `Nav` is the common navigation bar shown on all pages.
function AppRouter(context) {
    return (
        <BrowserRouter>
            <Nav></Nav>
            <Routes>
                <Route path="/" element={<Navigate to="/products"/> }/>
                <Route path="/products" element={ <Products />}/>
                <Route path="products/:productId" element={ <ProductDetails />}/>
                <Route path="/cart" element={ <Cart /> }/>
                <Route path="/checkout" element={ <Checkout /> }/>
            </Routes>
        </BrowserRouter>
    )
}

// `withCart` gives the cart context to this component.
export default withCart(AppRouter)