import { withCart } from "../contexts/cartContext";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getproductById } from "../Utilities/products-util";

function ProductDetails({ products, addProduct, removeProduct }) {
    const { productId }  = useParams();
    const [details, setDetails] = useState({});
    const getDetails = async () => {
        const product = await getproductById(productId);
        console.log(product);
        setDetails(product);
    }

    useEffect(() => {
        getDetails();
      }, []);
    
    const {
        id, 
        title,
        price,
        description,
        category,
        image,
    } = details;

    return (
        <div>ProductDetails {title} </div>
    )
}

export default withCart(ProductDetails)