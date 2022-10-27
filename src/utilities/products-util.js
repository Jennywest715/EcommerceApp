const BASE_URL = 'https://fakestoreapi.com/products';

const getProducts = async () => {
  // Gets all the products from the URL
  // To be used by the `useProduct` hook created.
  let url = `${BASE_URL}`;
  // Request the products
  const result = await fetch(url);
  // Get the result of the query.
  const  productsFound = await result.json();

  return productsFound;
};

const getproductById = async (id) => {
  // Gets a product by the ID of the product.
  // To be used by the `productDetails` component.
  
  const result = await fetch(`${BASE_URL}/${id}`);
  const product = await result.json();

  return product;
};

export { getProducts, getproductById };
