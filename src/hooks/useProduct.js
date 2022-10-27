import { useState, useEffect } from "react";
import { getProducts } from "../Utilities/products-util";

// Hook to fetch products from the remote source and load them into state.
// This is meant to be used on the `products` component when it loads.
function useProducts() {
  // The products returned by the URL
  const [allProducts, setAllProducts] = useState([]);
  // The error (if any) the URL returned.
  const [error, setError] = useState(null);

  const loadProducts = async () => {
    // Loads all the products from the remote source.
    try {
      // if there was no error, set the state to the products returned.
      const productResult = await getProducts();
      setAllProducts(productResult);
      setError(null);
    } catch (error) {
      // An error happened when we requested products, clear out the products and set the error value.
      setAllProducts([]);
      setError(error.message);
    }
  };

  // Makes the hook look for products on page load.
  useEffect(() => {
    loadProducts();
  }, []);

  return {
    error: error,
    allProducts: allProducts,
  };
}

export default useProducts;
