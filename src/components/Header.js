import '../index.css';

const Header = () => {
    return (
        <div class="container">
            <div class="navbar">
                <a href="index.html" class="logo" aria-label="11vo Solutions">
                    <img src="../images/LogoY.jpg" alt="11vo Solutions Logo" />
                    {/* style="width: 80px; height: auto;" */}
                </a>

                <nav class="nav-links">
                    <ul id="MenuItems">
                        <li><a href="/">Home</a></li>
                        <li><a href="/products">Products</a></li>
                        <li><a href="/about-us">About us</a></li>
                        <li><a href="/account">Account</a></li>
                    </ul>
                </nav>

                <a href="/cart" class="cart-icon" aria-label="Go to Cart">
                    <img src="images/carrito-de-compras.svg" width="30px" height="30px" alt="Shopping Cart" />
                </a>

                <img src="images/menu-icon.svg" class="menu-icon" alt="Menu Icon" onclick="menutoggle()"
                    aria-label="Toggle Navigation Menu" />
            </div>
        </div>
    )
}

export default Header;