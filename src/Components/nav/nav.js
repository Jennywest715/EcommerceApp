import { withCart } from "../../contexts/cartContext";
import "./nav.css"
import { FaShoppingCart } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Badge from 'react-bootstrap/Badge'

// Component to render the navigation bar. Shown on all pages by being created by `AppRouter` component.
function Nav(context) {
    // Get the path of the url
    const location = useLocation()
    // set based on what path the user is on, used to highlight button that matches the path.
    const [active, setActive] = useState({});
    
    // Set the active link on initial load based on the URL path and anytime the URL changes.
    useEffect(() => {
        setActive({
            'products': location.pathname === '/products' ?  'active':'',
            'cart': location.pathname === '/cart' ?  'active':'',
            'checkout': location.pathname === '/checkout' ?  'active':'',
        })
    }, [location]);
    
    // Sets the active link after a user click
    const click = (link) => {
        setActive({
            'products': link === '/products' ?  'active':'',
            'cart': link === '/cart' ?  'active':'',
            'checkout': link === '/checkout' ?  'active':'',
        })
    }
    
    return (
        <div>
            <ul className="header">
                <li>
                    <Link to='/products' 
                        // When active on products the className will be `active` and set the background color.
                        className={active['products']}
                        onClick={() => {click('/products')}}>
                            Products
                    </Link>
                </li>
                <li className="header-right">
                    <Link to='/cart' 
                        className={active['cart']} 
                        onClick={() => {click('/cart')}}>
                            <FaShoppingCart> </FaShoppingCart>
                            <Badge variant="primary">{Object.keys(context.cart).length}</Badge>
                    </Link>
                </li>
                <li className="header-right">
                    <Link to='/checkout' 
                        className={active['checkout']} 
                        onClick={() => {click('/checkout')}}>
                            Checkout
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default withCart(Nav)