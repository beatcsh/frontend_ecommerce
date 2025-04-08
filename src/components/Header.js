import { useNavigate } from "react-router-dom";
import "../index.css";

const Header = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Eliminar datos de sesión y carrito
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("cart");

        // Redirigir a la página principal
        alert("You have been logged out.");
        navigate("/"); // Redirige a la página principal
    };

    return (
        <div className="container">
            <div className="navbar">
                <a href="/" className="logo" aria-label="11vo Solutions">
                    <img src="../images/LogoY.jpg" alt="11vo Solutions Logo" />
                </a>

                <nav className="nav-links">
                    <ul id="MenuItems">
                        <li><a href="/">Home</a></li>
                        <li><a href="/products">Products</a></li>
                        <li><a href="/about-us">About us</a></li>
                        <li><a href="/account">Account</a></li>
                    </ul>
                </nav>

                <a href="/cart" className="cart-icon" aria-label="Go to Cart">
                    <img src="images/carrito-de-compras.svg" width="30px" height="30px" alt="Shopping Cart" />
                </a>

                <div className="user-actions">
                    {localStorage.getItem("isLoggedIn") === "true" ? (
                        <button onClick={handleLogout} className="logout-btn">Log Out</button>
                    ) : (
                        <a href="/account">Log In</a>
                    )}
                </div>

                <img
                    src="images/menu-icon.svg"
                    className="menu-icon"
                    alt="Menu Icon"
                    aria-label="Toggle Navigation Menu"
                />
            </div>
        </div>
    );
};

export default Header;
