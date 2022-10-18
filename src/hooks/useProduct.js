import { useState, useEffect } from "react";
import { getProducts } from "../Utilities/products-util";

function useProducts() {
  const [allProducts, setAllProducts] = useState([]);
  const [error, setError] = useState(null);

  const loadProducts = async () => {

    try {
      const productResult = await getProducts();

      console.log(productResult);

      setAllProducts(productResult);
      setError(null);
    } catch (error) {
      setAllProducts([]);
      setError(error.message);
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);

  return {
    error: error,
    allProducts: allProducts,
  };
}

export default useProducts;