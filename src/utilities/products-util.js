const BASE_URL = 'https://fakestoreapi.com/products';

const getProducts = async () => {
  let url = `${BASE_URL}`;

  const result = await fetch(url);
  const  productsFound = await result.json();

  return productsFound;
};

const getproductById = async (id) => {
  const result = await fetch(`${BASE_URL}/${id}`);
  const product = await result.json();

  return product;
};

export { getProducts, getproductById };