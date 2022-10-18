import "./productCard.css";

function ProductCard({ id, name, price, image, category, description }) {
    return (
        <div className="card">
            <img src={image} className="product-image" />
            <div className="product-details">
                <div>{name}</div>
                <div>${price}</div>
                <div>{category}</div>
                <div className="description">{description}</div>
            </div>
        </div>
    )
}

export default ProductCard