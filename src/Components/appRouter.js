import { withCart } from "../contexts/cartContext";
import Products from './products';
import Cart from './cart/cart';
import Checkout from "./checkout";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ProductDetails from "./productDetails";
import Nav from './nav';

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

export default withCart(AppRouter)