import { withCart } from "../contexts/cartContext";
import useProducts from "../hooks/useProduct";
import ProductCard from "./productCard";
import { useNavigate } from "react-router-dom";
import "./products.css";

function Products(context) {
    const { allProducts, error } = useProducts();
    const navigate = useNavigate()
    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="container">
        {allProducts?.map((product) => {
          return (
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

export default withCart(Products)