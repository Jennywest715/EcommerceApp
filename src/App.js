import logo from './logo.svg';
import './App.css';
import ProductDetails from './Components/productDetails';
import Products from './Components/products';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Navigate
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/products" />,
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "products/:productId",
    element: <ProductDetails></ProductDetails>,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;