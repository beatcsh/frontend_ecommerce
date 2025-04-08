import { useParams, useLocation } from "react-router-dom";
import { useState } from "react";
import { products } from "../data/products";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

const DetailsPage = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const location = useLocation();
    const [quantity, setQuantity] = useState(1);

    const product = location.state || products.find(product => product.id === id);

    if (!product) return <h2>No hay producto seleccionado</h2>;

    const handleAddToCart = () => {
        // Verifica si el usuario está logueado
        if (localStorage.getItem("isLoggedIn") !== "true") {
            // Si no está logueado, redirige a la página de login
            alert("Please log in to add items to the cart.");
            navigate("/login"); // Redirige a la página de login
            return; // No continúa con la acción
        }

        const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
        const existingProduct = existingCart.find(item => item.id === product.id);

        if (existingProduct) {
            existingProduct.quantity += parseInt(quantity);
        } else {
            existingCart.push({ ...product, quantity: parseInt(quantity) });
        }

        localStorage.setItem("cart", JSON.stringify(existingCart));
        alert(`${product.name} added to cart!`);
    };

    const related_prods = products.slice(5, 8).map((product) => {
        return (
            <div className="col-4" key={product.id}>
                <a className="details-btn" onClick={() => navigate(`/details/${product.id}`)}>
                    <img src={product.image} alt={product.name} />
                    <h4>{product.name}</h4>
                    <p>${product.price} USD</p>
                </a>
            </div>
        );
    });

    return (
        <>
            <Header />
            <div className="small-container single-product">
                <div className="row">
                    <div className="col-2">
                        <img src={product.image} width="70%" id="ProductImg" alt={product.name} />
                    </div>
                    <div className="col-2">
                        <h1>{product.name}</h1>
                        <h4>${product.price} USD</h4>
                        <input
                            type="number"
                            value={quantity}
                            min="1"
                            onChange={(e) => setQuantity(e.target.value)}
                        />
                        <br />
                        <h3>Product Details <i className="fa fa-indent"></i></h3>
                        <br />
                        <p>{product.description}</p>
                        <button onClick={handleAddToCart}>Add to cart</button>
                    </div>
                </div>
            </div>
            <div className="small-container">
                <div className="row row-2">
                    <h2>Related Products</h2>
                </div>
            </div>

            <div className="small-container">
                <div className="row">
                    {related_prods}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default DetailsPage;