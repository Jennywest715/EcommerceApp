import { withCart } from "../../contexts/cartContext";
import useProducts from "../../hooks/useProduct";
import ProductCard from "../productCard/ProductCard";
import { useNavigate } from "react-router-dom";

// The component to render all the products available, rendered when on `/products` path.
function Products(context) {
    // Uses the custom hook to get all the products available, or an error if one occured.
    const { allProducts, error } = useProducts();
    // function to navigate a different page (that was setup by the rotuer)
    const navigate = useNavigate()

    // If there was an error just render that
    if (error) {
        return <div>{error}</div>;
    }

    // Otherwise render the products page.
    return (
        <div className="my-container">
        {/* if there are products, go through all the products returned and render a `productCard` for it on the page. */}
        {allProducts?.map((product) => {
          return (
            // When clicking on the product you should be taken to the `productDetails` page for the product.
            <div 
              key={product.id}
              onClick={() => {
                navigate(`/products/${product.id}`);
              }}
            >
              <ProductCard
                id={product.id}
                name={product.title}
                price={product.price}
                image={product.image}
                category={product.category}
                description={product.description}
              />
            </div>
          );
        })}
      </div>
    )
}

// `withCart` gives the cart context to this component.
export default withCart(Products)